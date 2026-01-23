// what we offer
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import "../style/StackCards.scss";
import stackImgOne from "../assets/images/stack-img.png";
import stackImgTwo from "../assets/images/stack-img-2.png";
import stackImgthr from "../assets/images/stack-img-3.png";
import stackImgfvr from "../assets/images/stack-img-4.png";
import stackImgfiv from "../assets/images/stack-img-5.png";
import stackImgsix from "../assets/images/stack-img-6.png";
import stackImgsvn from "../assets/images/stack-img-7.png";
import stackImgegt from "../assets/images/stack-img-8.png";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// const stackScrollData = [
//   {
//     id: 1,
//     title: "Website Design & Development",
//     desc: "Custom websites designed to captivate your audience.",
//     img: stackImg
//   },
//   {
//     id: 2,
//     title: "UI/UX Design & Brand Identity",
//     desc: "Design and branding solutions for businesses.",
//     img: stackImg
//   },
//   {
//     id: 3,
//     title: "WordPress Development",
//     desc: "WordPress websites that are fast and responsive.",
//     img: stackImg
//   },
//   {
//     id: 4,
//     title: "E-commerce Solutions",
//     desc: "Online stores that convert visitors into buyers.",
//     img: stackImg
//   },
//   {
//     id: 5,
//     title: "SEO Optimization",
//     desc: "Improve your ranking and visibility online.",
//     img: stackImg
//   },
//   {
//     id: 6,
//     title: "Performance Optimization",
//     desc: "Speed and performance improvements for websites.",
//     img: stackImg
//   },
//   {
//     id: 7,
//     title: "Maintenance & Support",
//     desc: "Ongoing support and website maintenance.",
//     img: stackImg
//   },
//   {
//     id: 8,
//     title: "Custom Integrations",
//     desc: "Custom solutions to connect your tools.",
//     img: stackImg
//   },
// ];

// const stack1 = [
//   {
//     id: 1,
//     title: "Website Design & Development",
//     desc: "Custom websites designed to captivate your audience.",
//     img: stackImg,
//     link: "/custom-website-development"
//   },
//   {
//     id: 2,
//     title: "UI/UX Design & Brand Identity",
//     desc: "Design and branding solutions for businesses.",
//     img: stackImg,
//     link: "/ui-ux-design"
//   },
//   {
//     id: 3,
//     title: "WordPress Development",
//     desc: "WordPress websites that are fast and responsive.",
//     img: stackImg,
//     link: "/wordpress"
//   },
//   {
//     id: 4,
//     title: "E-commerce Solutions",
//     desc: "Online stores that convert visitors into buyers.",
//     img: stackImg,
//     link: "/e-commerce-woocommerce"
//   },
// ]


const stack1 = [
  {
    id: 1,
    title: "WordPress Development",
    desc: "WordPress websites that are fast and responsive.",
    img: stackImgOne,
    link: "/wordpress"
  },
  {
    id: 2,
    title: "Custom Website Development",
    desc: "Custom websites designed to captivate your audience.",
    img: stackImgTwo,
    link: "/custom-website-development"
  },
  {
    id: 3,
    title: "E-commerce / WooCommerce",
    desc: "Online stores that convert visitors into buyers.",
    img: stackImgthr,
    link: "/e-commerce-woocommerce"
  },
  {
    id: 4,
    title: "Emailer Template Design",
    desc: "High-impact, responsive email designs.",
    img: stackImgfvr,
    link: "/emailer-template-design"
  },
]









const stack2 = [
  {
    id: 5,
    title: "Performance, SEO & Lead Enablement",
    desc: "Better visibility. More leads.",
    img: stackImgfiv,
    link: "/performance-seo"
  },
  {
    id: 6,
    title: "UI & UX Design",
    desc: "Strategic UI/UX design for websites and mobile applications",
    img: stackImgsix,
    link: "/ui-ux-design"
  },
  {
    id: 7,
    title: "Security, Maintenance & Support",
    desc: "Ongoing updates, protection, and support.",
    img: stackImgsvn,
    link: "/security-maintenance-support"
  },
  {
    id: 8,
    title: "Branding Support",
    desc: "Strong, consistent brand identity.",
    img: stackImgegt,
    link: "/branding-support"
  },
]


export const StackSlider = () => {
  const wrapperRef = useRef(null);
  const itemsRef = useRef([]);

  return (
    <>
      <section className='stack-scroll section-padding pb-0'>
        <div className="title-content">
          <h2 className="text-center pb-4">What we offer</h2>
        </div>
        <div className="section-scroll">
          <div className="div-container div1">
            <Container>
              {stack1.map((value, i) => {
                return (
                  <div className="stack-row" key={value.id}>
                    <div className="stack-content">
                      <h4 className="d-flex align-items-center text-start gap-4 scroll-h4 m-0 pe-4 pe-md-0">
                        <span className="d-none d-md-block">
                          {`0${value.id}`}
                        </span>
                        {value.title}
                      </h4>
                      <p className="m-0 d-none d-lg-block text-start">
                        {value.desc}
                      </p>

                      <div className="stack-img">
                        <Link to={value.link}>
                          <img
                            src={value.img}
                            alt={value.title}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Container>
          </div>
          <div className="div-container div2">
            <Container>
              {stack2.map((value, i) => {
                return (
                  <div className="stack-row" key={value.id}>
                    <div className="stack-content">
                      <h4 className="d-flex align-items-center text-start gap-4 scroll-h4 m-0 pe-4 pe-md-0">
                        <span className="d-none d-md-block">
                          {`0${value.id}`}
                        </span>
                        {value.title}
                      </h4>
                      <p className="m-0 d-none d-lg-block text-start">
                        {value.desc}
                      </p>

                      <div className="stack-img">
                        
                        <Link to={value.link}>
                        <img
                          src={value.img}
                          alt={value.title}
                        />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Container>
          </div>
        </div>
        <div className="pb-3 pb-lg-5 stack-pad"></div>
      </section >
    </>
  );
};
