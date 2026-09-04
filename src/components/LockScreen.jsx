import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Lock } from "lucide-react";
import { LOCK_DATA } from "@constants";
import useLockStore from "@store/lock.js";

const LockScreen = () => {
  const { isUnlocked, unlock } = useLockStore();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const screenRef = useRef(null);
  const formRef = useRef(null);
  const mountedRef = useRef(false);

  useGSAP(() => {
    const el = screenRef.current;
    if (!el) return;

    setValue("");
    setError(false);

    if (!mountedRef.current) {
      mountedRef.current = true;
      el.style.display = isUnlocked ? "none" : "flex";
      return;
    }

    if (isUnlocked) {
      gsap.to(el, {
        opacity: 0,
        scale: 1.05,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          el.style.display = "none";
        },
      });
    } else {
      el.style.display = "flex";
      gsap.fromTo(
        el,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
      );
    }
  }, [isUnlocked]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === LOCK_DATA.password) {
      unlock();
      return;
    }

    setError(true);
    setValue("");
    gsap
      .timeline()
      .to(formRef.current, { x: -10, duration: 0.06 })
      .to(formRef.current, { x: 10, duration: 0.06 })
      .to(formRef.current, { x: -8, duration: 0.06 })
      .to(formRef.current, { x: 8, duration: 0.06 })
      .to(formRef.current, { x: 0, duration: 0.06 });
  };

  return (
    <section id="lock-screen" ref={screenRef}>
      <div className="lock-card">
        <img
          src={LOCK_DATA.avatar}
          alt={LOCK_DATA.name}
          className="lock-avatar"
        />
        <p className="lock-name">{LOCK_DATA.name}</p>

        <form ref={formRef} onSubmit={handleSubmit} className="lock-form">
          <Lock className="lock-icon" size={14} />
          <input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder={error ? "Wrong password" : "Enter Password"}
            className={error ? "error" : ""}
          />
          <button type="submit" aria-label="Unlock">
            <ArrowRight size={14} />
          </button>
        </form>

        <p className="lock-hint">{LOCK_DATA.hint}</p>
      </div>
    </section>
  );
};

export default LockScreen;
