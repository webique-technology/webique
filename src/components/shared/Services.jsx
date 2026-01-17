
import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../assets/scss/marqueeSlides.scss"
import '../../assets/scss/innerServices.scss'

import wdOne from '../../assets/images/check.svg'

export const ServicesIntro = ({ Data, IntroImage }) => {
    return (
        <>
            <section className='service-intro section-padding'>
                <Container>
                    <Row className='align-items-center justify-content-between d-flex'>
                        <Col md={6} lg={6} xs={12}>
                            <Row className='d-flex gap-2 gap-md-3'>
                                <section className="services-intro">
                                    {Data.map((item) => (
                                        <div className="service-card" key={item.id}>
                                            <Row className='d-flex gap-2 gap-md-5'>
                                                <div className='ui-wrap'>
                                                    <h1>
                                                        <span>{item.highlight}</span> {item.title}
                                                    </h1>

                                                    <h4>{item.subtitle}</h4>
                                                </div>
                                                <div>
                                                    <p>{item.text}</p>
                                                </div>
                                            </Row>
                                        </div>
                                    ))}
                                </section>







                            </Row>
                        </Col>
                        <Col md={5} lg={5} xs={12}>
                            <div className='image-full-inner'>
                                <img src={IntroImage} alt='ui-image' className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



        </>
    )
}


export const WhatWeDeliver = ({ Title, Image, CheckMark, Data }) => {
    return (
        <>
            <section className='what-we-deliver section-padding'>
                <Container>
                    <Row className=' justify-content-between d-flex'>

                        <Col md={5} lg={5} xs={12} className='title-gap'>
                            <h2>{Title}</h2>
                            <div className='image-full-inner d-none d-md-block'>
                                <img src={Image} alt='ui-image' className='img-fluid' />
                            </div>
                        </Col>
                        <Col md={6} lg={6} xs={12}>
                            <ul className="services-list">
                                {Data.map((item) => (
                                    <li key={item.id} className="d-flex gap-2 gap-md-4  py-3 py-md-4 ps-2 ps-md-3  align-items-center">
                                        <span><img src={wdOne} alt='what we deliver' /></span>
                                        <p>{item.title}</p>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>



        </>
    )
}


export const PortfolioSection = ({ Title, Data }) => {
    return (
        <>
            <section className="portfolio-inner section-padding footer-gradient-pb">
                <Container className="title-gap">
                    <Row className="w-100">
                        <h2 className="text-center justify-content-center">{Title}</h2>
                    </Row>

                    <Row className="justify-content-between d-flex">
                        {Data.map((item) => (
                            <Col key={item.id} md={6} lg={6} xs={12}>
                                <div className="portfolio-full-inner">
                                    <img src={item.image} alt="webique-portfolio" />

                                    <div className="portfolio-backgrd">
                                        <h5>{item.title}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>



        </>
    )
}






