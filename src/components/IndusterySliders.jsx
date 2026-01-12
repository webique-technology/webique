import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import gsap from 'gsap';
import "../assets/scss/marqueeSlides.scss";

const industryData = [
    "E-Commerce & Shopify",
    "Industrial & Manufacturing",
    "Home Service",
    "Dental",
    "Real Estate",
    "Healthcare"
];


const MarqueeRow = ({ items, speed = 20, reverse = false }) => {
    const rowRef = useRef(null);

    useEffect(() => {
        const row = rowRef.current;
        const itemsWidth = row.scrollWidth / 3;

        gsap.fromTo(
            row,
            { x: reverse ? -itemsWidth : 3 },
            {
                x: reverse ? 0 : -itemsWidth,
                duration: speed,
                ease: "linear",
                repeat: -1
            }
        );
    }, [speed, reverse]);

    return (
        <div className="marquee-wrapper">
            <ul className="marquee-content" ref={rowRef}>
                {[...items, ...items].map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const IndustrySliders = () => {
    return (
        <section className="industery-marquee section-padding">
            <Container>
                <div className="title-count text-center mb-5">
                    <h2>Trusted by Businesses</h2>
                </div>
                <div className="marquee-main-container">
                    <div className="overlay overlay-left"></div>
                    <div className="overlay overlay-right"></div>

                    <MarqueeRow items={industryData} speed={20} />
                    <MarqueeRow items={industryData} speed={26} reverse />
                    <MarqueeRow items={industryData} speed={19} />
                    <MarqueeRow items={industryData} speed={25} reverse />
                </div>
            </Container>
        </section>
    );
};

export default IndustrySliders;
