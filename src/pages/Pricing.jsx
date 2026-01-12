import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pricingImgOne from '../assets/images/pricing-head-image.svg'
import '../assets/scss/InnerPricing.scss'

import pIcnOne from '../assets/images/pIcn-1.svg'
import pIcnTwo from '../assets/images/pIcn-2.svg'
import pIcnThr from '../assets/images/pIcn-3.svg'


import img1 from "../assets/images/pricing-accordion.svg";
import img2 from "../assets/images/pricing-head-image.svg";
import img3 from "../assets/images/pricing-accordion.svg";
import img4 from "../assets/images/pricing-head-image.svg";
import img5 from "../assets/images/pricing-accordion.svg";


import planImg from "../assets/images/pricing-planning.png";
import designImg from "../assets/images/pricing-design.png";
import devImg from "../assets/images/pricing-developemnt.png";
import deployImg from "../assets/images/pricing-deploy.png";
import PriceTable from '../components/shared/PriceTable'
import { CurveArrow } from '../components/shared/gsapAnimation'
const Pricing = () => {

    const [activeId, setActiveId] = useState(1); // first accordion active

    const accordionData = [
        {
            id: 1,
            title: "Mobile-first Design",
            content:
                "We design experiences starting from mobile screens first, ensuring fast performance and seamless scaling.",
            image: img1,
        },
        {
            id: 2,
            title: "Secure Code",
            content: "Our code follows best security practices to protect applications from vulnerabilities.",
            image: img2,
        },
        {
            id: 3,
            title: "Mobile-first Design",
            content:
                "Layouts are optimized for touch interactions and progressively enhanced for larger screens.",
            image: img3,
        },
        {
            id: 4,
            title: "SEO-friendly Structure",
            content:
                "Clean and semantic HTML structures improve search engine visibility and indexing.",
            image: img4,
        },
        {
            id: 5,
            title: "Clear Communication",
            content:
                "Transparent communication ensures clarity, alignment, and timely delivery.",
            image: img5,
        },
    ];

    const processData = [
        {
            id: 1,
            title: "Planning",
            subtitle: "Understanding business goals, audience & strategy",
            image: planImg,
        },
        {
            id: 2,
            title: "Design",
            subtitle: "UI/UX wireframes, Figma designs & brand identity",
            image: designImg,
        },
        {
            id: 3,
            title: "Development",
            subtitle: "Clean code, responsive layout & performance optimization",
            image: devImg,
        },
        {
            id: 4,
            title: "Deploy",
            subtitle: "Testing, launch, and going live with confidence",
            image: deployImg,
        },
    ];



    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };


    const activeItem = accordionData.find(
        (item) => item.id === activeId
    );


    return (
        <>
            <section className='service-intro section-padding'>
                <Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col md={6} lg={6} sm={12} className='title-gap'>

                            <h2>Web Design Packages That Fit Your Budget</h2>
                            <p>Our pricing is transparent and flexible. We understand your business needs, choose the right technology, and customize your website for a smooth launch. Every plan includes mobile-first design, SEO-friendly structure, secure code, post-launch support, and clear communication.</p>

                            <ul className='pricing-list'>
                                <li><img src={pIcnOne} /> Understand Your Business</li>
                                <li><img src={pIcnTwo} /> Select the Right Technology</li>
                                <li><img src={pIcnThr} /> Customize & Launch</li>
                            </ul>

                        </Col>
                        <Col md={5} lg={5} sm={12}>
                            <div className='image-full-inner'>
                                <img src={pricingImgOne} className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>


            </section>

            
            <section className='pricing-table-section' >
                <Container className='container-relative'>
                    <CurveArrow/>
                    <PriceTable />
                </Container>
            </section>
            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col md={6} lg={6} sm={12} className='title-gap'>
                            <h2>What You Get With Every Plan</h2>
                            <p>The following features are common across all our plans. Every package includes responsive mobile-first design, SEO-optimized structure, secure coding practices, ongoing post-launch support, and clear, consistent communication.</p>
                            <div className="accordion-image">
                                <img src={activeItem?.image} alt={activeItem?.title} className="accordion-img" />
                            </div>
                        </Col>


                        {/* ACCORDION COLUMN */}
                        <Col md={6} lg={6} sm={12}>
                            <div className="accordion-wrap">
                                {accordionData.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`accordion-item ${activeId === item.id ? "active" : ""
                                            }`}
                                    >
                                        <button
                                            className="accordion-header"
                                            onClick={() => setActiveId(item.id)}
                                        >
                                            <span className="title">{item.title}</span>
                                            <span className="icon">
                                                {activeId === item.id ? "−" : "+"}
                                            </span>
                                        </button>

                                        <div className="accordion-content">
                                            <div className="accordion-inner">
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='website-process section-padding'>
                <Container className='title-gap align-items-center'>
                    <h2>from concept to launch  our website process</h2>


                    <Row>
                        <Col lg={3} md={3} sm={12}>
                            <div className='process-card'>
                                <img src={planImg} alt='process-img' className='img-fluid' />
                                <div className='process-box process-bg-1'>
                                    <h4>Planning</h4>
                                    <p>understanding business goals, audience & strategy</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <div className='process-card'>
                                <img src={designImg} alt='process-img' className='img-fluid' />
                                <div className='process-box process-bg'>
                                    <h4>Planning</h4>
                                    <p>understanding business goals, audience & strategy</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <div className='process-card'>
                                <img src={devImg} alt='process-img' className='img-fluid' />
                                <div className='process-box process-bg-1'>
                                    <h4>Planning</h4>
                                    <p>understanding business goals, audience & strategy</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <div className='process-card'>
                                <img src={deployImg} alt='process-img' className='img-fluid' />
                                <div className='process-box process-bg'>
                                    <h4>Planning</h4>
                                    <p>understanding business goals, audience & strategy</p>
                                </div>
                            </div>
                        </Col>
                    </Row>







                </Container>

            </section>
        </>
    )
}

export default Pricing