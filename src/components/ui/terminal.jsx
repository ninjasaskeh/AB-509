import {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@lib/utils.js";

const SequenceContext = createContext(null);
const useSequence = () => useContext(SequenceContext);

const ItemIndexContext = createContext(null);
const useItemIndex = () => useContext(ItemIndexContext);

// Ported from the Magic UI "Terminal" recipe (terminalContext.md), stripped
// of TypeScript. `TerminalSequence` is only the sequencing provider — the
// recipe's own bordered/traffic-light box is dropped since our windows
// already have their own macOS chrome (WindowWrapper + WindowControls).

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  startOnView = false,
  ...props
}) => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { amount: 0.3, once: true });

  const sequence = useSequence();
  const itemIndex = useItemIndex();
  const [hasStarted, setHasStarted] = useState(false);
  useEffect(() => {
    if (!sequence || itemIndex === null) return;
    if (!sequence.sequenceStarted) return;
    if (hasStarted) return;
    if (sequence.activeIndex === itemIndex) {
      const timeout = setTimeout(() => setHasStarted(true), 0);
      return () => clearTimeout(timeout);
    }
  }, [sequence, hasStarted, itemIndex]);

  const shouldAnimate = sequence ? hasStarted : startOnView ? isInView : true;

  // In a sequence, don't mount the real element until it's this item's turn.
  // Opacity alone doesn't collapse layout — every not-yet-revealed block
  // would otherwise still reserve its full final height, which throws off
  // scrollHeight-based auto-scroll (it'd measure the whole finished
  // transcript from frame one and scroll straight past the part that's
  // actually typing/visible).
  if (sequence && !hasStarted) {
    return null;
  }

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: -5 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
      transition={{ duration: 0.3, delay: sequence ? 0 : delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      onAnimationComplete={() => {
        if (!sequence) return;
        if (itemIndex === null) return;
        sequence.completeItem(itemIndex);
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  startOnView = true,
  ...props
}) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string.");
  }

  const MotionComponent = motion[Component];

  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { amount: 0.3, once: true });

  const sequence = useSequence();
  const itemIndex = useItemIndex();
  const hasSequence = sequence !== null;
  const sequenceStarted = sequence?.sequenceStarted ?? false;
  const sequenceActiveIndex = sequence?.activeIndex ?? null;
  const sequenceCompleteItemRef = useRef(null);
  const sequenceItemIndexRef = useRef(null);

  useEffect(() => {
    sequenceCompleteItemRef.current = sequence?.completeItem ?? null;
    sequenceItemIndexRef.current = itemIndex;
  }, [sequence?.completeItem, itemIndex]);

  useEffect(() => {
    let startTimeout = null;

    if (hasSequence && itemIndex !== null) {
      if (sequenceStarted && !started && sequenceActiveIndex === itemIndex) {
        setStarted(true);
      }
    } else if (!startOnView || isInView) {
      startTimeout = setTimeout(() => setStarted(true), delay);
    }

    return () => {
      if (startTimeout !== null) clearTimeout(startTimeout);
    };
  }, [
    delay,
    startOnView,
    isInView,
    started,
    hasSequence,
    sequenceActiveIndex,
    sequenceStarted,
    itemIndex,
  ]);

  useEffect(() => {
    let typingEffect = null;

    if (started) {
      let i = 0;
      typingEffect = setInterval(() => {
        if (i < children.length) {
          setDisplayedText(children.substring(0, i + 1));
          i++;
        } else {
          if (typingEffect !== null) clearInterval(typingEffect);
          const completeItem = sequenceCompleteItemRef.current;
          const currentItemIndex = sequenceItemIndexRef.current;
          if (completeItem && currentItemIndex !== null) {
            completeItem(currentItemIndex);
          }
        }
      }, duration);
    }

    return () => {
      if (typingEffect !== null) clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  // Same reasoning as AnimatedSpan: in a sequence, stay unmounted until it's
  // this item's turn so it doesn't reserve layout space early.
  if (hasSequence && !started) {
    return null;
  }

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

// A sequence step that animates a fill bar instead of fading/typing text —
// e.g. a fake "downloading" or "installing" progress line. Advances the
// sequence itself once it reaches 100%, same as the other primitives.
export const TerminalProgressBar = ({ label, duration = 1500, className }) => {
  const sequence = useSequence();
  const itemIndex = useItemIndex();
  const [hasStarted, setHasStarted] = useState(false);
  const [pct, setPct] = useState(0);

  // Same trick TypingAnimation uses below: keep the sequence's completeItem
  // in a ref instead of a dependency, since `sequence` gets a new identity
  // every time ANY item in the list advances — depending on it directly
  // would restart this effect (and the interval, and pct) on every later
  // step, not just this one's own turn.
  const sequenceCompleteItemRef = useRef(null);
  const sequenceItemIndexRef = useRef(null);
  useEffect(() => {
    sequenceCompleteItemRef.current = sequence?.completeItem ?? null;
    sequenceItemIndexRef.current = itemIndex;
  }, [sequence?.completeItem, itemIndex]);

  useEffect(() => {
    if (!sequence || itemIndex === null) return;
    if (!sequence.sequenceStarted || hasStarted) return;
    if (sequence.activeIndex === itemIndex) {
      const timeout = setTimeout(() => setHasStarted(true), 0);
      return () => clearTimeout(timeout);
    }
  }, [sequence, hasStarted, itemIndex]);

  useEffect(() => {
    if (!hasStarted) return;

    const stepMs = 40;
    const totalSteps = Math.max(1, Math.round(duration / stepMs));
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const next = Math.min(100, Math.round((step / totalSteps) * 100));
      setPct(next);
      if (next >= 100) {
        clearInterval(interval);
        const completeItem = sequenceCompleteItemRef.current;
        const currentItemIndex = sequenceItemIndexRef.current;
        if (completeItem && currentItemIndex !== null) {
          completeItem(currentItemIndex);
        }
      }
    }, stepMs);

    return () => clearInterval(interval);
  }, [hasStarted, duration]);

  // Same reasoning as AnimatedSpan/TypingAnimation — stay unmounted until
  // it's this item's turn, so it doesn't reserve its full height early.
  if (!hasStarted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("text-sm", className)}
    >
      <div className="flex items-center justify-between mb-1">
        <span>{label}</span>
        <span className="tabular-nums">{pct}%</span>
      </div>
      <div className="h-2 w-full rounded-full overflow-hidden bg-neutral-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-400"
          style={{ width: `${pct}%` }}
        />
      </div>
    </motion.div>
  );
};

export const TerminalSequence = ({
  children,
  className,
  sequence = true,
  startOnView = true,
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: true });

  // Auto-follow the bottom as lines stream in, like a real terminal —
  // watches for new nodes (AnimatedSpan blocks appearing) and text changes
  // (TypingAnimation's per-character updates). Only follows while the user
  // hasn't scrolled away from the bottom themselves — otherwise every new
  // character would yank a manual scroll-up right back down.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const BOTTOM_THRESHOLD = 24;
    let pinnedToBottom = true;
    let rafId = null;

    const handleScroll = () => {
      pinnedToBottom =
        el.scrollHeight - el.scrollTop - el.clientHeight <= BOTTOM_THRESHOLD;
    };

    // TypingAnimation fires a mutation on every single character, so batch
    // the follow-scroll to once per animation frame instead of writing
    // scrollTop synchronously on every callback — otherwise the constant
    // forced-layout reads/writes starve painting and the terminal renders
    // blank while typing is in progress.
    const scrollToBottom = () => {
      if (!pinnedToBottom || rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight;
        rafId = null;
      });
    };

    el.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new MutationObserver(scrollToBottom);
    observer.observe(el, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      el.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const sequenceHasStarted = sequence ? !startOnView || isInView : false;

  const contextValue = useMemo(() => {
    if (!sequence) return null;
    return {
      completeItem: (index) => {
        setActiveIndex((current) => (index === current ? current + 1 : current));
      },
      activeIndex,
      sequenceStarted: sequenceHasStarted,
    };
  }, [sequence, activeIndex, sequenceHasStarted]);

  const wrappedChildren = useMemo(() => {
    if (!sequence) return children;
    const array = Children.toArray(children);
    return array.map((child, index) => (
      <ItemIndexContext.Provider key={index} value={index}>
        {child}
      </ItemIndexContext.Provider>
    ));
  }, [children, sequence]);

  const content = (
    <div ref={containerRef} className={className}>
      {wrappedChildren}
    </div>
  );

  if (!sequence) return content;

  return (
    <SequenceContext.Provider value={contextValue}>
      {content}
    </SequenceContext.Provider>
  );
};
