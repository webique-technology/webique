// components/Header.jsx
import React, { useRef, useEffect } from "react";
import wLgo from "../assets/images/header-lgo.png";
import "../style/header.scss";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// GSAP
import { gsap } from "gsap";

// icons
import arrowOne from "../assets/images/arrow-one.svg";

// images
import imgOne from "../assets/images/tocken-web.png";
import imgTwo from "../assets/images/savita-masale-web.png";
import imgThree from "../assets/images/ideal-corporation-web.png";
import imgFour from "../assets/images/neelkantha-web.png";
import imgFive from "../assets/images/unicorn-web.png";
import { CurveArrow } from "./shared/gsapAnimation";
import { Container } from "react-bootstrap";

const heroData = [
  {
    id: 1,
    title:
      "Digital <span>Design & Development</span> <br/> Aligned With Business Goals",
    subtitle:
      "We create custom websites and digital platforms that help businesses establish, scale, and succeed online.",
    buttons: [
      { text: "View Portfolio", icon: arrowOne, type: "primary" },
    ]
  },
];

const webImages = [
  { src: imgOne, alt: "Modern website design" },
  { src: imgTwo, alt: "Creative UI UX design" },
  { src: imgThree, alt: "Web development dashboard" },
  { src: imgFour, alt: "Mobile app interface" },
  { src: imgFive, alt: "Digital branding concept" },
  { src: imgOne, alt: "Modern website design" },
  { src: imgTwo, alt: "Creative UI UX design" },
  { src: imgThree, alt: "Web development dashboard" },
  { src: imgFour, alt: "Mobile app interface" },
  { src: imgFive, alt: "Digital branding concept" },
  { src: imgOne, alt: "Modern website design" },
  { src: imgTwo, alt: "Creative UI UX design" },
  { src: imgThree, alt: "Web development dashboard" },
  { src: imgFour, alt: "Mobile app interface" },
  { src: imgFive, alt: "Digital branding concept" },
]

const Header = () => {
  const swiperRef = useRef(null);

  const animateSlides = (swiper) => {
    const screenWidth = window.innerWidth;

    swiper.slides.forEach((slide, index) => {
      const img = slide.querySelector("img");
      if (!img) return;

      const position = index - swiper.activeIndex;

      let y = 0;

      if (position === 0) {
        // Center slide animation

        if (screenWidth < 420) y = 50;         // Mobile
        else if (screenWidth < 768) y = 60;    // Small tablet
        else y = 120;                           // Desktop
      } else if (Math.abs(position) === 1) {
        // Adjacent slides animation

        if (screenWidth < 480) y = 10;
        else if (screenWidth < 768) y = 10;
        else y = 60;
      }

      gsap.to(img, {
        y,
        duration: 0.6,
        ease: "power3.out",
      });
    });
  };

  return (
    <section className="header-wrap section-padding pb-0">
      {/* <div className="w-lgo-wrap d-none d-xl-block">
        <img src={wLgo} alt="Header Logo" />
      </div> */}

      {heroData.map((item) => (
        <React.Fragment key={item.id}>
          {/* content */}
          <Container>
            <div className="hero-content title-gap">
              <h1
                className="hero-title"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p className="d-none d-md-block">{item.subtitle}</p>

              <div className="hero-buttons">
                {item.buttons.map((btn, index) => (
                  <button key={index} className={`hero-btn ${btn.type}`}>
                    {btn.text}
                    <img src={btn.icon} alt="arrow" />
                  </button>
                ))}
              </div>
              <div className="arrow-count">
                <CurveArrow />
              </div>
            </div>
          </Container>

          {/* card stag slider */}
          <div className="header-portfolio">
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              centeredSlides
              loop
              loopAdditionalSlides={4}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              onInit={(swiper) => {
                swiperRef.current = swiper;
                animateSlides(swiper);
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                420: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              onSlideChange={animateSlides}
              className="mySwiper"

            >
              {webImages.map((img, index) => (
                <SwiperSlide key={index} className="portfolio-slide">
                  <img className="p-2 p-sm-0" src={img.src} alt={`slide-${img.alt}${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </React.Fragment>
      ))
      }
    </section >
  );
};

export default Header;
