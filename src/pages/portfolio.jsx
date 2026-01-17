import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import "../style/portfolio.scss"

const Portfolio = () => {
    return (
        <>
            <section className='section-padding portfolio-page'>
                <Container>
                    <div className="title-content title-gap align-items-center mb-4">
                        <h2 className="text-center">Our Work Philosophy</h2>
                        <p className="text-start text-md-center">
                            We believe great digital outcomes are achieved through a disciplined approach, strategic focus, and flawless <br /> execution. These three principles guide every project we deliver.
                        </p>
                    </div>
                    <div className="portfolio-grid-container">
                        <Row>
                            <Col xs={12} sm={6} md={6} lg={4}>
                                
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4}>
                                
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={4}>
                                
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Portfolio;
