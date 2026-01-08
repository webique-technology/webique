// components/ToolsSwiper.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "../assets/scss/marqueeSlides.scss"
import '../assets/scss/innerServices.scss'
import { Container } from "react-bootstrap";
const LogoSlider = ({ data, title }) => {
  return (
     <div className='marquee-wrap'>
        <Container>


          <div className="marquee">
    <div className="tools-swiper-wrap">
      {/* Optional text coming from props */}
      {/* {title && <h3 className="swiper-title">{title}</h3>} */}

      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={false}
        className="tools-swiper"
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    </Container>
    </div>
  );
};

export default LogoSlider;
