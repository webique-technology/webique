import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Col, Container, Row } from 'react-bootstrap'
import "../assets/scss/marqueeSlides.scss"
import '../assets/scss/innerServices.scss'
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
const ServiceSlider = ({figmaImg, Title, pText, data, prevRef, nextRef}) => {
  return (
    <div>





      <section className="uiux-design-service section-padding">
        <Container>
          <Row className='justify-content-between'>
            <Col md={12} lg={10}>
              <row className="title-gap">
                <h2 className='figma-title'>
                  <img src={figmaImg} className='figma-text' />
                  {Title}
                </h2>
                <p>{pText}</p>
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
        <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1} // move ONE item at a time
        loop={true}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}

        breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="service-card">
              <h3 className='fst-italic fw-semibold mb-3'>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      
    </div>
    </Container>
    </section>
    </div> 
  )
}

export default ServiceSlider