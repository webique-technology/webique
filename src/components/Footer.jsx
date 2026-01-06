import React from 'react'
import "../assets/scss/footer.scss"
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
const Footer = () => {
  return (
    <section className='footer-section'>
      <Container>
        <Row className="align-items-center justify-content-center d-flex flex-column">
        <h2>Have An <span>Idea ?</span><br/> Let’s work together!</h2>
        <p>Ready to bring your vision to life? Our design Unlimited service makes it easy to get started with high-quality, unlimited design support.</p>
        <a href="tel:+919876543210" className="call-btn">Call Now</a>

        <ul className="nav-list">
  <li>
    <Link to="/">Blogs</Link>
  </li>
  <li>
    <Link to="/about">Service</Link>
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
  )
}

export default Footer