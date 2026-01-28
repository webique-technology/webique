import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { AnimatedContent, BlurText } from '../components/shared/TextAnimation';
import useIsDesktop from "../hooks/useIsDeskstop";

import Accordion from 'react-bootstrap/Accordion';
import '../assets/scss/faq.scss'
import { desc } from 'motion/react-client';

const FaqAnsData = [
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
    {
        quest: "",
        desc: [""],
        ansTitle: "",
        list: [""]
    },
]

const Faq = () => {
    return (
        <>
            <div className='faq-wrapper section-padding'>
                <Container>
                    <div className=''>
                        <BlurText
                            text="Your questions answered"
                            delay={70}
                            animateBy="words"
                            direction="bottom"
                            className="justify-content-center"
                        />
                        {/* <h2>Your questions answered</h2> */}
                        <p className='w-75'>Yes. We don’t believe in one-size-fits-all pricing. Our website packages are fully customizable based on your business goals, features required, and budget.</p>
                    </div>
                    <Row>
                        <Accordion className="custom-accordion" defaultActiveKey="0" flush >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What types of websites do you design?</Accordion.Header>
                                <Accordion.Body>
                                    Yes. We don’t believe in one-size-fits-all pricing. Our website packages are fully customizable based on your business goals, features required, and budget.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What types of websites do you design?</Accordion.Header>
                                <Accordion.Body>
                                    <p><b>We design:</b> </p>
                                    <ul>
                                        <li>Business & corporate websites</li>
                                        <li>WordPress websites</li>
                                        <li>Custom (React / modern tech) websites</li>
                                        <li>E-commerce (WooCommerce / Shopify) websites</li>
                                        <li>Landing pages & one-page websites</li>
                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How much does a website cost?</Accordion.Header>
                                <Accordion.Body>
                                    <p><b>Website cost depends on:</b> </p>

                                    <ul>
                                        <li>Number of pages</li>
                                        <li>Design complexity</li>
                                        <li>Features & integrations</li>
                                        <li>Technology used</li>
                                    </ul>
                                    <p>We offer affordable packages for local businesses and startups. Final pricing is shared after understanding your requirements.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Can I start with a basic website and upgrade later?</Accordion.Header>
                                <Accordion.Body>
                                    <p>Absolutely. You can start with a basic website and add features like blog, payment gateway, SEO, or advanced design anytime.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Will my website be mobile-friendly?</Accordion.Header>
                                <Accordion.Body>
                                    <p>Yes. All our websites are 100% responsive, optimized for mobile, tablet, and desktop devices.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Do you provide content and images?</Accordion.Header>
                                <Accordion.Body>
                                    <p><b>Yes. We can help with:</b> </p>
                                    <ul>
                                        <li>Website content writing</li>
                                        <li>Royalty-free images</li>
                                        <li>Basic branding guidance</li>
                                    </ul>
                                    <p>(Advanced branding or professional photos can be added separately.)</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Which platform is better: WordPress or Custom Website?</Accordion.Header>
                                <Accordion.Body>

                                    <ul>
                                        <li><b>WordPress</b> is best for quick launch, blogs, and budget-friendly websites</li>
                                        <li><b>Custom websites (React / modern tech)</b> are ideal for performance, scalability, and unique UI</li>
                                    </ul>
                                    <p>We recommend the best option based on your business needs.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Do you provide SEO-friendly websites?</Accordion.Header>
                                <Accordion.Body>
                                    <p><b>Yes. We build websites with:</b> </p>

                                    <ul>
                                        <li>SEO-friendly structure</li>
                                        <li>Fast loading speed</li>
                                        <li>Clean code</li>
                                        <li>Basic on-page SEO setup</li>

                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Will I be able to manage the website myself?</Accordion.Header>
                                <Accordion.Body>
                                    <p>Yes. For WordPress websites, you can easily manage content. We also provide basic training or guidance if needed.
                                    </p>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What types of websites do you design?</Accordion.Header>
                                <Accordion.Body>
                                    <p><b>We design:</b> </p>
                                    <ul>
                                        <li>Business & corporate websites</li>
                                        <li>WordPress websites</li>
                                        <li>Custom (React / modern tech) websites</li>
                                        <li>E-commerce (WooCommerce / Shopify) websites</li>
                                        <li>Landing pages & one-page websites</li>
                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What types of websites do you design?</Accordion.Header>
                                <Accordion.Body>
                                    <p><b>We design:</b> </p>
                                    <ul>
                                        <li>Business & corporate websites</li>
                                        <li>WordPress websites</li>
                                        <li>Custom (React / modern tech) websites</li>
                                        <li>E-commerce (WooCommerce / Shopify) websites</li>
                                        <li>Landing pages & one-page websites</li>
                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What types of websites do you design?</Accordion.Header>
                                <Accordion.Body>
                                    <p><b>We design:</b> </p>
                                    <ul>
                                        <li>Business & corporate websites</li>
                                        <li>WordPress websites</li>
                                        <li>Custom (React / modern tech) websites</li>
                                        <li>E-commerce (WooCommerce / Shopify) websites</li>
                                        <li>Landing pages & one-page websites</li>
                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What types of websites do you design?</Accordion.Header>
                                <Accordion.Body>
                                    <p><b>We design:</b> </p>
                                    <ul>
                                        <li>Business & corporate websites</li>
                                        <li>WordPress websites</li>
                                        <li>Custom (React / modern tech) websites</li>
                                        <li>E-commerce (WooCommerce / Shopify) websites</li>
                                        <li>Landing pages & one-page websites</li>
                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What types of websites do you design?</Accordion.Header>
                                <Accordion.Body>
                                    <p><b>We design:</b> </p>
                                    <ul>
                                        <li>Business & corporate websites</li>
                                        <li>WordPress websites</li>
                                        <li>Custom (React / modern tech) websites</li>
                                        <li>E-commerce (WooCommerce / Shopify) websites</li>
                                        <li>Landing pages & one-page websites</li>
                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What types of websites do you design?</Accordion.Header>
                                <Accordion.Body>
                                    <p><b>We design:</b> </p>
                                    <ul>
                                        <li>Business & corporate websites</li>
                                        <li>WordPress websites</li>
                                        <li>Custom (React / modern tech) websites</li>
                                        <li>E-commerce (WooCommerce / Shopify) websites</li>
                                        <li>Landing pages & one-page websites</li>
                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What types of websites do you design?</Accordion.Header>
                                <Accordion.Body>
                                    <p><b>We design:</b> </p>
                                    <ul>
                                        <li>Business & corporate websites</li>
                                        <li>WordPress websites</li>
                                        <li>Custom (React / modern tech) websites</li>
                                        <li>E-commerce (WooCommerce / Shopify) websites</li>
                                        <li>Landing pages & one-page websites</li>
                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>



                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Faq