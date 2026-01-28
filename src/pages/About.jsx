import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Col, Container, Row } from 'react-bootstrap';

import "../../src/assets/scss/About.scss";
import abtImg from "../assets/images/about-img.svg";
import vIcn from "../assets/images/vision-icn.svg";
import wWe from "../assets/images/ww-exist.svg";
import Diff from "../assets/images/diffrent.svg";

import PhiloOne from "../assets/images/lion.png";
import PhiloTwo from "../assets/images/eagle.png";
import PhiloThr from "../assets/images/wolf.png";
import WorldwideBusiness from "../components/WorldwideBusiness";

import { AnimatedContent, BlurText } from '../components/shared/TextAnimation';
import useIsDesktop from "../hooks/useIsDeskstop"

const AgencyCounter = [
  { id: 1, no: 180, title: "Satisfied Clients" },
  { id: 2, no: 125, title: "Project Completed" },
  { id: 3, no: 3, title: "Years Completed" },
];

const About = () => {
  const isDesktop = useIsDesktop();

  const [runCount, setRunCount] = useState([false, false, false]);

  const strokTextCount = useRef()

  // Intersection Observer
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2,    // 30% of section visible
  });


  useEffect(() => {
    if (!inView || !strokTextCount.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      strokTextCount.current,
      { x: -960, opacity: 1 },
      {
        x: 0,
        opacity: 1,
        duration: 2.5,
        ease: 'power2.out',
        onComplete: () => {
          setRunCount((prev) => {
            const next = [...prev];
            next[0] = true;
            return next;
          });
        },
      }
    )
      .add(() => {
        setRunCount((prev) => {
          const next = [...prev];
          next[1] = true;
          return next;
        });
      }, '+=0.2')
      .add(() => {
        setRunCount((prev) => {
          const next = [...prev];
          next[2] = true;
          return next;
        });
      }, '+=0.2');

  }, [inView]);
  return (
    <>
      {/* ================= HISTORY ================= */}
      <section className="about-history section-padding">
        <Container>
          <Row>
            <Col md={6} xs={12} className="title-gap">
              <AnimatedContent
                distance={isDesktop ? -180 : 180}
                direction={isDesktop ? "horizontal" : "vertical"}
                duration={0.9}
                delay={isDesktop ? 0.6 : 0.2}
              // animationBreakpoint={991}
              >
                <h2>Our History</h2>
                <p>Webique Technology has evolved from a small startup to a trusted partner for businesses worldwide. Over the years, we have grown our expertise, expanded our capabilities, and earned a reputation for excellence in web development, design, and consulting services.</p>
                <p>At Webique Technology, we are committed to empowering businesses with cutting-edge web services to thrive in the digital landscape. With a rich legacy of innovation and a passion for technology, we have been at the forefront of delivering tailor-made solutions that drive success for our clients.</p>
              </AnimatedContent>
            </Col>
            <Col md={6} xs={12}>
              <AnimatedContent
                distance={180}
                direction={isDesktop ? "horizontal" : "vertical"}
                duration={0.9}
                delay={isDesktop ? 0.6 : 0.2}
              // animationBreakpoint={991}
              >
                <img src={abtImg} alt="about-img" className="img-fluid" />
              </AnimatedContent>
            </Col>
          </Row>
        </Container>
      </section >

      {/* ================= STACK SECTIONS ================= */}

      < div className="custome-stack-section" >
        {/* ===== VISION ===== */}
        <section className="div-container div1" >
          <Container>
            <AnimatedContent
              className='position-relative'
            >
              <div className="title-gap text-center align-items-center position-relative z-3">
                <img src={vIcn} alt="Vision" />
                <h2>Vision & Mission</h2>
                <p className="col-12 col-lg-9 mx-auto text-center">
                  Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.
                </p>
                <p className="col-12 col-lg-9 mx-auto text-center">
                  Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.
                </p>
              </div>
            </AnimatedContent>
          </Container>
        </section>

        {/* ===== EXIST ===== */}

        <section className="div-container div2" >
          <Container>
            <AnimatedContent
              className='position-relative'
            >
              <div className="title-gap text-center align-items-center position-relative z-3">
                <img src={wWe} alt="Exist" />
                <h2>Why We Exist?</h2>
                <p className="col-12 col-lg-9 mx-auto text-center">
                  Many businesses struggle with outdated websites, low online visibility, and poor lead conversion. We exist to simplify digital transformation by delivering clean, user-focused design and reliable, future-ready technology. Our approach is driven by strategy and performance, helping brands build a strong digital presence that generates measurable results and long-term growth.
                </p>
              </div>
            </AnimatedContent>
          </Container>
        </section>

        {/* ===== DIFFERENT ===== */}
        < section className="div-container div3" >
          <Container>
            <AnimatedContent
              className='position-relative'
            >
              <div className="title-gap text-center align-items-center position-relative z-3">
                <img src={Diff} alt="Different" />
                <div className="aboutt-text">
                  <h2>What Makes Us Different</h2>
                </div>
                <p className="col-12 col-lg-9 mx-auto text-center">
                  We follow a business-first approach, focusing on outcomes rather than just visuals. Our clean and intuitive UI/UX is thoughtfully aligned with your brand goals to enhance user engagement. Every solution is built with performance, SEO, and scalability in mind to support long-term growth. We believe in transparent pricing and clear processes, ensuring trust at every step.
                </p>
              </div>
            </AnimatedContent>
          </Container>
        </section >
      </div >
      {/* ============ counter section ============ */}
      <section className='section-padding'>
        <Container>
          {/* Counter Section */}
          <Row ref={ref} className='p-2 mx-1 mx-md-0 count-row'>
            <Col xs={12} sm={6} md={{ order: 1, span: 3 }} lg={3} className='p-0 strok-box'>
              <div className='strok-text' ref={strokTextCount}>
                <h2 className='text-uppercase text-center text-md-start'>Fun Facts</h2>
              </div>
            </Col>

            {AgencyCounter.map(({ no, title, id }, index) => (
              <Col xs={12} sm={6} md={3} lg={3} key={id} className='wha-col'>
                <div className="count-card text-center">
                  <h2 className='mb-1'>
                    {runCount[index] ? (
                      <CountUp start={0} end={no} duration={2} separator="" />
                    ) : (
                      0
                    )}+
                  </h2>
                  <p className='m-0'>{title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* ============ world business section ============== */}
      <div className="about-wwb">
        <WorldwideBusiness />
      </div>
      {/* ================= PHILOSOPHY ================= */}
      <section className="philosophy-section section-padding">
        <Container>
          <div className="title-gap text-center align-items-center">
            <BlurText
              text="Our Work Philosophy"
              delay={70}
              animateBy="words"
              direction="bottom"
              className="justify-content-center"
            />
            {/* <h2>Our Work Philosophy</h2> */}
            <p className="col-12 col-md-9 mx-auto text-center mb-5">
              We believe great digital outcomes are achieved through a disciplined approach, strategic focus, and flawless execution There three princliples guide every project we deliver.
            </p>
          </div>
          <Row className="g-3 g-md-4 tab-card-576">
            <Col sm={4} className="price-card-576">
              <AnimatedContent
                distance={180}
                direction="vertical"
                duration={0.9}
                delay={0.1}
                className='img-box'
              // animationBreakpoint={991}
              >
                <div className="img-wrap">
                  <img src={PhiloOne} alt="Discipline" className="img-fluid" />
                </div>
                <h2>Discipline</h2>
              </AnimatedContent>
            </Col>
            <Col sm={4} className="price-card-576">
              <AnimatedContent
                distance={180}
                direction="vertical"
                duration={0.9}
                delay={0.2}
                className='img-box'
              // animationBreakpoint={991}
              >
                <div className="img-wrap">
                  <img src={PhiloTwo} alt="Focus" className="img-fluid" />
                </div>
                <h2>Focus</h2>
              </AnimatedContent>
            </Col>
            <Col sm={4} className="price-card-576">
              <AnimatedContent
                distance={180}
                direction="vertical"
                duration={0.9}
                delay={0.3}
                className='img-box'
              // animationBreakpoint={991}
              >
                <div className="img-wrap">
                  <img src={PhiloThr} alt="Execution" className="img-fluid" />
                </div>
                <h2>Execution</h2>
              </AnimatedContent>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
