import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../style/contact.scss"

import { AnimatedContent, BlurText } from '../components/shared/TextAnimation';
import useIsDesktop from "../hooks/useIsDeskstop"
// images
import address from "../assets/images/address.png"
import mail from "../assets/images/mail.png"
import phone from "../assets/images/phone.png"
import linkArrow from "../assets/images/link-arrow.png"
import insta from "../assets/images/insta-cp.png"
import facebook from "../assets/images/fb-cp.png"
import linkedin from "../assets/images/linkedin-cp.png"
import twitterX from "../assets/images/x-cp.png"
import { span } from "motion/react-client";

// use for text fields
export const TextField = ({
    label,
    type = "text",
    value: controlledValue,
    onChange,
    isInvalid,
    ...props
}) => {
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState("");

    const value = controlledValue ?? internalValue;

    const handleChange = (e) => {
        if (onChange) {
            onChange(e);
        } else {
            setInternalValue(e.target.value);
        }
    };

    return (
        <div
            className={`float-field ${focused || value ? "active" : ""} ${isInvalid ? "is-invalid" : ""}`}
            onClick={() => setFocused(true)}
        >
            <input
                type={type}
                value={value}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => !value && setFocused(false)}
                {...props}
            />

            <label>{label}</label>
            <fieldset>
                <legend>{label}</legend>
            </fieldset>
        </div>
    );
};

// use for text fields
export const TextArea = ({
    label,
    value: controlledValue,
    onChange,
    isInvalid,
    rows = 4,
    ...props
}) => {
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState("");

    const value = controlledValue ?? internalValue;

    const handleChange = (e) => {
        if (onChange) {
            onChange(e);
        } else {
            setInternalValue(e.target.value);
        }
    };

    return (
        <div
            className={`float-field ${focused || value ? "active" : ""} ${isInvalid ? "is-invalid" : ""
                }`}
            onClick={() => setFocused(true)}
        >
            <textarea
                value={value}
                rows={rows}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => !value && setFocused(false)}
                {...props}
            />

            <label>{label}</label>
            {/* <fieldset>
                <legend>{label}</legend>
            </fieldset> */}
        </div>
    );
};

// use for links count
export const ContactLink = ({ linkImg, linkName, link, linkPath }) => {
    let href = "#"; // default

    if (linkPath) {
        href = linkPath;
    } else if (/\S+@\S+\.\S+/.test(link)) {
        // If it's an email
        href = `mailto:${link}`;
    } else if (/^\d+$/.test(link)) {
        // If it's a phone number
        href = `tel:+91${link}`;
    }

    return (
        <div className="cl-count">
            <div className="cl-img">
                <img src={linkImg} alt={linkName} className="" />
            </div>
            <div className="d-flex flex-column align-items-start justify-content-start ps-4">
                <h5 className="mb-1">{linkName}</h5>
                <a href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
                    {link}
                </a>
            </div>
            <div className="circle-btn d-none d-sm-flex">
                <img src={linkArrow} alt="" />
            </div>
        </div>
    );
};

const socialLinkData = [
    {
        src: facebook,
        link: "https://www.facebook.com/share/19Bko6nmR5/?mibextid=qi2Omg",
        alt: "facebook"
    },
    {
        src: insta,
        link: "https://www.instagram.com/webique_tech?igsh=Z2hzNGoya3dtZ2oy",
        alt: "instagram"
    },
    {
        src: linkedin,
        link: "https://www.linkedin.com/company/webiquetech",
        alt: "linkedin"
    },
    {
        src: twitterX,
        link: "www.x.com",
        alt: "twitterX"
    },
]

// main page component
const Contact = () => {
    const isDesktop = useIsDesktop();

    const [activeId, setActiveId] = useState(null);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");
    const [validated, setValidated] = useState(false);


    // ✍️ Handle input
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 🚀 Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setResult("");

        const formData = new FormData();
        formData.append("access_key", "5ff91401-6751-4a1f-bf6c-05084b5e9b9c");

        // Optional but useful
        formData.append("from_name", form.fullName);
        formData.append("replyto", form.email);
        formData.append("subject", form.subject);

        Object.entries(form).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("✅ Message sent successfully!");
                setForm({
                    fullName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
                setErrors({});
            } else {
                setResult("❌ Something went wrong. Please try again.");
            }
        } catch (error) {
            setResult("❌ Network error. Please try later.");
        }

        setLoading(false);
    };

    return (
        <>
            <section className='section-padding contact-section'>
                <Container className="d-flex flex-column row-gap-5 row-gap-md-5">
                    {/* title content  */}
                    <div className="title-content title-gap align-items-center mb-0">
                        <BlurText
                            text="Let’s talk about your journey"
                            delay={70}
                            animateBy="words"
                            direction="bottom"
                            className="justify-content-center"
                        />
                        {/* <h2 className="text-center m-0">Let’s talk about your journey</h2> */}
                        <p className="text-center m-0">
                            We’re here to answer your questions, guide your steps, and help you take control of your money with confidence.
                        </p>
                    </div>
                    {/* contact form and contact links */}
                    <div className="contact-content-container">
                        <Row className="justify-content-between row-gap-5 row-gap-md-5">
                            {/* col for contact form */}
                            <Col xs={{ order: 2, span: 12 }} lg={{ order: 1, span: 6 }}>
                                <AnimatedContent
                                    distance={isDesktop ? -180 : 120}
                                    direction={isDesktop ? "horizontal" : "vertical"}
                                    reverse={false}
                                    duration={0.9}
                                    ease="power3.out"
                                    initialOpacity={0}
                                    animateOpacity
                                    scale={1}
                                    threshold={0.1}
                                    delay={0}
                                >
                                    <div className="contact-form">
                                        <Form onSubmit={handleSubmit}>
                                            <Row className="mb-3 row-gap-2 row-gap-md-4">
                                                {/* full name */}
                                                <Col md={6}>
                                                    <Form.Label className="m-0 d-none">Full Name</Form.Label>
                                                    <TextField
                                                        label="Full name"
                                                        name="fullName"
                                                        onChange={handleChange}
                                                        value={form.fullName}
                                                        required
                                                    />
                                                    {errors.fullName && <span className="error">{errors.fullName}</span>}
                                                </Col>
                                                {/* email */}
                                                <Col md={6}>
                                                    <Form.Label className="m-0 d-none">Email</Form.Label>
                                                    <TextField
                                                        label="Email"
                                                        name="email"
                                                        type="email"
                                                        onChange={handleChange}
                                                        value={form.email}
                                                        required
                                                    />
                                                    {errors.email && <span className="error">{errors.email}</span>}
                                                </Col>
                                                {/* phone number */}
                                                <Col md={6}>
                                                    <Form.Label className="m-0 d-none">Phone number</Form.Label>
                                                    <TextField
                                                        label="Phone number"
                                                        name="phone"
                                                        type="tel"
                                                        onChange={handleChange}
                                                        value={form.phone}
                                                        required

                                                    />
                                                    {errors.phone && <span className="error">{errors.phone}</span>}
                                                </Col>
                                                {/* subject */}
                                                <Col md={6}>
                                                    <Form.Label className="m-0 d-none">Subject</Form.Label>
                                                    <TextField
                                                        label="Subject"
                                                        name="subject"
                                                        onChange={handleChange}
                                                        value={form.subject}
                                                        required

                                                    />
                                                    {errors.phone && <span className="error">{errors.phone}</span>}
                                                </Col>
                                                {/* textarea */}
                                                <Col md={12}>
                                                    <Form.Group className="mb-4">
                                                        <TextArea
                                                            label="Message"
                                                            name="message"
                                                            value={form.message}
                                                            onChange={handleChange}
                                                            isInvalid={!!errors.message}
                                                        />
                                                        {errors.message && <span className="error">{errors.message}</span>}
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            {/* submit button */}
                                            <Button type="submit" className="send-btn">
                                                Submit
                                            </Button>

                                            {/* {result && <p className="result">{result}</p>} */}

                                        </Form>
                                    </div>
                                </AnimatedContent>
                            </Col>
                            {/* col for contact links */}
                            <Col xs={{ order: 1, span: 12 }} lg={{ order: 2, span: 5 }}>
                                <div className="contact-links-count d-flex flex-column row-gap-4">
                                    <Row className="row-gap-4">
                                        {/* Contact Address */}
                                        <Col sm={12}>
                                            <AnimatedContent
                                                distance={180}
                                                direction={isDesktop ? "horizontal" : "vertical"}
                                                reverse={false}
                                                duration={0.7}
                                                ease="power3.out"
                                                initialOpacity={0}
                                                animateOpacity
                                                scale={1}
                                                threshold={0.1}
                                                delay={isDesktop ? 0.2 : 0.1}
                                            // animationBreakpoint={991}
                                            >
                                                <ContactLink
                                                    linkImg={address}
                                                    linkName="Address"
                                                    linkPath="https://maps.app.goo.gl/iNPJVhtMfUWuNWHz8"
                                                    link="G-110, Atlanta Shoppers, Pathardi road, Pathardi Phata, Nashik-422010"
                                                />
                                            </AnimatedContent>
                                        </Col>
                                        {/* Contact Email */}
                                        <Col sm={12} md={6} lg={12}>
                                            <AnimatedContent
                                                distance={180}
                                                direction={isDesktop ? "horizontal" : "vertical"}
                                                reverse={false}
                                                duration={0.8}
                                                ease="power3.out"
                                                initialOpacity={0}
                                                animateOpacity
                                                scale={1}
                                                threshold={0.1}
                                                delay={isDesktop ? 0.4 : 0.2}
                                            // animationBreakpoint={991}
                                            >
                                                <ContactLink
                                                    linkImg={mail}
                                                    linkName="Send us an email"
                                                    linkPath=""
                                                    link="contact@webique.in"
                                                />
                                            </AnimatedContent>
                                        </Col>
                                        {/* Contact Phone Number */}
                                        <Col sm={12} md={6} lg={12}>
                                            <AnimatedContent
                                                distance={180}
                                                direction={isDesktop ? "horizontal" : "vertical"}
                                                reverse={false}
                                                duration={0.9}
                                                ease="power3.out"
                                                initialOpacity={0}
                                                animateOpacity
                                                scale={1}
                                                threshold={0.1}
                                                delay={isDesktop ? 0.6 : 0.2}
                                            // animationBreakpoint={991}
                                            >
                                                <ContactLink
                                                    linkImg={phone}
                                                    linkName="Give us a call"
                                                    linkPath=""
                                                    link="9860188007"
                                                />
                                            </AnimatedContent>
                                        </Col>
                                    </Row>
                                    {/* social links */}
                                    <div className="social-links">
                                        <h4 className="mb-1">Follow us on social media</h4>
                                        <p className="mb-2">Connect with us on your favorite platforms to see
                                            our latest work, company updates, and insights.</p>
                                        <ul className="d-flex gap-3 align-items-center">
                                            {socialLinkData.map((item, i) => {
                                                return (
                                                    <li key={i}>
                                                        <a href={item.link} target="_blank">
                                                            <img src={item.src} alt={item.alt} />
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* map section */}
                    <AnimatedContent
                        distance={180}
                        direction={isDesktop ? "vertical" : "vertical"}
                        reverse={false}
                        duration={0.9}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={0}
                    >
                        <div className="map-conatiner pb-4 pb-md-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4487.666904269915!2d73.7666468!3d19.9537683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd95f5ba76ff57%3A0x44e1830bb9d40a86!2sWebique%20technology!5e1!3m2!1sen!2sin!4v1768369224159!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                className="map"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </AnimatedContent>
                </Container>
            </section>
        </>
    )
}

export default Contact


// faq 
{/* faq & accordian */ }
{/* <div className="faq-container">
    <Row>
        <Col sm={12} md={12} lg={6}>
            <div className="title-content faq-content">
                <h2>
                    Frequently asked questions
                </h2>
                <p className="w-100">Find quick answers to common questions about using
                    Fintiq, security, transfers, savings, and more.</p>
            </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
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
                            <span className="title">{item.title} {item.id}</span>
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
</div> */}