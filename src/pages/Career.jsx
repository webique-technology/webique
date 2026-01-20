import React from 'react'
import Chairs from '../assets/images/career-chairs.svg'
import { Col, Container, Row } from 'react-bootstrap'
import '../assets/scss/careers.scss'
import CareerApply from "../assets/images/career-apply.svg"
import fb from '../assets/images/career-facebook.svg'
import insta from '../assets/images/career-insta.svg'
import linkd from '../assets/images/career-linkdin.svg'
import Accordion from 'react-bootstrap/Accordion';
import ButtonCall from '../components/ButtonLink'
import { CurveArrow } from '../components/shared/gsapAnimation'
import { BiEnvelope } from "react-icons/bi";
const Career = () => {
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
          <Row className='position-relative'>
            <Col lg={4} md={4}>
              <div className='careers-outer'>
                <h2>OUR  OPEN  ROLES</h2>
                <div className='career-inner'>
                  <h4 className='txt-small'>OR CONTACT US WITH</h4>
                  <p className='txt-email'>contact@webique.in</p>
                  <ul>
                    <li><a href='#'><img src={insta} alt='inst' /></a></li>
                    <li><a href='#'><img src={fb} alt='inst' /></a></li>
                    <li><a href='#'><img src={linkd} alt='inst' /></a></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={8} md={8}>
              <Accordion defaultActiveKey="0" className="career-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="accordion-header-content">
                      <div className="left">
                        <p className="role-tag">OPEN ROLES</p>
                        <h4 className="role-title">Junior UI/UX Fullstack Designer</h4>
                        <ul className="role-meta">
                          <li>Full Time</li>
                          <li>Nashik</li>
                        </ul>
                      </div>
                      {/* Custom Arrow */}
                      <span className="custom-arrow">
                        <span className="arrow-icon"></span>
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h5>Job Description</h5>
                    <p>Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="accordion-header-content">
                      <div className="left">
                        <p className="role-tag">OPEN ROLES</p>
                        <h4 className="role-title">React Developer</h4>
                        <ul className="role-meta">
                          <li>Full Time</li>
                          <li>Remote</li>
                        </ul>
                      </div>
                      {/* Custom Arrow */}
                      <span className="custom-arrow">
                        <span className="arrow-icon"></span>
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h5>Job Description</h5>
                    <p>Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="accordion-header-content">
                      <div className="left">
                        <p className="role-tag">OPEN ROLES</p>
                        <h4 className="role-title">React Developer</h4>
                        <ul className="role-meta">
                          <li>Full Time</li>
                          <li>Remote</li>
                        </ul>
                      </div>
                      {/* Custom Arrow */}
                      <span className="custom-arrow">
                        <span className="arrow-icon"></span>
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h5>Job Description</h5>
                    <p>Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <div className="accordion-header-content">
                      <div className="left">
                        <p className="role-tag">OPEN ROLES</p>
                        <h4 className="role-title">React Developer</h4>
                        <ul className="role-meta">
                          <li>Full Time</li>
                          <li>Remote</li>
                        </ul>
                      </div>
                      {/* Custom Arrow */}
                      <span className="custom-arrow">
                        <span className="arrow-icon"></span>
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h5>Job Description</h5>
                    <p>Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>


            </Col>
            <div className="career-arrow w-25  position-absolute left-0 bottom-0 d-none d-lg-block">
              <CurveArrow />
            </div>
          </Row>
        </Container>
      </section>
      <section className='opening-section-wrap'>
        <Container>
          <div className='opening-section title-gap'>
            <h2 className='text-capitalize'>Can't find a maching opening?</h2>
            <p className='w-75'>If there isn’t a current opening that matches your profile or interests, but you’re still keen to work with us, feel free to share your profile. We’d be happy to review it and connect if your skills align with what we’re looking for.</p>
            <ButtonCall className='hero-btn'
              phone="+919876543210"
              label="Apply Now"
              icon={CareerApply} />
          </div>
        </Container>
      </section>

    </>
  )
}

export default Career