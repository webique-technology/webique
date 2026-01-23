import React, { useState, useRef } from 'react'
import Lottie from "lottie-react";
import { AccordionItem, Col, Container, Row } from 'react-bootstrap'
import Chairs from '../assets/images/career-chairs.svg'
import '../assets/scss/careers.scss'
import CareerApply from "../assets/images/career-apply.svg"
import CaretDn from "../assets/images/caret-down.svg"
import Accordion from 'react-bootstrap/Accordion';
import ButtonCall from '../components/ButtonLink'

import mailAnimation from "../assets/lottie-icons/mail-2.json"; 


const jobData = [
  {
    id: 1,
    title: "Junior UI/UX Fullstack Designer",
    list1: "Full Time",
    list2: "Nashik",
    jobDesc: "Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.",
  },
  {
    id: 2,
    title: "FullStack (MERN stack) Developer",
    list1: "Full Time",
    list2: "Remote",
    jobDesc: "Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.",
  },
  {
    id: 3,
    title: "Backend (php, Python) Developer",
    list1: "Full Time",
    list2: "Remote",
    jobDesc: "Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.",
  },
  {
    id: 4,
    title: "Frontedn React Developer",
    list1: "Full Time",
    list2: "Remote",
    jobDesc: "Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.",
  },
]

const Career = () => {
  const [accordionNo, setAccordionNo] = useState("1");

  const lottieRef = useRef(null);

  // lottie animation clicking
  const handleClick = (e) => {
    e.preventDefault();

    lottieRef.current.stop();
    lottieRef.current.play();

    setTimeout(() => {
      window.location.href = "mailto:contact@webique.in";
    }, 400);
  };

  return (
    <>
      <section className='header-wrap section-padding pb-0 career-head'>
        <Container>
          <h1 className='hero-title text-capitalize'>We´re <span>hungry</span> for talent</h1>
          <img src={Chairs} alt='career section' className='mb-4 img-fluid' />
        </Container>
      </section>

      <section className='section-padding'>
        <Container>
          <div className='position-relative'>
            {/* <Col lg={4} md={4}>
              <div className='careers-outer'>
                <h2>OUR  OPEN  ROLES</h2>
                <div className='career-inner'>
                  <h4 className='txt-small'>OR CONTACT US WITH</h4>
                  <p className='txt-email'>contact@webique.in</p>
                  <ul>
                    <li><a href='https://www.facebook.com/share/19Bko6nmR5/?mibextid=qi2Omg' target='_blank'><img src={fb} alt='inst' /></a></li>
                    <li><a href='https://www.instagram.com/webique_tech?igsh=Z2hzNGoya3dtZ2oy' target='_blank'><img src={insta} alt='inst' /></a></li>
                    <li><a href='https://www.linkedin.com/company/webiquetech' target='_blank'><img src={linkd} alt='inst' /></a></li>



                  </ul>
                </div>
              </div>
            </Col> */}
            <div>
              <Accordion
                activeKey={accordionNo}
                onSelect={(eventKey) => setAccordionNo(eventKey)}
                className="career-accordion"
              >
                {jobData.map((value) => {
                  return (
                    <AccordionItem
                      key={value.id}
                      eventKey={value.id.toString()}
                      className={accordionNo === value.id.toString() ? "acordian-active-bg" : ""}
                    >
                      <Accordion.Header>
                        <div className="accordion-header-content">
                          <div className="left">
                            <p className="role-tag">OPEN ROLES</p>
                            <h4 className="role-title">{value.title}</h4>
                            <ul className="role-meta">
                              <li>{value.list1}</li>
                              <li>{value.list2}</li>
                            </ul>
                          </div>
                          {/* Custom Arrow */}
                          <span className="custom-arrow">
                            <span className="caret-dn"><img src={CaretDn} alt="caret-down" /></span>
                          </span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <h5>Job Description</h5>
                        <p>{value.jobDesc}</p>
                      </Accordion.Body>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>
      <section className='opening-section-wrap'>
        <Container>
          <div className='opening-section title-gap'>
            <h2 className='text-capitalize'>Can't find a maching opening?</h2>
            <p className='w-75'>If there isn’t a current opening that matches your profile or interests, but you’re still keen to work with us, feel free to share your profile. We’d be happy to review it and connect if your skills align with what we’re looking for.</p>
            {/* <ButtonCall className='hero-btn'
              email="contact@webique.in"
              label="Apply Now"
              icon={CareerApply} /> */}
            <a
              href="mailto:contact@webique.in"
              className="hero-btn"
              aria-label="Email"
              onMouseEnter={handleClick}
            >
              <span className="btn-text">Apply Now</span>

              <Lottie
                lottieRef={lottieRef}
                animationData={mailAnimation}
                autoplay={false}
                loop={false}
                style={{ width: 50, height: 50, pointerEvents: "none" }}
              // onComplete={() => {
              //   lottieRef.current.goToAndStop(0, true); 
              // }}
              />
            </a>
          </div>
        </Container>
      </section>

    </>
  )
}

export default Career