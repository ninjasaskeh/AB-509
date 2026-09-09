import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X } from "lucide-react";
import { GIFT_DATA, socials } from "@constants";
import useGiftStore from "@store/gift.js";

const GiftReveal = () => {
  const { isOpen, closeGift } = useGiftStore();
  const whatsapp = socials.find((social) => social.text === "WhatsApp");
  const screenRef = useRef(null);
  const cardRef = useRef(null);
  const mountedRef = useRef(false);

  useGSAP(() => {
    const el = screenRef.current;
    const card = cardRef.current;
    if (!el || !card) return;

    if (!mountedRef.current) {
      mountedRef.current = true;
      el.style.display = isOpen ? "flex" : "none";
      return;
    }

    if (isOpen) {
      el.style.display = "flex";
      gsap
        .timeline()
        .fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" })
        .fromTo(
          card,
          { scale: 0.85, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.6)" },
          "-=0.2",
        );
    } else {
      gsap.to(el, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          el.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  return (
    <section id="gift-screen" ref={screenRef}>
      <div className="gift-card" ref={cardRef}>
        <button
          type="button"
          className="gift-close"
          aria-label="Close"
          onClick={closeGift}
        >
          <X size={16} />
        </button>

        <img
          src={GIFT_DATA.image}
          alt={GIFT_DATA.title}
          loading="lazy"
          className="gift-image"
        />

        <p className="gift-title">{GIFT_DATA.title}</p>
        <p className="gift-caption">{GIFT_DATA.caption}</p>

        <a
          href={whatsapp?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="gift-wa-btn"
        >
          <img src={whatsapp?.icon} alt="" loading="lazy" className="gift-wa-icon" />
          Continue to WhatsApp
        </a>
      </div>
    </section>
  );
};

export default GiftReveal;
