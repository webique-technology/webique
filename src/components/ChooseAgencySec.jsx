import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import { Col, Container, Row } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

import lightMan from "../assets/images/light-man.svg";
import laptopMan from "../assets/images/laptop-man.svg";

const woAgencyCard = [
  {
    src: lightMan,
    title: "End-to-End Web Solutions That Deliver Results",
    desc: "We design conversion-focused UI/UX and build fast, secure, and scalable websites — from WordPress to custom React — backed by reliable maintenance and ongoing support.",
  },
  {
    src: laptopMan,
    title: "Transparent Pricing with Local Understanding",
    desc: "We offer affordable, no-hidden-cost solutions tailored to your budget, combining local business insight with global-standard design and development practices.",
  },
];

const AgencyCounter = [
  { id: 1, no: 500, title: "Satisfied Clients" },
  { id: 2, no: 150, title: "Project Completed" },
  { id: 3, no: 5, title: "Years Completed" },
];

const ChooseAgencySec = () => {
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


  // useEffect(() => {
  //   if (inView && strokTextCount.current) {
  //     gsap.fromTo(
  //       strokTextCount.current,
  //       {
  //         x: -960,
  //         opacity: 1,
  //       },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 3,
  //         ease: "power2.out",
  //       }
  //     );
  //   }
  // }, [inView]);

  return (
    <section className='why-choose-us section-padding'>
      <Container className='d-flex flex-column row-gap-4 row-gap-lg-5'>
        {/* Desktop row */}
        <Row className='row-gap-4 d-none d-sm-flex'>
          <Col xs={12} lg={4} className='wo-centent'>
            <div className='d-flex sub-title'>
              <p className='d-flex align-items-center gap-3 mb-2'>
                Why Choose Us <span className='title-line'></span>
              </p>
            </div>
            <h2>Why Our Agency</h2>
            <p className='mb-0 mb-lg-3'>
              we don’t just build websites — we build digital experiences that convert visitors into customers. Our approach combines strategic design, modern technology, and long-term support to deliver real business value.
            </p>
          </Col>

          {woAgencyCard.map((value, i) => (
            <Col sm={6} md={6} lg={4} key={i}>
              <div className='wo-agency-card'>
                <img src={value.src} alt={value.title} />
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Mobile grid */}
        <div className='wo-card-grid d-flex d-sm-none'>
          <div className='wo-centent'>
            <div className='d-flex sub-title'>
              <p className='d-flex align-items-center gap-3 mb-2'>
                Why Choose Us <span className='title-line'></span>
              </p>
            </div>
            <h2>Why Our Agency</h2>
            <p className='mb-0 mb-lg-3'>
              we don’t just build websites — we build digital experiences that convert visitors into customers. Our approach combines strategic design, modern technology, and long-term support to deliver real business value.
            </p>
          </div>
          <div className="wo-card-slide">
            {woAgencyCard.map((value, i) => (
              <div key={i} className='slide-card'>
                <div className='wo-agency-card'>
                  <img src={value.src} alt={value.title} />
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

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
  );
};

export default ChooseAgencySec;
