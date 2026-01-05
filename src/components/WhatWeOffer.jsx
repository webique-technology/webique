import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../style/StackCards.scss";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Strategy",
    text: "We align digital solutions with business goals.",
  },
  {
    title: "Design",
    text: "User-focused, modern interfaces.",
  },
  {
    title: "Development",
    text: "Scalable and performant solutions.",
  },
  {
    title: "Launch",
    text: "Optimized delivery and long-term support.",
  },
];

const VerticalStack = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${sections.length * 100}%`,
          scrub: true,
          pin: true,
        },
      });

      sectionsRef.current.forEach((section, i) => {
        if (i !== 0) {
          tl.fromTo(
            section,
            { yPercent: 100 },
            { yPercent: 0, duration: 1, ease: "none" },
            i
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="stack-container" ref={containerRef}>
      {sections.map((item, i) => (
        <div
          key={i}
          className="stack-section"
          ref={(el) => (sectionsRef.current[i] = el)}
        >
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default VerticalStack;
