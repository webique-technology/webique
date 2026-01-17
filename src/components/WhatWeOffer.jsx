// what we offer
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import "../style/StackCards.scss";
import stackImg from "../assets/images/stack-img.png";

gsap.registerPlugin(ScrollTrigger);

// const stackScrollData = [
//   {
//     id: 1,
//     title: "Website Design & Development",
//     desc: "Custom websites designed to captivate your audience.",
//     img: stackImg
//   },
//   {
//     id: 2,
//     title: "UI/UX Design & Brand Identity",
//     desc: "Design and branding solutions for businesses.",
//     img: stackImg
//   },
//   {
//     id: 3,
//     title: "WordPress Development",
//     desc: "WordPress websites that are fast and responsive.",
//     img: stackImg
//   },
//   {
//     id: 4,
//     title: "E-commerce Solutions",
//     desc: "Online stores that convert visitors into buyers.",
//     img: stackImg
//   },
//   {
//     id: 5,
//     title: "SEO Optimization",
//     desc: "Improve your ranking and visibility online.",
//     img: stackImg
//   },
//   {
//     id: 6,
//     title: "Performance Optimization",
//     desc: "Speed and performance improvements for websites.",
//     img: stackImg
//   },
//   {
//     id: 7,
//     title: "Maintenance & Support",
//     desc: "Ongoing support and website maintenance.",
//     img: stackImg
//   },
//   {
//     id: 8,
//     title: "Custom Integrations",
//     desc: "Custom solutions to connect your tools.",
//     img: stackImg
//   },
// ];


const sections = [
  // stack slide vrtical
  {
    stack: [
      {
        id: 1,
        title: "Website Design & Development",
        desc: "Custom websites designed to captivate your audience.",
        img: stackImg
      },
      {
        id: 2,
        title: "UI/UX Design & Brand Identity",
        desc: "Design and branding solutions for businesses.",
        img: stackImg
      },
      {
        id: 3,
        title: "WordPress Development",
        desc: "WordPress websites that are fast and responsive.",
        img: stackImg
      },
      {
        id: 4,
        title: "E-commerce Solutions",
        desc: "Online stores that convert visitors into buyers.",
        img: stackImg
      },
    ]
  },
  // stack slide vrtical
  {
    stack: [
      {
        id: 5,
        title: "Emailer Template Design",
        desc: "Custom websites designed to captivate your audience.",
        img: stackImg
      },
      {
        id: 6,
        title: "Security, Maintenance & Support",
        desc: "Design and branding solutions for businesses.",
        img: stackImg
      },
      {
        id: 7,
        title: "Branding Support",
        desc: "WordPress websites that are fast and responsive.",
        img: stackImg
      },
      {
        id: 8,
        title: "SEO & Lead Enablement",
        desc: "Online stores that convert visitors into buyers.",
        img: stackImg
      },
    ]
  },
];


export const StackSlider = () => {
  const wrapperRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemsRef.current;

      // Initial state
      items.forEach((item, index) => {
        if (index !== 0) {
          gsap.set(item, { yPercent: 100 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          start: "top top",
          end: `+=${items.length * 100}%`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
        defaults: { ease: "none" },
      });

      items.forEach((item, i) => {
        if (i !== 0) {
          tl.to(
            item,
            {
              yPercent: 0,
              scale: 1,
              borderRadius: "10px",
            },
            i
          );
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="section-padding pb-0">
        <div className="scroll-section vertical-section">
          <div className="wrapper" ref={wrapperRef}>
            <h2 className="text-center mb-0">What we offer</h2>
            <div role="list" className="list">
              {sections.map((section, index) => (
                <div
                  key={index}
                  role="listitem"
                  className="item"
                  ref={(el) => (itemsRef.current[index] = el)}
                >
                  <Container>
                    <div className="item-content">
                      {/* Example: render stack items later */}
                      {section.stack.map(card => (
                        <div className="stack-row">
                          <div className="stack-content" key={index}>
                            <h4 className="d-flex align-items-center gap-4 scroll-h4 m-0 pe-4 pe-md-0">
                              <span className="d-none d-md-block">
                                {`0${card.id}`}
                              </span>
                              {card.title}
                            </h4>
                            <p className="m-0 d-none d-lg-block">
                              {card.desc}
                            </p>

                            <div className="stack-img">
                              <img
                                src={card.img}
                                alt={card.title}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Container>
                </div>
              ))}
              {/* {sections.map((num, index) => (
              <div
                key={num}
                role="listitem"
                className="item"
                ref={(el) => (itemsRef.current[index] = el)}
              >
                <Container>
                  <div className="item-content">
                    <h2 className="item-number">{num}</h2>
                    <h3>Stack Scroll {num}</h3>
                  </div>
                </Container>
              </div>
            ))} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
