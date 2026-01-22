import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }) {
    const loaderRef = useRef(null);
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const circleRef = useRef(null);
    const cursorRef = useRef(null);
    const letterRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const length = circle.getTotalLength();

        // Prepare stroke animation
        gsap.set(circle, {
            strokeDasharray: length,
            strokeDashoffset: length
        });

        const tl = gsap.timeline({
            onComplete: onFinish
        });

        // Panels
        tl.from(topRef.current, {
            y: "-50%",
            duration: 1,
            ease: "power4.out"
        })
            .from(bottomRef.current, {
                y: "50%",
                duration: 1,
                ease: "power4.out"
            }, "-=1")

            // Draw circle
            .to(circle, {
                strokeDashoffset: 0,
                duration: 1,
                ease: "power2.out"
            })

            // Cursor move + click
            .to(cursorRef.current, {
                scale: 1,
                x: window.innerWidth / 2 - 10,
                y: window.innerHeight / 2 - 10,
                duration: 0.6
            })
            .to(cursorRef.current, {
                scale: 0.7,
                duration: 0.15,
                repeat: 1,
                yoyo: true
            })

            // Show letter
            .to(letterRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.4
            })

            // Exit loader
            .to(loaderRef.current, {
                opacity: 0,
                duration: 0.8,
                pointerEvents: "none"
            });

    }, [onFinish]);

    return (
        <div className="loader" ref={loaderRef}>
            <div className="panel top" ref={topRef}></div>
            <div className="panel bottom" ref={bottomRef}></div>

            {/* SVG Circle */}
            <div className="circle-wrapper">
                <svg width="180" height="180">
                    <circle
                        ref={circleRef}
                        cx="80"
                        cy="80"
                        r="45"
                        fill="none"
                        stroke="#0F6DDA"
                        strokeWidth="25"
                    />
                </svg>

                <span className="letter" ref={letterRef}>W</span>
            </div>

            <div className="cursor" ref={cursorRef}></div>
        </div>
    );
}
