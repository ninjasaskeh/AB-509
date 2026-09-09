import React, { useLayoutEffect, useRef } from "react";
import useWindowStore from "@store/window.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const isOpen = useWindowStore((s) => s.windows[windowKey].isOpen);
    const zIndex = useWindowStore((s) => s.windows[windowKey].zIndex);
    const focusWindow = useWindowStore((s) => s.focusWindow);
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      const header = el?.querySelector("#window-header");
      if (!el || !header) return;

      const [instance] = Draggable.create(el, {
        trigger: header,
        onPress: () => focusWindow(windowKey),
      });

      const handleFocus = () => focusWindow(windowKey);
      el.addEventListener("pointerdown", handleFocus);

      return () => {
        instance.kill();
        el.removeEventListener("pointerdown", handleFocus);
      };
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
  return Wrapped;
};
export default WindowWrapper;
