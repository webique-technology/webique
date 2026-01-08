// WhatWeOffer.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import "../style/StackCards.scss";
import { Container } from "react-bootstrap";
import stackImg from "../assets/images/stack-img.png";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(Observer, ScrollToPlugin, ScrollTrigger);


const stackScrollData = [
  { id: 1, title: "Website Design & Development", desc: <>Custom websites designed to captivate <br /> your audience and drive conversions.</>, img: stackImg },
  { id: 2, title: "UI/UX Design & Brand Identity", desc: <>Custom websites designed to captivate <br /> your audience and drive conversions.</>, img: stackImg },
  { id: 3, title: "WordPress Development", desc: <>Custom websites designed to captivate <br /> your audience and drive conversions.</>, img: stackImg },
  { id: 4, title: "Website Design & Development", desc: <>Custom websites designed to captivate <br /> your audience and drive conversions.</>, img: stackImg },
  { id: 5, title: "UI/UX Design & Brand Identity", desc: <>Custom websites designed to captivate <br /> your audience and drive conversions.</>, img: stackImg },
  { id: 6, title: "UI/UX Design & Brand Identity", desc: <>Custom websites designed to captivate <br /> your audience and drive conversions.</>, img: stackImg },
  { id: 7, title: "WordPress Development", desc: <>Custom websites designed to captivate <br /> your audience and drive conversions.</>, img: stackImg },
  { id: 8, title: "WordPress Development", desc: <>Custom websites designed to captivate <br /> your audience and drive conversions.</>, img: stackImg },
];

const ROWS_VISIBLE = 4;

const WhatWeOffer = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const rows = containerRef.current.children;
    const rowHeight = rows[0].offsetHeight;
    const totalRows = rows.length;
    const maxIndex = totalRows - ROWS_VISIBLE;
    // console.log("max-index:", maxIndex);

    const scrollToSection = (direction) => {
      const section = sectionRef.current;
      console.log("section:", section);

      const target =
        direction === "down"
          ? section.nextElementSibling
          : section.previousElementSibling;

      console.log("target:", target);

      console.log("target logic", target && target.tagName === section);
      if (target) {

        gsap.to(window, {
          scrollTo: target.offsetTop,
          duration: 1,
          ease: "power2.out",
        });
      }
    };

    const gotoIndex = (index) => {
      index = Math.max(0, Math.min(index, maxIndex)); // clamp
      currentIndex.current = index;

      // console.log("current index:", currentIndex);

      gsap.to(containerRef.current, {
        y: -index * rowHeight,
        duration: 0.6,
        ease: "power1.inOut",
      });
    };

    const observer = Observer.create({
      target: sectionRef.current,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      tolerance: 4,
      preventDefault: true,

      onUp: () => {
        if (currentIndex.current >= maxIndex) {
          scrollToSection("down");
        } else {
          gotoIndex(currentIndex.current + 4);
        }
      },

      onDown: () => {
        if (currentIndex.current <= 0) {
          scrollToSection("up");
        } else {
          gotoIndex(currentIndex.current - 4);
        }
      },
    });

    console.log("scroll up:", observer.onUp);
    console.log("scroll down:", observer.onDown);
    console.log("gsap observer:", observer);


    return () => observer.kill();
  }, []);

  return (
    <section className="section-padding what-we-offer">
      <Container>
        <div
          className="stack-scroll-container"
          ref={sectionRef}
        >
          {/* scroll 4 to 4 rows */}
          <div className="stack-scroll-inner" ref={containerRef}>
            {stackScrollData.map((value, i) => (
              <div className="stack-row" key={i}>
                <div className="stack-content">
                  <h4 className="d-flex gap-4">
                    <span>{`0${value.id}`}</span>
                    {value.title}
                  </h4>
                  <p className="m-0">{value.desc}</p>
                  <div className="stack-img">
                    <img src={value.img} alt={value.title} className="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeOffer;
