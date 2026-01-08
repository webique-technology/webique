
import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HiArrowSmallLeft } from "react-icons/hi2";
import Footer from '../components/Footer'
import { HiArrowSmallRight } from "react-icons/hi2";
import gsap from 'gsap';
import "../assets/scss/marqueeSlides.scss"
import uiImage from '../assets/images/uiux.svg'
import '../assets/scss/innerServices.scss'
import wwd from '../assets/images/wwd.svg'
import wdOne from '../assets/images/check.svg'


import marImg1 from '../assets/images/marquee-item-1.svg'
import marImg2 from '../assets/images/marquee-item-2.svg'
import marImg3 from '../assets/images/marquee-item-3.svg'
import marImg4 from '../assets/images/marquee-item-4.svg'
import marImg5 from '../assets/images/marquee-item-5.svg'
import marImg6 from '../assets/images/marquee-item-6.svg'

import pFo1 from '../assets/images/portfolio-1.png'
import pFo2 from '../assets/images/portfolio-2.png'
import LogoSlider from "../components/LogoSlider";
import ServiceSlider from '../components/ServiceSlider';

const servicesData = [
  {
    id: 1,
    title: "Mobile-first Design",
  },
  {
    id: 2,
    title: "Mobile app UI/UX design",
  },
  {
    id: 3,
    title: "Wireframes & user flows",
  },
  {
    id: 4,
    title: "High-fidelity UI screens",

  },
  {
    id: 5,
    title: "Interactive prototypes",

  },
  {
    id: 6,
    title: "Design systems & style guides",
  },
];

const marqData = [
  { id: 1, image: marImg1, alt: "figma" },
  { id: 2, image: marImg2, alt: "xd" },
  { id: 3, image: marImg3, alt: "ps" },
  { id: 4, image: marImg4, alt: "ai" },
  { id: 5, image: marImg5, alt: "coral" },
  { id: 6, image: marImg6, alt: "ai" },
];


const DesignServices = [
  {
    id: 1,
    title: "Custom UI & UX Design",
    text: "Custom UI & UX design creates a unique brand experience aligned with your business goals and user needs. Our tailored approach blends creativity, usability, and consistency to give your website a distinct identity.",
  },
  {
    id: 2,
    title: "Responsive UI & UX Design",
    text: "Responsive design ensures a seamless experience across desktops, tablets, and mobile devices. We create flexible, fast-loading layouts that adapt to every screen enhance user engagement across platforms.",
  },
  {
    id: 3,
    title: "UI & UX Redesign",
    text: "Our website redesign services modernize outdated websites by improving user flow  UI & UX redesign. We simplify complex journeys to deliver smooth, engaging experiences that support business growth.",
  },
  {
    id: 4,
    title: "Custom UI & UX Design",
    text: "Custom UI & UX design creates a unique brand experience aligned with your business goals and user needs. Our tailored approach blends creativity, usability, and consistency to give your website a distinct identity.",
  },
  {
    id: 5,
    title: "Responsive UI & UX Design",
    text: "Responsive design ensures a seamless experience across desktops, tablets, and mobile devices. We create flexible, fast-loading layouts that adapt to every screen enhance user engagement across platforms.",
  },
  {
    id: 6,
    title: "UI & UX Redesign",
    text: "Our website redesign services modernize outdated websites by improving user flow  UI & UX redesign. We simplify complex journeys to deliver smooth, engaging experiences that support business growth.",
  },
];






const ServiceUi = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section className='service-intro'>
        <Container>
          <Row className='align-items-center justify-content-between d-flex'>
            <Col md={6} lg={6} xs={12}>
            <Row className='d-flex gap-2 gap-md-5'>
            <div className='ui-wrap'>
              <h1 className='inner-heading-1'><span>UI & UX</span> Design</h1>
              <h2 className=' '>(Website & Mobile App)</h2>
            </div>
            <div>
              <p>Strategic UI/UX design for websites and mobile apps that balances usability, visual appeal, and business goals—crafted in Figma for precision, collaboration, and scalable, conversion-focused user experiences.</p>
            </div>
            </Row>
            </Col>
            <Col md={5} lg={5} xs={12}>
              <div className='image-full-inner'>
                <img src={uiImage} alt='ui-image' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="uiux-design-service">
        <Container>
          <Row className='justify-content-between'>
            <Col md={12}  lg={10}>
            <row className="title-gap">
              <h2 className='figma-title'>
                <img src={marImg1} className='figma-text'/> 
                Our UI & UX Design Services
              </h2>
              <p>We use Figma as our core design platform to build modern, scalable, and user-centric digital experiences.Its real-time collaboration keeps teams aligned and speeds up decision-making. With structured design systems and precise layouts, we ensure consistency across web and mobile products. </p>
            </row>
            </Col>
            <Col md={2} sm={2} lg={2} className='d-none d-lg-block'>
              {/* CUSTOM NAVIGATION (place anywhere) */}
              <div className="slider-nav">
                <button ref={prevRef} className="slider-btn prev"><HiArrowSmallLeft /></button>
                <button ref={nextRef} className="slider-btn next"><HiArrowSmallRight /></button>
              </div>
            </Col>
          </Row>


          <div className="design-slider-wrapper">

            <ServiceSlider data={DesignServices} prevRef={prevRef}
              nextRef={nextRef} />

          </div>
        </Container>
      </section>
      <div className='marquee-wrap'>
        <Container>


          <div className="marquee">
            <LogoSlider data={marqData} title="Tools & Technologies We Use" />
          </div>



        </Container>
      </div>
      <section className='what-we-deliver'>
        <Container>
          <Row className=' justify-content-between d-flex'>

            <Col md={5} lg={5} xs={12} className='title-gap'>
              <h2>What We Deliver</h2>
              <div className='image-full-inner d-none d-md-block'>
                <img src={wwd} alt='ui-image'  />
              </div>
            </Col>
            <Col md={6} lg={6} xs={12}>
              <ul className="services-list">
                {servicesData.map((item) => (
                  <li key={item.id} className="d-flex gap-2 gap-md-4  py-3 py-md-4 ps-2 ps-md-3  align-items-center">
                    <span><img src={wdOne} alt='what we deliver'/></span>
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='Portfolio-inner'>
        <Container className='title-gap'>
          <Row className='w-100'>
          <h2 className='text-center justify-content-center'>Portfolio</h2>
          </Row>
          <Row className='justify-content-between d-flex'>
            <Col md={6} lg={6} xs={12}>
              <div className='portfolio-full-inner'>
                <img src={pFo1} alt='webique-portfolio' />
                <div className='portfolio-backgrd'>
                <h5>Balasaheb Borade Group of Companies</h5>
                <p>(Figma Website Mock-ups)</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6} xs={12}>
              <div className='portfolio-full-inner'>
                <img src={pFo2} alt='webique-portfolio' />
                <div className='portfolio-backgrd'>
                <h5>Total Branding</h5>
                <p>(Logo, Visiting Card, Brochure, LetterHead)</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default ServiceUi