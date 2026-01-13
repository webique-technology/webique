// WhatWeOffer.jsx

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Container } from "react-bootstrap";
import "../style/StackCards.scss";
import stackImg from "../assets/images/stack-img.png";

gsap.registerPlugin(Observer, ScrollToPlugin);

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
const STEP = 4;

const WhatWeOffer = () => {
  const sectionRef = useRef(null);
  const observerTargetRef = useRef(null);
  const containerRef = useRef(null);
  const currentIndex = useRef(0);
  const observerRef = useRef(null);

  useEffect(() => {
    // mobile (normal scroll)
    if (window.innerWidth <= 768) return;

    const section = sectionRef.current;
    const observerTarget = observerTargetRef.current;
    const container = containerRef.current;

    if (!section || !observerTarget || !container) return;

    const rows = container.children;
    const rowHeight = rows[0].offsetHeight;
    const totalRows = rows.length;
    const maxIndex = totalRows - ROWS_VISIBLE;

    const gotoIndex = (index) => {
      const clamped = Math.max(0, Math.min(index, maxIndex));
      currentIndex.current = clamped;

      gsap.to(container, {
        y: -clamped * rowHeight,
        duration: 0.6,
        ease: "power1.inOut",
      });
    };

    console.log("gotoindex:", gotoIndex.clamped);


    const initObserver = () => {
      if (observerRef.current) return;

      observerRef.current = Observer.create({
        target: observerTarget,
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        tolerance: 6,
        preventDefault: true,

        onUp: () => {
          const next = currentIndex.current + STEP;

          if (next <= maxIndex) {
            gotoIndex(next);
          } else {
            observerRef.current.kill();
            observerRef.current = null;
          }
        },

        onDown: () => {
          const prev = currentIndex.current - STEP;

          if (prev >= 0) {
            gotoIndex(prev);
          } else {
            observerRef.current.kill();
            observerRef.current = null;
          }
        },
      });
    };

    // adde for mount scroll bottom to top
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          initObserver();
        }
      },
      { threshold: 0.6 }
    );

    // console.log("intersector io:", io);

    io.observe(section);

    return () => {
      io.disconnect();
      observerRef.current?.kill();
      observerRef.current = null;
    };
  }, []);



  return (
    <section className="section-padding what-we-offer" ref={sectionRef}>
      <Container>
        <div className="stack-scroll-container" ref={observerTargetRef}>
          <div className="stack-scroll-inner" ref={containerRef}>
            {stackScrollData.map((value, i) => (
              <div className="stack-row" key={i}>
                <div className="stack-content">
                  <h4 className="d-flex gap-4 scroll-h4 m-0 pe-4 pe-md-0">
                    <span className="d-none d-md-block">{`0${value.id}`}</span>
                    {value.title}
                  </h4>
                  <p className="m-0 d-none d-lg-block">{value.desc}</p>
                  <div className="stack-img">
                    <img src={value.img} alt={value.title} />
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








/* use effect mobile auto scroll stack row vertical setup 

  // const autoScrollTl = useRef(null);

  // if (!section || !observerTarget || !container) return;

  // const rows = container.children;
  // const rowHeight = rows[0].offsetHeight;
  // const totalRows = rows.length;
  // const maxIndex = totalRows - ROWS_VISIBLE;

  // const isMobile = window.innerWidth <= 768;
    // use for mobile auto scroll 
    // if (isMobile) {
    //   // infinite loop
    //   container.innerHTML += container.innerHTML;

    //   autoScrollTl.current = gsap.to(container, {
    //     y: `-=${rowHeight * totalRows}`,
    //     duration: totalRows * 2,
    //     ease: "none",
    //     repeat: -1,
    //   });

    //   // Pause on hover / touch
    //   const pause = () => autoScrollTl.current?.pause();
    //   const play = () => autoScrollTl.current?.play();

    //   observerTarget.addEventListener("mouseenter", pause);
    //   observerTarget.addEventListener("mouseleave", play);
    //   observerTarget.addEventListener("touchstart", pause);
    //   observerTarget.addEventListener("touchend", play);

    //   return () => {
    //     autoScrollTl.current?.kill();
    //     observerTarget.removeEventListener("mouseenter", pause);
    //     observerTarget.removeEventListener("mouseleave", play);
    //     observerTarget.removeEventListener("touchstart", pause);
    //     observerTarget.removeEventListener("touchend", play);
    //   };
    // }

*/