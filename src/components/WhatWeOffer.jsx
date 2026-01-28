// what we offer
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import "../style/StackCards.scss";

import arrow from "../assets/images/arrow-one.svg"
import stackImgOne from "../assets/images/stack-img.png";
import stackImgTwo from "../assets/images/stack-img-2.png";
import stackImgthr from "../assets/images/stack-img-3.png";
import stackImgfvr from "../assets/images/stack-img-4.png";
import stackImgfiv from "../assets/images/stack-img-5.png";
import stackImgsix from "../assets/images/stack-img-6.png";
import stackImgsvn from "../assets/images/stack-img-7.png";
import stackImgegt from "../assets/images/stack-img-8.png";
import { Link } from "react-router-dom";
import { AnimatedContent, BlurText, ScrollFloat } from "./shared/TextAnimation";
import { useIsMobile } from "../hooks/useIsMobile";
import { ArrowButtonSlideXY } from "./shared/gsapAnimation";

gsap.registerPlugin(ScrollTrigger);

const stack1 = [
  {
    id: 1,
    title: "WordPress Development",
    desc: "WordPress websites that are fast and responsive.",
    img: stackImgthr,
    link: "/wordpress",
    distance: 120,
    duration: 0.6,
  },
  {
    id: 2,
    title: "Custom Website Development",
    desc: "Custom websites designed to captivate your audience.",
    img: stackImgTwo,
    link: "/custom-website-development",
    distance: -120,
    duration: 0.7,
  },
  {
    id: 3,
    title: "E-commerce / WooCommerce",
    desc: "Online stores that convert visitors into buyers.",
    img: stackImgfvr,
    link: "/e-commerce-woocommerce",
    distance: 120,
    duration: 0.8,
  },
  {
    id: 4,
    title: "Emailer Template Design",
    desc: "High-impact, responsive email designs.",
    img: stackImgfiv,
    link: "/emailer-template-design",
    distance: -120,
    duration: 0.9,
  },
]

const stack2 = [
  {
    id: 5,
    title: "Performance, SEO & Lead Enablement",
    desc: "Better visibility. More leads.",
    img: stackImgegt,
    link: "/performance-seo",
    distance: 120,
    duration: 0.6,
  },
  {
    id: 6,
    title: "UI & UX Design",
    desc: "Strategic UI/UX design for websites and mobile applications",
    img: stackImgOne,
    link: "/ui-ux-design",
    distance: -120,
    duration: 0.7,
  },
  {
    id: 7,
    title: "Security, Maintenance & Support",
    desc: "Ongoing updates, protection, and support.",
    img: stackImgsix,
    link: "/security-maintenance-support",
    distance: 120,
    duration: 0.8,
  },
  {
    id: 8,
    title: "Branding Support",
    desc: "Strong, consistent brand identity.",
    img: stackImgsvn,
    link: "/branding-support",
    distance: -120,
    duration: 0.9,
  },
]

export const StackSlider = () => {

  return (
    <>
      <section className='what-we-offer stack-scroll section-padding pb-0 pt-4'>
        <div className="title-content">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            containerClassName="pb-4"
          >
            What we offer
          </ScrollFloat>
          {/* <BlurText
              text=""
              delay={100}
              animateBy="words"
              direction="bottom"
              className="justify-content-center"
            /> */}
        </div>
        <div className="section-scroll">
          <div className="div-container div1">
            <Container>
              {stack1.map((value, i) => {
                return (
                  <AnimatedContent
                    distance={value.distance}
                    direction="horizontal"
                    reverse={false}
                    duration={value.duration}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                    className="position-relative"
                    key={value.id}
                  >
                    <div className="stack-row" >
                      <div className="stack-content">
                        <h4 className="d-flex align-items-center text-start gap-4 scroll-h4 m-0 pe-0 pe-md-4 pe-md-0">
                          <span className="d-none d-md-block">
                            {`0${value.id}`}
                          </span>
                          {value.title}
                        </h4>
                        <p className="m-0 d-none d-lg-block text-start">
                          {value.desc}
                        </p>

                        <div className="stack-img">
                          <Link to={value.link} target="_blank" className="d-none d-md-block">
                            <img
                              src={value.img}
                              alt={value.title}
                            />
                          </Link>
                          <ArrowButtonSlideXY
                            link={value.link}
                            btnClass={"d-block d-md-none"}
                          />
                        </div>
                      </div>
                    </div>
                  </AnimatedContent>
                )
              })}
            </Container>
          </div>
          <div className="div-container div2">
            <Container>
              {stack2.map((value, i) => {
                return (
                  <AnimatedContent
                    distance={value.distance}
                    direction="horizontal"
                    reverse={false}
                    duration={value.duration}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                    className="position-relative"
                    key={value.id}
                  >
                    <div className="stack-row">
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

                          <Link to={value.link} target="_blank" className="d-none d-md-block">
                            <img
                              src={value.img}
                              alt={value.title}
                            />
                          </Link>
                          <ArrowButtonSlideXY
                            link={value.link}
                            btnClass={"d-block d-md-none"}
                          />
                        </div>
                      </div>
                    </div>
                  </AnimatedContent>
                )
              })}
            </Container>
          </div>
        </div>
        <div className="pb-3 pb-lg-5 stack-pad d-none d-md-block"></div>
      </section >
    </>
  );
};
