import React from 'react'
import "../assets/scss/footer.scss"
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import FutarLog from "../assets/images/logo-futar.svg"
import phoneIcon from "../assets/images/phone-footer.svg"
import Insta from "../assets/images/insta.svg"
import fbk from "../assets/images/facebook.svg"
import linkd from "../assets/images/linkdin.svg"
import ButtonCall from './ButtonLink'
const Footer = () => {
  return (
    <div>
    <section className='footer-section'>
      <img src={FutarLog} alt='waqbiue log' className='futar-lgo'/>
      <Container>
        <Row className="align-items-center justify-content-center d-flex flex-column">
        <h2>Have An <span>Idea ?</span><br/> Let’s work together!</h2>
        <p>Ready to bring your vision to life? Our design Unlimited service makes it easy to get started with high-quality, unlimited design support.</p>
      
        <ButtonCall
      className='call-btn'
      phone="+919876543210"
      label="Book a Call"
      icon={phoneIcon}
    />
        <ul className="nav-list">
  <li>
    <Link to="/">Blogs</Link>
  </li>
  <li>
    <Link to="/service">Service</Link>
  </li>
  <li>
    <Link to="/services">Pricing</Link>
  </li>
  <li>
    <Link to="/portfolio">Portfolio</Link>
  </li>
  <li>
    <Link to="/contact">Carreas</Link>
  </li>
</ul>
</Row>
        </Container>
    </section>
    <section className='footer-bottom'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col md={4} sm={4} xs={12}>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </Col>
          <Col md={4} sm={4} xs={12}>
          <ul className='footer-icns'>
            <li><a href='#'><img src={Insta}/></a></li>
            <li><a href='#'><img src={fbk}/></a></li>
            <li><a href='#'><img src={linkd}/></a></li>
          </ul>
          </Col>
          <Col md={4} sm={4} xs={12} className='company-link'><p>Designed and developed by <a href='https://www.webique.in/' target='_blank'>Webique Technology</a></p></Col>
        </Row>
      </Container>
    </section>
</div>
  )
}

export default Footer