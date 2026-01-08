import React,{ useEffect, useRef }  from "react";
import Header from "../components/header";
// import WhatWeOffer from "../components/WhatWeOffer";
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ChooseAgencySec from "../components/ChooseAgencySec";
import WorldwideBusiness from "../components/WorldwideBusiness";
import IndusterySliders from "../components/industerySliders";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";
import WhatWeOffer from "../components/WhatWeOffer";

gsap.registerPlugin(MotionPathPlugin);

const Home = () => {

    return (
        <>
            <Header/>
            <ChooseAgencySec />
            <WhatWeOffer />
            <WorldwideBusiness />
            <IndusterySliders />
            <TestimonialCarousel/>
            {/* <CurveArrow /> */}
        </>
    )
}

export default Home;