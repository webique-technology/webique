import React, { useState, useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import { Container, Tab, Nav, Card, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaRupeeSign, FaDollarSign } from "react-icons/fa";

import circleYes from "../assets/images/circle-yes.svg"
import { AnimatedContent, BlurText } from "./shared/TextAnimation";

const priceData = [
    // wordpress
    {
        servicePriceType: "cms-website",
        priceTypeData: [
            {
                priceType: "Basic",
                pricePlan: "Starter Website",
                priceINR: "11,999",
                priceUSD: "275",
                pricingList: ["Up to 6 Pages", "CMS (WordPress)", "Template Based"],
                priceTypeBtnLink: "#",
                mostPopular: "",
                delayed: 0.1,
                duration: 0.7,
            },
            {
                priceType: "Basic Popular",
                pricePlan: "Business Website",
                priceINR: "19,999",
                priceUSD: "350",
                pricingList: ["Up to 12 Pages", "CMS (WordPress)", "Home + 2 inner page UI"],
                priceTypeBtnLink: "#",
                mostPopular: "Most popular",
                delayed: 0.2,
                duration: 0.8,
            },
            {
                priceType: "Advanced",
                pricePlan: "Enterprise Website",
                priceINR: "30,000",
                priceUSD: "450",
                pricingList: ["Up to 20 Pages", "CMS (WordPress)", "Home + 6 inner page UI"],
                priceTypeBtnLink: "#",
                mostPopular: "",
                delayed: 0.3,
                duration: 0.9,
            },
            {
                priceType: "Premium",
                pricePlan: "WooCommerce Website",
                priceINR: "42,000",
                priceUSD: "600",
                pricingList: ["6 Pages + 30 Products", "WooCommerce, Shopify", "Payment Getaway"],
                priceTypeBtnLink: "#",
                mostPopular: "",
                delayed: 0.4,
                duration: 1,
            },
        ],
    },
    // custome
    {
        servicePriceType: "custome-website",
        priceTypeData: [
            {
                priceType: "Basic",
                pricePlan: "Starter Website",
                priceINR: "18,000",
                priceUSD: "300",
                pricingList: ["Up to 6 Pages", "React Bootstrap, Figma", "Homepage UI mockup "],
                priceTypeBtnLink: "#",
                mostPopular: "",
                delayed: 0.1,
                duration: 0.7,
            },
            {
                priceType: "Basic Popular",
                pricePlan: "Business Website",
                priceINR: "28,000",
                priceUSD: "400",
                pricingList: ["Up to 12 Pages", "React Bootstrap, Figma", "Home + 2 inner page UI"],
                priceTypeBtnLink: "#",
                mostPopular: "",
                delayed: 0.2,
                duration: 0.8,
            },
            {
                priceType: "Advanced",
                pricePlan: "Enterprise Website",
                priceINR: "40,000",
                priceUSD: "550",
                pricingList: ["Up to 12 Dynamic Pages", "Admin Panel , blogs ", "Home + 4 inner page UI"],
                priceTypeBtnLink: "#",
                mostPopular: "Most Popular",
                delayed: 0.3,
                duration: 0.9,
            },
            {
                priceType: "Premium",
                pricePlan: "WooCommerce Website",
                priceINR: "60,000",
                priceUSD: "750",
                pricingList: ["6 Pages + 30 Products", "Admin panel, API intigration", "Home + 4 inner page UI"],
                priceTypeBtnLink: "#",
                mostPopular: "",
                delayed: 0.4,
                duration: 1,
            },
        ],
    },
];

const fadeUp = {
    hidden: {
        y: 120,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: custom.duration,
            delay: custom.delay,
            ease: "easeOut",
        },
    }),
};

const PricingSection = () => {
    // Assume 'locale' comes from your State or a Context (e.g., 'en-IN' or 'en-US')
    const [currency, setCurrency] = useState("INR"); // default India
    const [testCountry, setTestCountry] = useState("");

    // Intersection Observer
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.2,    // 30% of section visible
    });

    // make for identifing plan Name and key
    const [subscriptionPlan, setSubscriptionPlan] = useState();
    const [key, setKey] = useState("cms-website");

    const [ghostStyle, setGhostStyle] = useState({
        width: 0,
        left: 0,
        top: 0,
        height: 0,
    });

    const navRefs = useRef({});
    const [isMobile, setIsMobile] = useState(false);

    // this code is not wirkin on tab 768 screen and mobile

    // const updateGhost = () => {
    //     const currentTab = navRefs.current[key];
    //     if (!currentTab) return;

    //     const mobile = window.innerWidth <= 768;
    //     setIsMobile(mobile);

    //     setGhostStyle({
    //         width: currentTab.offsetWidth,
    //         left: mobile ? 0 : currentTab.offsetLeft,
    //         top: mobile ? currentTab.offsetTop : 5,
    //         height: mobile ? currentTab.offsetHeight : "85%",
    //     });
    //     console.log("ghost btn click:", currentTab.offsetWidth);

    // };

    // useEffect(() => {
    //     updateGhost();
    // }, [key]);

    // useEffect(() => {
    //     window.addEventListener("resize", updateGhost);
    //     return () => window.removeEventListener("resize", updateGhost);
    // }, []);

    const planClick = (selectedPlan) => {
        setSubscriptionPlan(selectedPlan);
        // console.log("Clicked key:", selectedPlan);
    };

    const keyClick = (e) => {
        const text = e.target.innerText;
        setKey(text);
        // console.log("Clicked key:", text);
    };

    useEffect(() => {
        const handleResize = () => {
            const currentTab = navRefs.current[key];
            // setIsMobile(window.innerWidth <= 576);
            if (currentTab) {
                setGhostStyle({
                    width: currentTab.offsetWidth,
                    left: currentTab.offsetLeft,
                    top: currentTab.offsetTop,
                    height: "85%",
                });
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [key]);

    useEffect(() => {
        const currentTab = navRefs.current[key];
        if (!currentTab) return;
        // setIsMobile(576);
        requestAnimationFrame(() => {
            if (isMobile) {
                setGhostStyle({
                    width: currentTab.offsetWidth,
                    left: 0,
                    top: currentTab.offsetTop,
                    height: currentTab.offsetHeight,
                });
            } else {
                setGhostStyle({
                    width: currentTab.offsetWidth,
                    left: currentTab.offsetLeft,
                    top: 5,
                    height: "85%",
                });
            }
        });
    }, [key, isMobile]);

    useEffect(() => {
        const currentTab = navRefs.current[key];
        if (currentTab) {
            const { offsetLeft, offsetWidth } = currentTab;
            setGhostStyle({ width: offsetWidth, left: offsetLeft });
        }
    }, [key]);

    // useEffect(() => {
    //     fetch("https://ipinfo.io/json")
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.country !== "IN") {
    //                 setCurrency("USD");
    //             } else {
    //                 setCurrency("INR");
    //             }

    //             console.log("Country:", data.country);
    //         })
    //         .catch(err => {
    //             console.error("IP lookup failed:", err);
    //             // safe fallback
    //             setCurrency("USD");
    //         });
    // }, []);

    const [fetchedCountry, setFetchedCountry] = useState(null);

    // 1️⃣ Fetch real country once
    useEffect(() => {
        fetch("https://ipinfo.io/json")
            .then(res => res.json())
            .then(data => {
                setFetchedCountry(data.country); // store real country
                // console.log("Fetched country:", data.country);
            })
            .catch(err => {
                // console.error("IP lookup failed:", err);
                setFetchedCountry("US"); // fallback
            });
    }, []);

    // 2️⃣ Determine currency whenever fetchedCountry or testCountry changes
    useEffect(() => {
        const country = testCountry || fetchedCountry; // dev override takes priority
        if (!country) return; // wait for fetch
        setCurrency(country === "IN" ? "INR" : "USD");
        // console.log("Currency set for country:", country, "=>", country === "IN" ? "INR" : "USD");
    }, [fetchedCountry, testCountry]);


    return (
        <section ref={ref} className="section-padding pricing-section">
            <Container>
                <AnimatedContent
                    className="position-relative"
                    distance={120}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                >
                    <div className="title-content title-gap align-items-center mb-4">
                        <h2 className="text-center">
                            <BlurText
                                text=" Our Affordable Web Design & Development Pricing"
                                delay={10}
                                animateBy="letters"
                                direction="bottom"
                                className="justify-content-center"
                            />
                        </h2>
                        <p className="text-start text-md-center">
                            Our goal is to make web design affordable for startups, small businesses, and big companies. We help them grow online from the start. Because of our honest work and happy clients, we have received thousands of kind words from around the world.
                        </p>
                    </div>
                </AnimatedContent>
                <div className="pricing-container d-flex flex-column gap-1 gap-sm-5 align-items-center">
                    <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
                        <div className="position-relative mb-4 nav-tab-div">
                            <Nav className="nav-tabs justify-content-center position-relative">
                                {/* Ghost Div */}
                                <motion.div
                                    className="nav-ghost-div position-absolute"
                                    style={{
                                        width: ghostStyle.width,
                                        left: ghostStyle.left,
                                        top: ghostStyle.top,
                                        height: ghostStyle.height,
                                    }}
                                    layout
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />

                                <Nav.Item>
                                    <Nav.Link
                                        ref={(el) => (navRefs.current["cms-website"] = el)}
                                        eventKey="cms-website"
                                        onClick={keyClick}
                                    >
                                        <span>CMS <br className="tab-br" /> Website</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        ref={(el) => (navRefs.current["custome-website"] = el)}
                                        eventKey="custome-website"
                                        onClick={keyClick}
                                    >
                                        <span>Custom Website</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>

                        <Tab.Content className="w-100">
                            {priceData.map((tab) => (
                                <Tab.Pane eventKey={tab.servicePriceType} key={tab.servicePriceType} className="w-100">
                                    <Row className="justify-content-center tab-card-576">
                                        {tab.priceTypeData.map((price) => (
                                            <Col sm={6} lg={3} key={price.priceType} className="mb-4 px-2 price-card-576">
                                                <motion.div
                                                    key={`${key}-${tab.servicePriceType}`}
                                                    variants={fadeUp}
                                                    initial="hidden"
                                                    animate={inView ? "visible" : "hidden"}
                                                    custom={{
                                                        delay: price.delayed,
                                                        // duration: price.duration,
                                                    }}
                                                >
                                                    <Card className="pricing-card">
                                                        <div className={!price.mostPopular ? "d-none" : "msp-box"}>{price.mostPopular}</div>
                                                        <Card.Body className="d-flex flex-column gap-3">
                                                            <Card.Title>{price.pricePlan}</Card.Title>
                                                            <div className="dashed-border d-flex align-items-end">
                                                                {/* <select
                                                                value={testCountry}
                                                                onChange={(e) => setTestCountry(e.target.value)}
                                                            >
                                                                <option value="">Auto detect</option>
                                                                <option value="IN">India</option>
                                                                <option value="US">USA</option>
                                                                <option value="GB">UK</option>
                                                            </select> */}

                                                                <h2>
                                                                    {currency === "INR" ? `₹${price.priceINR}` : `$${price.priceUSD}`}
                                                                </h2>

                                                                {/* <span className="m-0 ps-2">/{price.priceType}</span> */}
                                                            </div>
                                                            <ul className="list-unstyled dashed-border">
                                                                {price.pricingList.map((item, idx) => (
                                                                    <li key={idx} className="text-capitalize d-flex align-items-center">
                                                                        {/* <img src={!price.mostPopular ? circleYes : "d-none"} alt="" /> */}
                                                                        <img src={circleYes} alt="circle-yes" />
                                                                        <p className="m-0 ms-2">{item}</p>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            <Button
                                                                as={Link}
                                                                to="/pricing"
                                                                state={{
                                                                    subscriptionPlan: price.priceType,
                                                                    selectedKey: tab.servicePriceType,
                                                                }}
                                                                variant="primary"
                                                                className="w-100 price-card-btn"
                                                            >
                                                                Explore
                                                            </Button>
                                                        </Card.Body>
                                                    </Card>
                                                </motion.div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </Container>
        </section >
    );
};

export default PricingSection;
