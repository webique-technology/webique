import React from "react";


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ChooseAgencySec from "../components/ChooseAgencySec";
import { CurveArrow } from "../components/shared/gsapAnimation";
import WorldwideBusiness from "../components/WorldwideBusiness";
import IndusterySliders from "../components/industerySliders";

gsap.registerPlugin(MotionPathPlugin);

const Home = () => {

    return (
        <>
            <ChooseAgencySec />
            <WorldwideBusiness />
            <IndusterySliders />
            {/* <CurveArrow /> */}
        </>
    )
}

export default Home;