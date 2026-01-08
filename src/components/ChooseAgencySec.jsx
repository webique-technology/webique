import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import lightMan from "../assets/images/light-man.svg"
import laptopMan from "../assets/images/laptop-man.svg"
import CountUp from 'react-countup';


const woAgencyCard = [
    {
        src: lightMan,
        title: "End-to-End Web Solutions That Deliver  Results",
        desc: "We design conversion-focused UI/UX and build fast, secure, and scalable websites — from WordPress to custom React — backed by reliable maintenance and ongoing support.",
    },
    {
        src: laptopMan,
        title: "Transparent Pricing with Local Understanding",
        desc: "We offer affordable, no-hidden-cost solutions tailored to your budget, combining local business insight with global-standard design and development practices.",
    },
]

const AgencyCounter = [
    {
        id: 1,
        no: 500,
        title: "Satisfied Clients"
    },
    {
        id: 2,
        no: 150,
        title: "Project Completed",
    },
    {
        id: 3,
        no: 5,
        title: "Years Completed",
    },
]

const ChooseAgencySec = () => {
    return (
        <>
            <section className='why-choose-us section-padding'>
                <Container className='d-flex flex-column row-gap-4 row-gap-lg-5'>
                    {/* row section for desk */}
                    <Row className='row-gap-4 d-none d-sm-flex'>
                        <Col xs={12} lg={4} className='wo-centent'>
                            <div className='d-flex sub-title'>
                                <p className='d-flex align-items-center gap-3 mb-2'>Why Choose Us <span className='title-line'></span></p>
                            </div>
                            <h2>
                                Why Our Agency
                            </h2>
                            <p className='mb-0 mb-lg-3'>
                                we don’t just build websites — we build digital experiences that convert visitors into customers. Our approach combines strategic design, modern technology, and long-term support to deliver real business value.
                            </p>
                        </Col>
                        {woAgencyCard.map((value, i) => {
                            return (
                                <Col sm={6} md={6} lg={4} key={i}>
                                    <div key={i} className='wo-agency-card'>
                                        <img src={value.src} alt={value.title} />
                                        <h3>{value.title}</h3>
                                        <p className=''>{value.desc}</p>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    {/* grid section for tab - mobile */}
                    <div className='wo-card-grid d-flex d-sm-none'>
                        <div className='wo-centent'>
                            <div className='d-flex sub-title'>
                                <p className='d-flex align-items-center gap-3 mb-2'>Why Choose Us <span className='title-line'></span></p>
                            </div>
                            <h2>
                                Why Our Agency
                            </h2>
                            <p className='mb-0 mb-lg-3'>
                                we don’t just build websites — we build digital experiences that convert visitors into customers. Our approach combines strategic design, modern technology, and long-term support to deliver real business value.
                            </p>
                        </div>
                        <div className="wo-card-slide">
                            {woAgencyCard.map((value, i) => {
                                return (
                                    <div sm={6} md={6} lg={4} key={i} className='slide-card'>
                                        <div key={i} className='wo-agency-card'>
                                            <img src={value.src} alt={value.title} />
                                            <h3>{value.title}</h3>
                                            <p className=''>{value.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* counter */}
                    <Row className='p-2 mx-1 mx-md-0 count-row'>
                        <Col xs={12} sm={6} md={{ order: 1, span: 3 }} lg={3} className='p-0 strok-box'>
                            <div className='strok-text'>
                                <h2 className='text-uppercase text-center text-md-start'>Fun Facts</h2>
                            </div>
                        </Col>
                        {AgencyCounter.map(({ no, title, id }) => {
                            return (
                                <Col xs={12} sm={6} md={3} lg={3} key={id} className='wha-col'>
                                    <div className="count-card text-center">
                                        <h2 className='mb-1'>
                                            <CountUp start={0} end={no} duration={2} separator="" />+
                                        </h2>
                                        <p className='m-0'>{title}</p>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ChooseAgencySec;
