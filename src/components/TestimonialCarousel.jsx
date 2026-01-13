
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "../assets/scss/testimonialCarousel.scss"

// images
import img1 from "../assets/images/user1.jpg";
import img2 from "../assets/images/user2.jpg";
import img3 from "../assets/images/user3.jpg";
import img4 from "../assets/images/user1.jpg";
import img5 from "../assets/images/user2.jpg";
import { Container } from "react-bootstrap";

const testimonials = [
  {
    img: img1,
    name: "Swapnil Araj",
    designation: "Unicorns Hospital",
    text:
      "As a startup founder, I was looking for affordable yet high-quality app development. Webique Technology exceeded my expectations by delivering a functional and stylish website. Their team is young, creative, and always open to suggestions. I would definitely work with them again.",
    rating: 5,
  },
  {
    img: img2,
    name: "Sarah Johnson",
    designation: "Unicorns Hospital",
    text:
      "Webique redesigned our corporate website with a modern look and integrated a CRM system. The entire process was transparent, and we received regular updates. The new site looks world-class and has significantly improved our brand image.",
    rating: 4,
  },
  {
    img: img3,
    name: "Vipin Parve",
    designation: "KGTS Tech",
    text:
      "As a startup founder, I was looking for affordable yet high-quality app development. Webique Technology delivered a functional and visually appealing website. Their team is creative, responsive, and easy to collaborate with. I would happily work with them again.",
    rating: 5,
  },
  {
    img: img4,
    name: "Atul Parve",
    designation: "KGTS Tech",
    text:
      "Webique redesigned our corporate website with a modern design and seamless CRM integration. The workflow was transparent, and they kept us informed throughout the project. The result exceeded our expectations and strengthened our brand presence.",
    rating: 4,
  },
  {
    img: img5,
    name: "Rohit Sharma",
    designation: "KGTS Tech",
    text:
      "Strong technical expertise, hardworking team, and prompt responses. I would definitely recommend Webique Technology to handle all IT-related challenges.",
    rating: 5,
  },
];



const TestimonialCarousel = () => {
  const scrollbarRef = useRef(null);
  return (
    <section className="testimonial-wrap">
      <Container>
        <div className="title-count text-center mb-5">
          <h2>Testimonials</h2>
        </div>
      </Container>
      <Container>
        <Swiper
          modules={[Autoplay, Scrollbar]}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides
          loop
          autoplay={{
            delay: 50000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
            draggable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">

                <p className="review-text">{item.text}</p>
                <div className="image-testiomnial-wrap">
                  <div className="user-img">
                    <img src={item.img} alt={item.name} />

                  </div>
                  <div className="rating-name">
                    <h4 className="user-name">{item.name}</h4>
                    <h5 className="designation">{item.designation}</h5>

                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < item.rating ? "star filled" : "star"}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* SINGLE DRAGGABLE SCROLLBAR */}
        <div className="horizontal-line">

        </div>
      </Container>


    </section>
  );
};

export default TestimonialCarousel;
