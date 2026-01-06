import React, { useEffect, useRef } from "react";

import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

// make for arrow animation curve
export const CurveArrow = () => {
    const arrowRef = useRef(null);
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        const length = path.getTotalLength();

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        const tl = gsap.timeline({
            repeat: -1,
            ease: 'none',
        });

        tl.to(path, {
            strokeDashoffset: 0,
            duration: 3,
        }, 0);

        tl.to(arrowRef.current, {
            duration: 3,
            motionPath: {
                path: path,
                align: path,
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
            },
        }, 0);

    }, []);

    return (
        <>
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
                    d="
                    M40 25 
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
        </>
    )
}


// export const AnimatedGrid = () => {
//     const gridRef = useRef([]);

//     useEffect(() => {
//         gsap.fromTo(
//             gridRef.current,
//             {
//                 scale: 0.8,
//                 opacity: 0,
//             },
//             {
//                 scale: 1,
//                 opacity: 1,
//                 duration: 0.8,
//                 stagger: {
//                     each: 0.05,
//                     from: "center",
//                 },
//                 ease: "power3.out",
//             }
//         );
//     }, []);

//     return (
//         <div className="grid">
//             {[...Array(12)].map((_, i) => (
//                 <div
//                     key={i}
//                     className="grid-item"
//                     ref={(el) => (gridRef.current[i] = el)}
//                 />
//             ))}
//         </div>
//     );
// }
