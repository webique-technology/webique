import React from "react";
import Header from "../components/header";
import WhatWeOffer from "../components/WhatWeOffer";


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ChooseAgencySec from "../components/ChooseAgencySec";
import { CurveArrow } from "../components/shared/gsapAnimation";
import WorldwideBusiness from "../components/WorldwideBusiness";
import IndusterySliders from "../components/industerySliders";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";

gsap.registerPlugin(MotionPathPlugin);

const Home = () => {

    return (
        <>
            <Header/>
            <ChooseAgencySec />
            <WorldwideBusiness />
            <IndusterySliders />
            <TestimonialCarousel/>
            <Footer/>
            {/* <CurveArrow /> */}
        </>
    )
}

export default Home;