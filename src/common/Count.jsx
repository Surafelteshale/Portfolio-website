
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Count = ({ number, text = "", add_style = false }) => {
  const numberRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const element = numberRef.current;

    if (!element) return;

    const counter = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value: number,
        duration: 2,
        ease: "power2.out",
        snap: { value: 1 },
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 88%",
          once: true,
        },
        onUpdate: () => {
          element.textContent = Math.round(counter.value);
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [number]);

  return (
    <div
      ref={wrapperRef}
      className={`d-flex ${
        add_style
          ? "align-items-center justify-content-center"
          : ""
      }`}
    >
      <span ref={numberRef}>0</span>
      {text && <span>{text}</span>}
    </div>
  );
};

export default Count;
