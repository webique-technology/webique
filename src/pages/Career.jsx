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
import { Link } from 'react-router-dom';
import { ArrowButtonSlideXY } from '../components/shared/gsapAnimation';


const jobData = [
  {
    id: 1,
    title: "Shopify & WordPress Developer",
    location: "Nashik",
    experience: "1–2 Years",
    jobDesc: "Build, customize, and maintain high-quality websites and eCommerce stores for diverse client requirements.",
    roleResponsibilities: [
      "Develop and customize WordPress websites and themes",
      "Build, customize, and manage Shopify stores and themes",
      "Implement responsive designs using HTML, CSS & Bootstrap",
      "Handle basic PHP customization and integrations",
      "Collaborate with designers to convert UI/UX into functional websites",
      "Optimize websites for performance, speed, and basic SEO",
      "Troubleshoot, maintain, and update existing websites"
    ],
    requiredSkills: [
      "Strong experience in WordPress & Shopify development",
      "HTML, CSS, Bootstrap",
      "Basic PHP knowledge",
      "React (Plus)"
    ]
  },
  {
    id: 2,
    title: "Sales & Marketing Executive",
    location: "Nashik",
    experience: "0–1 Year",
    jobDesc: "Lead generation and client communication, supporting marketing and sales campaigns.",
    roleResponsibilities: [
      "Lead generation and follow-ups with prospects and clients",
      "Assist in marketing and sales campaigns",
      "Maintain basic sales data and reports"
    ],
    requiredSkills: [
      "Strong interest and passion for sales",
      "Excellent communication skills (English preferred)",
      "Basic knowledge of MS Excel",
      "Freshers with a sales-driven mindset are welcome"
    ]
  },
  {
    id: 3,
    title: "Back-End Developer (PHP / Laravel / Node.js)",
    location: "Nashik (Work From Office)",
    experience: "1–3 Years",
    jobDesc: "Develop scalable web applications and APIs while ensuring high performance and security.",
    roleResponsibilities: [
      "Develop and maintain server-side logic using PHP (Laravel) and Node.js",
      "Build and integrate REST APIs",
      "Work with databases (MySQL / MongoDB)",
      "Ensure high performance, security, and scalability of applications",
      "Collaborate with front-end and UI/UX teams",
      "Debug, test, and optimize backend code",
      "Maintain documentation and code standards"
    ],
    requiredSkills: [
      "Strong knowledge of PHP & Laravel",
      "Experience with Node.js",
      "Database management: MySQL / MongoDB",
      "API development & integration",
      "Basic understanding of Git",
      "Knowledge of security best practices (Plus)"
    ]
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
                              <li>{value.location}</li>
                              <li>{value.experience}</li>
                            </ul>
                          </div>
                          {/* Custom Arrow */}
                          <span className="custom-arrow">
                            <span className="caret-dn"><img src={CaretDn} alt="caret-down" /></span>
                          </span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Job Description</h5>
                          <p>{value.jobDesc}</p>
                        </div>
                        <div>
                          <h5>Role & Responsibilities</h5>
                          <ul className='ps-4 pb-3'>
                            {value.roleResponsibilities.map((item, i) => (
                              <li className='' key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5>Required Skills</h5>
                          <ul className='ps-4 pb-3'>
                            {value.requiredSkills.map((skill, i) => (
                              <li key={i}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                        <Link to={"mailto:contact@webique.in"} className="secondery-btn">
                          <span>Apply now</span>
                          <ArrowButtonSlideXY
                            link={value.bntLink}
                          />
                        </Link>
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