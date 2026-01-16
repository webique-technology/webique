import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../src/assets/scss/About.scss";

import abtImg from "../assets/images/about-img.svg";
import vIcn from "../assets/images/vision-icn.svg";
import wWe from "../assets/images/ww-exist.svg";
import Diff from "../assets/images/diffrent.svg";

import PhiloOne from "../assets/images/lion.png";
import PhiloTwo from "../assets/images/eagle.png";
import PhiloThr from "../assets/images/wolf.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
   const stackRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Initial positions
    gsap.set(cards, {
      yPercent: 100,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
    });

    // First card visible
    gsap.set(cards[0], { yPercent: 0 });

    // Timeline controls stacking
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stackRef.current,
        start: "top top",
        end: `+=${cards.length * window.innerHeight}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Stack cards one by one
    cards.forEach((card, index) => {
      if (index === 0) return;
      tl.to(card, { yPercent: 0, duration: 1 }, index);
    });

    return () => ScrollTrigger.killAll();
  }, []);



  return (
    <>
      {/* ================= HISTORY ================= */}
      <section className="about-history section-padding">
        <Container>
          <Row>
            <Col md={6} xs={12} className="title-gap">
              <h2>Our History</h2>
              <p>Webique Technology has evolved from a small startup to a trusted partner for businesses worldwide. Over the years, we have grown our expertise, expanded our capabilities, and earned a reputation for excellence in web development, design, and consulting services.</p>
              <p>                      At Webique Technology, we are committed to empowering businesses with cutting-edge web services to thrive in the digital landscape. With a rich legacy of innovation and a passion for technology, we have been at the forefront of delivering tailor-made solutions that drive success for our clients.</p>
            </Col>
            <Col md={6} xs={12}>
              <img src={abtImg} alt="about-img" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= STACK SECTIONS ================= */}
      <div className="stack-wrapper" ref={stackRef}>
         <section
          className="vision-section stack-card"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <Container>
            <div className="title-gap text-center align-items-center">
              <img src={vIcn} alt="Vision" />
              <h2>Vision & Mission</h2>
              <p>
                Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.
              </p>
              <p>
                Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.
              </p>
            </div>
          </Container>
        </section>

        <section
          className="exist-section stack-card"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <Container>
            <div className="title-gap text-center align-items-center">
              <img src={wWe} alt="Exist" />
              <h2>Why We Exist?</h2>
              <p className="w-50 mx-auto">
                Many businesses struggle with outdated websites, low visibility, and poor lead conversion. We exist to simplify digital transformation by delivering clean design, reliable technology, and measurable results.
              </p>
            </div>
          </Container>
        </section>

        <section
          className="diffrent-section stack-card"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <Container>
            <div className="title-gap text-center align-items-center">
              <img src={Diff} alt="Different" />
              <h2>What Makes Us Different</h2>
              <p>Business-first approach, not just design</p>
              <p>Clean UI/UX aligned with brand goals</p>
              <p>Performance, SEO & scalability focused</p>
              <p>Transparent pricing & process</p>
              <p>Long-term support mindset</p>
            </div>
          </Container>
        </section>
      </div>


      {/* ================= PHILOSOPHY ================= */}
      <section className="philosophy-section section-padding">
        <Container>
          <div className="title-gap text-center align-items-center">
            <h2>Our Work Philosophy</h2>
            <p className="w-70 mx-auto">
              We believe great digital outcomes are achieved through a disciplined approach, strategic focus, and flawless execution There three princliples guide every project we deliver. 
            </p>
          </div>

          <Row>
            <Col md={4}>
              <div className="img-box">
                <img src={PhiloOne} alt="Discipline" />
                <h2>Discipline</h2>
              </div>
            </Col>
            <Col md={4}>
              <div className="img-box">
                <img src={PhiloTwo} alt="Focus" />
                <h2>Focus</h2>
              </div>
            </Col>
            <Col md={4}>
              <div className="img-box">
                <img src={PhiloThr} alt="Execution" />
                <h2>Execution</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
