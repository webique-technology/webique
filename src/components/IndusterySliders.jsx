import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import gsap from 'gsap';
import "../assets/scss/marqueeSlides.scss";

const industryData = [
    "E-Commerce & Shopify",
    "Social Media & Influencer",
    "Real Estate",
    "Healthcare & Medical",
    "Logistics & Transportation",
    "Automotive",
    "Industrial & Manufacturing",
    "Education & School",
    "Hospitality & Travel",
];

const industryData2 = [
    "Corporate & Enterprise",
    "Food & Restaurant",
    "Fashion & Jewellery",
    "Home Services",
    "Dental",
    "Fitness & Gym",
    "Gaming",
    "Legal",
    "B2B & SaaS",
]


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
                {[...items, ...items, ...items].map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const IndustrySliders = () => {
    return (
        <section className="industery-marquee section-padding pb-0">
            <Container>
                <div className="title-count text-center mb-2 mb-md-5">
                    <h2>Industries We Work With</h2>
                </div>
                <div className="marquee-main-container">
                    <div className="overlay overlay-left"></div>
                    <div className="overlay overlay-right"></div>

                    <MarqueeRow items={industryData} speed={20} />
                    <MarqueeRow items={industryData2} speed={29} reverse />
                    <MarqueeRow items={industryData} speed={19} />
                    <MarqueeRow items={industryData2} speed={25} reverse />
                </div>
            </Container>
        </section>
    );
};

export default IndustrySliders;
