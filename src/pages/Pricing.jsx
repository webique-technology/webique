import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap'
import pricingImgOne from '../assets/images/pricing-head-image.svg'
import '../assets/scss/InnerPricing.scss'

import { AnimatedContent, BlurText } from '../components/shared/TextAnimation';

import pIcnOne from '../assets/images/pIcn-1.svg'
import pIcnTwo from '../assets/images/pIcn-2.svg'
import pIcnThr from '../assets/images/pIcn-3.svg'

import phoneIcon from "../assets/images/phone-footer.svg"

import arrowIcn from "../assets/images/arrow-one.svg"
import img1 from "../assets/images/tab-img-1.svg";
import img2 from "../assets/images/tab-img-2.svg";
import img3 from "../assets/images/tab-img-3.svg";
import img4 from "../assets/images/tab-img-4.svg";

import planImg from "../assets/images/pricing-planning.png";
import designImg from "../assets/images/pricing-design.png";
import devImg from "../assets/images/pricing-developemnt.png";
import deployImg from "../assets/images/pricing-deploy.png";
import PriceTable from '../components/shared/PriceTable'
import { CurveArrow } from '../components/shared/gsapAnimation'
import FAQAccordionComp from '../components/shared/FAQAccordionComp'
import PriceAccordion from '../components/shared/PriceAccordion'
import ButtonCall from '../components/ButtonLink';
import questionMrk from '../assets/images/question-mark.svg'


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

const Pricing = () => {
    // getting subscriptionPlan & key from home page pricing section
    const location = useLocation();

    const subscriptionPlan = location.state?.subscriptionPlan;
    const selectedKey = location.state?.selectedKey;

    // Intersection Observer
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.2,    // 30% of section visible
    });

    // console.log("data getting from homepage pricing section:", subscriptionPlan, selectedKey);
    // console.log("Location state:", location.state);;

    // ============================================
    const [activeId, setActiveId] = useState(1); // first accordion active


    const accordionData = [
        {
            title: "Mobile-first Design",
            para: "We design experiences starting from mobile screens first, ensuring fast performance and seamless scaling.",
            listTitle: "",
            lists: [],
            image: img1,
        },
        {
            title: "Secure Code",
            para: "Our code follows best security practices to protect applications from vulnerabilities.",
            listTitle: "",
            lists: [],
            image: img2,
        },

        {
            title: "SEO-friendly Structure",
            para: "Clean and semantic HTML structures improve search engine visibility and indexing.",
            listTitle: "",
            lists: [],
            image: img3,
        },
        {
            title: "Clear Communication",
            para: "Transparent communication ensures clarity, alignment, and timely delivery.",
            listTitle: "",
            lists: [],
            image: img4,
        },
    ]

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    const activeItem = accordionData.find(
        (item) => item.id === activeId
    );

    return (
        <>
            {/* to header section in pricing page */}
            <section className='service-intro section-padding'>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col md={6} lg={6} sm={12} className=''>
                            <AnimatedContent
                                distance={-120}
                                direction="horizontal"
                                reverse={false}
                                duration={0.9}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                                className="title-gap"
                            >
                                <h2>Web Design Packages That Fit Your Budget</h2>
                                <p>Our pricing is transparent and flexible. We understand your business needs, choose the right technology, and customize your website for a smooth launch. Every plan includes mobile-first design, SEO-friendly structure, secure code, post-launch support, and clear communication.</p>

                                <ul className='pricing-list'>
                                    <li><img src={pIcnOne} /> Understand Your Business</li>
                                    <li><img src={pIcnTwo} /> Select the Right Technology</li>
                                    <li><img src={pIcnThr} /> Customize & Launch</li>
                                </ul>
                            </AnimatedContent>
                        </Col>
                        <Col md={5} lg={5} sm={12} className='d-none d-md-block'>
                            <AnimatedContent
                                distance={120}
                                direction="horizontal"
                                reverse={false}
                                duration={0.9}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <div className='image-full-inner'>
                                    <img src={pricingImgOne} className='img-fluid' />
                                </div>
                            </AnimatedContent>
                        </Col>
                    </Row>
                </Container>


            </section>

            {/* price table */}
            <section className='pricing-table-section section-padding' >
                <Container className='arrow-container'>
                    {/* curve arrow component call */}
                    {/* <div className="pricing-arrow">
                        <CurveArrow />
                    </div> */}
                    <AnimatedContent
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
                        <PriceTable
                            initialPlan={subscriptionPlan}
                            initialType={selectedKey}
                        />
                        <Row className='align-items-center justify-content-center d-flex gap-4'>
                            <ButtonCall className='nav-btn my-4 border-btn'
                                label="Any Queries"
                                to="/faq"
                                icon={questionMrk}
                            />
                            <ButtonCall className='nav-btn my-4'
                                label="Enquiry"
                                to="/contact"
                                icon={arrowIcn}
                            />
                        </Row>
                    </AnimatedContent>
                </Container>
            </section >

            {/* accordian  */}
            <section className='section-padding'>
                {/* <PriceAccordion data={accordionData}/> */}
                <FAQAccordionComp data={accordionData} showImage={true} />
            </section>

            {/* concert, luanch webiste process */}
            <section ref={ref} className='website-process section-padding footer-gradient-pb'>
                <Container className='title-gap align-items-center'>
                    <BlurText
                        text="from concept to launch  our website process"
                        delay={50}
                        animateBy="words"
                        direction="bottom"
                        className="justify-content-center"
                    />
                    {/* <h2>from concept to launch  our website process</h2> */}
                    <Row className='g-3 g-md-4 tab-card-576'>
                        <Col lg={3} md={6} sm={6} className="price-card-576">
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                custom={{ delay: 0.5, }}
                                className='process-card'
                            >
                                <img src={planImg} alt='process-img' className='img-fluid' />
                                <div className='process-box process-bg-1'>
                                    <h4>Research & Strategy</h4>
                                    <p>Understanding your business and user needs before we build.</p>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={3} md={6} sm={6} className='price-card-576'>
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                custom={{ delay: 0.6, }}
                                className='process-card'
                            >
                                <img src={designImg} alt='process-img' className='img-fluid' />
                                <div className='process-box process-bg'>
                                    <h4>Design & Feedback</h4>
                                    <p>Clean, modern UI focused on user experience.</p>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={3} md={6} sm={6} className='price-card-576'>
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                custom={{ delay: 0.7, }}
                                className='process-card'
                            >
                                <img src={devImg} alt='process-img' className='img-fluid' />
                                <div className='process-box process-bg-1'>
                                    <h4>Development & Testing</h4>
                                    <p>Your feedback refined into the final output.</p>
                                </div>
                            </motion.div>
                        </Col>
                        <Col lg={3} md={6} sm={6} className='price-card-576'>
                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                custom={{ delay: 0.8, }}
                                className='process-card'
                            >
                                <img src={deployImg} alt='process-img' className='img-fluid' />
                                <div className='process-box process-bg'>
                                    <h4>Deployment & Launch</h4>
                                    <p>Tested, optimized, and launched smoothly.</p>
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Pricing