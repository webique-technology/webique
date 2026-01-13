import React, { useState, useRef, useEffect } from "react";
import { Container, Tab, Nav, Card, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import circleYes from "../assets/images/circle-yes.svg"

const priceData = [
    // wordpress
    {
        servicePriceType: "cms-website",
        priceTypeData: [
            {
                priceType: "Basic",
                price: 200,
                pricingList: ["limited pages", "limited storage", "14 days free trial"],
                priceTypeBtnLink: "#",
                mostPopular: ""
            },
            {
                priceType: "Basic Popular",
                price: 300,
                pricingList: ["more pages", "more storage", "14 days free trial"],
                priceTypeBtnLink: "#",
                mostPopular: "Most popular"
            },
            {
                priceType: "Advanced",
                price: 400,
                pricingList: ["unlimited pages", "unlimited storage", "30 days free trial"],
                priceTypeBtnLink: "#",
                mostPopular: ""
            },
            {
                priceType: "Premium",
                price: 500,
                pricingList: ["all features", "priority support", "30 days free trial"],
                priceTypeBtnLink: "#",
                mostPopular: ""
            },
        ],
    },
    // custome
    {
        servicePriceType: "custom",
        priceTypeData: [
            {
                priceType: "Basic",
                price: 250,
                pricingList: ["limited pages", "limited storage", "14 days free trial"],
                priceTypeBtnLink: "#",
                mostPopular: ""
            },
            {
                priceType: "Basic Popular",
                price: 350,
                pricingList: ["more pages", "more storage", "14 days free trial"],
                priceTypeBtnLink: "#",
                mostPopular: ""
            },
            {
                priceType: "Advanced",
                price: 450,
                pricingList: ["unlimited pages", "unlimited storage", "30 days free trial"],
                priceTypeBtnLink: "#",
                mostPopular: "Most Popular"
            },
            {
                priceType: "Premium",
                price: 600,
                pricingList: ["all features", "priority support", "30 days free trial"],
                priceTypeBtnLink: "#",
                mostPopular: ""
            },
        ],
    },
];

const PricingSection = () => {
    const [key, setKey] = useState("cms-website");
    const [ghostStyle, setGhostStyle] = useState({
        width: 0,
        left: 0,
        top: 0,
        height: 0,
    });

    const navRefs = useRef({});
    const [isMobile, setIsMobile] = useState(false);

    const updateGhost = () => {
        const currentTab = navRefs.current[key];
        if (!currentTab) return;

        const mobile = window.innerWidth <= 576;
        setIsMobile(mobile);

        setGhostStyle({
            width: currentTab.offsetWidth,
            left: mobile ? 0 : currentTab.offsetLeft,
            top: mobile ? currentTab.offsetTop : 5,
            height: mobile ? currentTab.offsetHeight : "85%",
        });
    };

    useEffect(() => {
        updateGhost();
    }, [key]);

    useEffect(() => {
        window.addEventListener("resize", updateGhost);
        return () => window.removeEventListener("resize", updateGhost);
    }, []);


    // useEffect(() => {
    //     const handleResize = () => {
    //         const currentTab = navRefs.current[key];
    //         // setIsMobile(window.innerWidth <= 576);
    //         if (currentTab) {
    //             setGhostStyle({
    //                 width: currentTab.offsetWidth,
    //                 left: currentTab.offsetLeft,
    //                 top: currentTab.offsetTop,
    //                 height: "85%",
    //             });
    //         }
    //     };

    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, [key]);


    // useEffect(() => {
    //     const currentTab = navRefs.current[key];
    //     if (!currentTab) return;
    //     // setIsMobile(576);
    //     requestAnimationFrame(() => {
    //         if (isMobile) {
    //             setGhostStyle({
    //                 width: currentTab.offsetWidth,
    //                 left: 0,
    //                 top: currentTab.offsetTop,
    //                 height: currentTab.offsetHeight,
    //             });
    //         } else {
    //             setGhostStyle({
    //                 width: currentTab.offsetWidth,
    //                 left: currentTab.offsetLeft,
    //                 top: 5,
    //                 height: "85%",
    //             });
    //         }
    //     });
    // }, [key, isMobile]);


    // useEffect(() => {
    //     const currentTab = navRefs.current[key];
    //     if (currentTab) {
    //         const { offsetLeft, offsetWidth } = currentTab;
    //         setGhostStyle({ width: offsetWidth, left: offsetLeft });
    //     }
    // }, [key]);

    return (
        <section className="section-padding pricing-section">
            <Container>
                <div className="title-content title-gap align-items-center mb-4">
                    <h2>Our Affordable Web Design & Development Pricing</h2>
                    <p className="text-center">
                        Our goal is to make web design affordable for startups, small businesses, and big companies. We help them grow online from the start. Because of our honest work and happy clients, we have received thousands of kind words from around the world.
                    </p>
                </div>

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
                                    >
                                        <span>CMS Website</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        ref={(el) => (navRefs.current["custom"] = el)}
                                        eventKey="custom"
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
                                                <Card className="pricing-card h-100">
                                                    <div className={!price.mostPopular ? "d-none" : "msp-box"}>{price.mostPopular}</div>
                                                    <Card.Body className="d-flex flex-column gap-4">
                                                        <Card.Title>{price.priceType}</Card.Title>
                                                        <div className="dashed-border d-flex align-items-end">
                                                            <h2 className="price m-0">${price.price}</h2>
                                                            <span className="m-0 ps-2">/{price.priceType}</span>
                                                        </div>
                                                        <ul className="list-unstyled dashed-border">
                                                            {price.pricingList.map((item, idx) => (
                                                                <li key={idx} className="text-capitalize d-flex align-items-center">
                                                                    <img src={!price.mostPopular ? circleYes : "d-none"} alt="" />
                                                                    <p className="m-0 ms-2">{item}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <Button href={price.priceTypeBtnLink} variant="primary" className="w-100 price-card-btn">
                                                            Explore
                                                        </Button>
                                                    </Card.Body>
                                                </Card>
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
