import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.025,
  duration = 0.75,
  start = "top 82%",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll(".animated-char");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          yPercent: 115,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration,
          stagger,
          delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: container,
            start,
            once: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [text, delay, stagger, duration, start]);

  const words = text.split(" ");

  return (
    <Tag
      ref={containerRef}
      className={`animated-text ${className}`}
    >
      <span className="animated-text-accessible">{text}</span>

      <span className="animated-text-visual" aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span
            className="animated-word"
            key={`${word}-${wordIndex}`}
          >
            {Array.from(word).map((char, charIndex) => (
              <span className="animated-char-mask" key={charIndex}>
                <span className="animated-char">{char}</span>
              </span>
            ))}
            {wordIndex < words.length - 1 ? "\u00A0" : ""}
          </span>
        ))}
      </span>
    </Tag>
  );
};

export default AnimatedText;