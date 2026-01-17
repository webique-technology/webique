import React from 'react'
import Chairs from '../assets/images/career-chairs.svg'
import { Col, Container, Row } from 'react-bootstrap'
import '../assets/scss/careers.scss'
import fb from '../assets/images/career-facebook.svg'
import insta from '../assets/images/career-insta.svg'
import linkd from '../assets/images/career-linkdin.svg'
import Accordion from 'react-bootstrap/Accordion';
const Career = () => {
  return (
    <>
    <section className='header-wrap section-padding pb-0 career-head'>
        <Container>
        <h1 className='hero-title text-capitalize'>We´re <span>hungry</span> for talent</h1>
        <img src={Chairs} alt='career section'/>
        </Container>
    </section>

    <section className='section-padding'>
        <Container>
            <Row>
                <Col lg={4}>
                <div className='careers-outer'>
                    <h2>OUR  OPEN  ROLES</h2>
                    <div className='career-inner'>
                    <h4 className='txt-small'>OR CONTACT US WITH</h4>
                    <p className='txt-email'>contact@webique.in</p>
                    <ul>
                        <li><a href='#'><img src={insta} alt='inst'/></a></li>
                        <li><a href='#'><img src={fb} alt='inst'/></a></li>
                        <li><a href='#'><img src={linkd} alt='inst'/></a></li>
                    </ul>
                    </div>
                </div>
                </Col>
                <Col lg={8}>
                    <Accordion defaultActiveKey="0" className="career-accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="accordion-header-content">
            <p className="role-tag">OPEN ROLES</p>
            <h4 className="role-title">Junior UI/UX Fullstack Designer</h4>
            <ul className="role-meta">
              <li>Full Time</li>
              <li>Nashik</li>
            </ul>
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
            <p className="role-tag">OPEN ROLES</p>
            <h4 className="role-title">React Developer</h4>
            <ul className="role-meta">
              <li>Full Time</li>
              <li>Remote</li>
            </ul>
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
            <p className="role-tag">OPEN ROLES</p>
            <h4 className="role-title">React Developer</h4>
            <ul className="role-meta">
              <li>Full Time</li>
              <li>Remote</li>
            </ul>
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
            <p className="role-tag">OPEN ROLES</p>
            <h4 className="role-title">React Developer</h4>
            <ul className="role-meta">
              <li>Full Time</li>
              <li>Remote</li>
            </ul>
          </div>
        </Accordion.Header>
         <Accordion.Body>
            <h5>Job Description</h5>
            <p>Our mission is simple yet profound: to leverage the power of technology to transform businesses and enrich lives. We strive to empower organizations with scalable, secure, and innovative web solutions that unlock their full potential and propel them towards sustainable growth.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    
                </Col>
            </Row>
        </Container>
    </section>

    </>
  )
}

export default Career