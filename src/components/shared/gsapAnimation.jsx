import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { Container } from "react-bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/scss/chormeGrid.scss"

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

import arrowOne from "../../assets/images/arrow-one.svg";

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

export const ArrowButtonSlideXY = ({ link, btnClass }) => {
    const arrowRef = useRef(null);

    const handleHover = () => {
        const tl = gsap.timeline();

        // got to top right
        tl.to(arrowRef.current, {
            x: 25,
            y: -25,
            opacity: 0,
            duration: 0.25,
            ease: "power2.in",
        })
            // come to bottom left
            .set(arrowRef.current, {
                x: -25,
                y: 25,
            })
            .to(arrowRef.current, {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.2,
                ease: "power2.out",
            });
    };

    return (
        <a
            onMouseEnter={handleHover}
            className={`animated-arrow-btn ${btnClass}`}
            href={link}
            target="_blank"
        >
            <img
                ref={arrowRef}
                src={arrowOne}
                alt="Load more"
                width={32}
            />
        </a>
    );
}

// == work in progress ---- not completed calling hover btn 
export const HoverCallingBtn = () => {
    return (
        <>
            <div>
                <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M30 20
                           C28 18 24 18 22 20
                           L18 24
                           C16 26 16 30 18 34
                           C28 54 46 72 66 82
                           C70 84 74 84 76 82
                           L80 78
                           C82 76 82 72 80 70
                           L68 62
                           C66 60 62 60 60 62
                           L56 66
                           C48 62 38 52 34 44
                           L38 40
                           C40 38 40 34 38 32
                           Z"
                        stroke="#0E1231"
                        stroke-width="5"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />

                    <path class="wave wave1" d="M70 30 C85 40 85 80 70 90" />
                    <path class="wave wave2" d="M80 24 C100 40 100 80 80 96" />
                    {/* <path class="wave wave3" d="M90 18 C115 40 115 80 90 102" /> */}
                </svg>
            </div>
        </>
    )
}


