import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { Container } from "react-bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/scss/chormeGrid.scss"

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);



export const CurveArrow = () => {
    const arrowRef = useRef(null);
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        const arrow = arrowRef.current;
        const length = path.getTotalLength();

        // Setup path stroke for animation
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        // Duration of arrow movement along path
        const duration = 2.5;

        // Timeline for main path animation
        const tl = gsap.timeline();

        // Animate the arrow along the path once
        tl.to({ progress: 0 }, {
            progress: 1,
            duration: duration,
            ease: "linear",
            onUpdate: function () {
                const progress = this.targets()[0].progress;

                // Animate stroke
                path.style.strokeDashoffset = length * (1 - progress);

                // Arrow position
                const point = path.getPointAtLength(length * progress);
                const nextPoint = path.getPointAtLength(Math.min(length * (progress + 0.01), length));

                const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

                arrow.setAttribute("transform", `translate(${point.x},${point.y}) rotate(${angle})`);
            },
            onComplete: () => {
                // After the path animation completes, start left-right oscillation
                gsap.to(arrow, {
                    x: "+=10", // move right by 10px
                    duration: 0.5,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1, // infinite
                });
            }
        });

    }, []);

    return (
        <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* animated curve */}
            <path
                ref={pathRef}
                d="M40 25 
           C15 205 305 180 155 120 
           C50 95 20 210 250 235"
                fill="none"
                stroke="#0000FF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* arrow centered at origin for perfect alignment */}
            <path
                ref={arrowRef}
                d="M0 -10 L20 0 L0 10 L6 0 Z"
                fill="#fff"
                stroke="#0000FF"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    );
};


export const CloseButton = () => {
    const line1 = useRef(null);
    const line2 = useRef(null);

    useEffect(() => {
        gsap.set([line1.current, line2.current], {
            drawSVG: "0%"
        });

        gsap.to([line1.current, line2.current], {
            drawSVG: "100%",
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1
        });
    }, []);

    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
        >
            <line ref={line1} x1="10" y1="10" x2="30" y2="30" />
            <line ref={line2} x1="30" y1="10" x2="10" y2="30" />
        </svg>
    );
}



