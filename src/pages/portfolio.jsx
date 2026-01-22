import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

// scss
import "../style/portfolio.scss"

// images
import arrowOne from "../assets/images/arrow-one.svg";
import dots from "../assets/images/dots.png";
// scroll img
import tockenWeb from "../assets/images/tocken-web.png"
import dropNpark from "../assets/images/dropNpark-web.png"
import kalyaniTravale from "../assets/images/kalyani-travel-web.jpeg"
import sanskrutiHoliday from "../assets/images/sanskruti-holiday-web.png"
import balasahebBorade from "../assets/images/balasaheb-borade.jpg"
import omMangalam from "../assets/images/om-mangalam.jpeg"
import crsbmsNgo from "../assets/images/crsmbs-we.jpeg"
import unicornHosp from "../assets/images/unicorn-hospital.jpeg"

import omHouse from "../assets/images/pt-om.png"

import automation1 from "../assets/images/automation-1.png"
import automation2 from "../assets/images/automation-2.png"
import automation3 from "../assets/images/automation-3.png"
import automation4 from "../assets/images/automation-4.png"
import automation5 from "../assets/images/automation-5.png"
import { ArrowButtonSlideXY } from '../components/shared/gsapAnimation';


const masnoryData = [
    {
        desc: "Broker-free platform to buy, sell, or rent directly from verified owners & developers.",
        title: "Drop-N-park",
        bntLink: "https://dropnpark.com/",
        src: dropNpark,
        extraClass: "",
        imgScrollClass: "drop-np-scroll"
    },
    {
        desc: "Showcase Your Project to 10M+ Users",
        title: "Balasaheb Borade",
        bntLink: "https://balasahebboradegroup.com/",
        src: balasahebBorade,
        extraClass: "",
        imgScrollClass: "borade-scroll"
    },
    {
        desc: "Instant Alerts: Get notified when your dream property is listed.",
        title: "Automation",
        bntLink: "",
        src: automation3,
        extraClass: "",
        imgScrollClass: ""
    },
    {
        desc: "In-App Chat & Call: Talk directly to owners or builders — no 3rd party needed.",
        title: "sanskruti holiday",
        bntLink: "https://sanskrutiholidays.com/",
        src: sanskrutiHoliday,
        extraClass: "",
        imgScrollClass: "sanskruti-scroll"
    },
    {
        desc: "Showcase Your Project to 10M+ Users",
        title: "Unicorns Hospital",
        bntLink: "https://unicornshospitals.com/",
        src: unicornHosp,
        extraClass: "",
        imgScrollClass: "unicorn-scroll"
    },
    {
        desc: "Exclusive Offers: Get builder-only promotions & limited-time deals.",
        title: "CRSMBS Ngo",
        bntLink: "https://crsmbs.org/",
        src: crsbmsNgo,
        extraClass: "",
        imgScrollClass: "crsbms-scroll"
    },
    {
        desc: "Broker-free platform to buy, sell, or rent directly from verified owners & developers.",
        title: "Tocken",
        bntLink: "https://tocken.in/",
        src: tockenWeb,
        extraClass: "",
        imgScrollClass: "tocken-scroll"
    },
    {
        desc: "No Broker, No Commission: Direct chat with owners/developers. No intermediaries.",
        title: "Kalyani Travels",
        bntLink: "https://kalyanitravel.co.in/",
        src: kalyaniTravale,
        extraClass: "",
        imgScrollClass: "kt-scroll"
    },
    {
        desc: "Showcase Your Project to 10M+ Users",
        title: <>Om mangalam <br /> House keeping</>,
        bntLink: "https://ommangalamfacilities.com/",
        src: omMangalam,
        extraClass: "",
        imgScrollClass: "om-mangalam-scroll"
    },
    {
        desc: "All Property Types: Homes, land, shops, offices, resale, new launch — everything under one roof.",
        title: "Automation",
        bntLink: "",
        src: automation5,
        extraClass: "",
        imgScrollClass: ""
    },
    // extra cards 
    {
        desc: "All Property Types: Homes, land, shops, offices, resale, new launch — everything under one roof.",
        title: "Automation",
        bntLink: "",
        src: automation5,
        extraClass: "",
        imgScrollClass: ""
    },
    {
        desc: "All Property Types: Homes, land, shops, offices, resale, new launch — everything under one roof.",
        title: "Automation",
        bntLink: "",
        src: automation5,
        extraClass: "",
        imgScrollClass: ""
    },
    {
        desc: "All Property Types: Homes, land, shops, offices, resale, new launch — everything under one roof.",
        title: "Automation",
        bntLink: "",
        src: automation5,
        extraClass: "",
        imgScrollClass: ""
    },
];

const Portfolio = () => {
    const imageRefs = useRef([]);
    let globalIndex = 0;
    const indexRef = useRef(0);
    const isMobileWidth = () => window.innerWidth <= 576;

    const [isMobile, setIsMobile] = useState(isMobileWidth());


    // for load more
    const [visible, setVisible] = useState(9); // show first 3 cards

    // console.log("scroll img ref:", imageRefs);

    // for image height
    useLayoutEffect(() => {
        const heights = imageRefs.current.map(
            (img) => img?.offsetHeight
        );

        console.log("All image heights:", heights);
        // All image heights: (9) [1110, 386, 339, 1172, 1021, 257, 2249, 262, 287]
    }, []);

    // for mouse enter sroll up
    const handleMouseEnter = (index) => {
        const img = imageRefs.current[index];
        if (!img) return;

        const containerHeight = img.parentElement.offsetHeight;
        const imageHeight = img.offsetHeight;

        // console.log("container height:", containerHeight);
        // console.log("imageHeight:", imageHeight);

        const scrollAmount = imageHeight - containerHeight;
        // console.log("scrollAmout to scroll 100% height of image:", scrollAmount);


        if (scrollAmount > 0) {
            img.style.transform = `translateY(-${scrollAmount}px)`;
        }
    };
    //  for mouse leave scroll down
    const handleMouseLeave = (index) => {
        const img = imageRefs.current[index];
        if (!img) return;

        img.style.transform = "translateY(0)";
    };

    useEffect(() => {
        indexRef.current = 0;
    }, [visible]);


    useEffect(() => {
        const handleResize = () => {
            const mobile = isMobileWidth();
            setIsMobile(mobile);

            // if (mobile) {
            //     setVisible(6);
            // }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const loadMore = () => {
        setVisible(prev =>
            Math.min(prev + 6, masnoryData.length)
        );
    };

    return (
        <>
            <section className='section-padding portfolio-page'>
                <Container>
                    <div className="title-content title-gap align-items-center mb-4">
                        <h2 className="text-center">Our Work Philosophy</h2>
                        <p className="text-start text-md-center">
                            We believe great digital outcomes are achieved through a disciplined approach, strategic focus, and flawless <br className='d-none d-lg-block' /> execution. These three principles guide every project we deliver.
                        </p>
                    </div>
                    <div className="portfolio-grid-container">
                        <div className="mansory-grid">
                            {masnoryData.slice(0, visible).map((value, i) => {
                                const currentIndex = indexRef.current++;
                                return (
                                    <div
                                        className={`blue-box ${value.extraClass}`}
                                        key={i}
                                        onMouseEnter={() => handleMouseEnter(currentIndex)}
                                        onMouseLeave={() => handleMouseLeave(currentIndex)}
                                    >
                                        <p className='mb-2'>{value.desc}</p>
                                        <div className="blue-box-content">
                                            <div className="d-flex justify-content-between align-items-center bbc-top">
                                                <p className='m-0 p-0'>{value.title}</p>
                                                {/* <a href={value.bntLink} target='_blank' className={value.bntLink === "" ? "d-none" : "d-block"}>
                                                    <img src={arrowOne} alt="" />
                                                </a> */}
                                                <ArrowButtonSlideXY
                                                    link={value.bntLink}
                                                    btnClass={value.bntLink === "" ? "d-none" : "d-block"}
                                                />
                                            </div>
                                            <div className={`bb-img-scroll ${value.imgScrollClass}`}>
                                                <img src={value.src} alt={value.title} ref={(el) => (imageRefs.current[currentIndex] = el)} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {visible < masnoryData.length && (
                            <div className='w-100 d-flex align-items-center justify-content-center pt-5'>
                                <button className='nav-btn' onClick={loadMore}>
                                    Load more
                                    <img src={dots} alt="arrow" />
                                </button>
                            </div>
                        )}
                    </div>


                    {/* <Masonry /> */}
{/* 
                    <svg width="150" height="150" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="#1886FF"
                            d="M 89.5,68 
       C 89.8,65.5 93.5,54.5 93.5,42.5 
       93.5,14.5 70.5,-8.5 42.5,-8.5 
       14.5,-8.5 -8.5,14.5 -8.5,42.5 
       -8.5,70.5 14.5,93.5 42.5,93.5 
       55.5,93.5 67.5,89 76.5,82.5 
       L 69.5,65 
       C 58.5,74.5 50.8,77 42.5,77 
       23.5,77 8,61.5 8,42.5 
       8,23.5 23.5,8 42.5,8 
       61.5,8 77,23.5 77,42.5 
       77,50.2 74.5,57.3 70.5,63 
       Z"
                            transform="translate(8.5, 8.5)"
                            fill-rule="evenodd"
                        />
                    </svg>
                    <svg width="48px" height="48px" viewBox="0 0 24 24" fill="#1886FF" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.40701 3.41403C3.94876 3.27925 3.71963 3.21186 3.56363 3.27001C3.42768 3.32069 3.32045 3.42793 3.26977 3.56387C3.21162 3.71988 3.27901 3.949 3.41379 4.40726L7.61969 18.7073C7.74493 19.1332 7.80756 19.3461 7.93395 19.4449C8.04424 19.5312 8.18564 19.5672 8.32377 19.5443C8.48206 19.5181 8.639 19.3611 8.95286 19.0473L11.9999 16.0002L16.4343 20.4345C16.6323 20.6325 16.7313 20.7315 16.8454 20.7686C16.9459 20.8012 17.054 20.8012 17.1545 20.7686C17.2686 20.7315 17.3676 20.6325 17.5656 20.4345L20.4343 17.5659C20.6323 17.3679 20.7313 17.2689 20.7684 17.1547C20.801 17.0543 20.801 16.9461 20.7684 16.8457C20.7313 16.7315 20.6323 16.6325 20.4343 16.4345L15.9999 12.0002L19.047 8.95311C19.3609 8.63924 19.5178 8.48231 19.5441 8.32402C19.567 8.18589 19.5309 8.04448 19.4447 7.93419C19.3458 7.8078 19.1329 7.74518 18.7071 7.61993L4.40701 3.41403Z" stroke="#1886FF" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" />
                    </svg> */}


                </Container>
            </section>
        </>
    )
}

export default Portfolio;




