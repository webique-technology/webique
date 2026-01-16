
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/scss/faq.scss'
import FAQAccordionComp from '../components/shared/FAQAccordionComp';
const FAQSection = () => {

    const faqData = [
        {
            question: "Do you offer customized website packages?",
            paragraph:
                "Yes. We don’t believe in one-size-fits-all pricing. Our website packages are fully customizable based on your business goals, features required, and budget.",
        },
        {
            question: "What types of websites do you design?",
            listTitle: "We design:",
            list: [
                "Business & corporate websites",
                "WordPress websites",
                "Custom (React / modern tech) websites",
                "E-commerce (WooCommerce / Shopify) websites",
                "Landing pages & one-page websites",
            ],
        },
        {
            question: "How much does a website cost?",
            listTitle: "Website cost depends on:",
            list: [
                "Number of pages",
                "Design complexity",
                "Features & integrations",
                "Technology used",
            ],
            paragraph:
                "We offer affordable packages for local businesses and startups. Final pricing is shared after understanding your requirements.",
        },
        {
            question: "Can I start with a basic website and upgrade later?",
            paragraph:
                "Absolutely. You can start with a basic website and add features like blog, payment gateway, SEO, or advanced design anytime.",
        },
        {
            question: "Will my website be mobile-friendly?",
            paragraph:
                "Yes. All our websites are 100% responsive, optimized for mobile, tablet, and desktop devices.",
        },
        {
            question: "Do you provide content and images?",
            listTitle: "Yes. We can help with:",
            list: [
                "Website content writing",
                "Royalty-free images",
                "Basic branding guidance",
            ],
            paragraph:
                "(Advanced branding or professional photos can be added separately.)",
        },
        {
            question: "Which platform is better: WordPress or Custom Website?",
            list: [
                "WordPress is best for quick launch, blogs, and budget-friendly websites",
                "Custom websites (React / modern tech) are ideal for performance, scalability, and unique UI",
            ],
            paragraph:
                "We recommend the best option based on your business needs.",
        },
        {
            question: "Do you provide SEO-friendly websites?",
            list: [
                "SEO-friendly structure",
                "Fast loading speed",
                "Clean code",
                "Basic on-page SEO setup",
            ],
        },
        {
            question: "Will I be able to manage the website myself?",
            paragraph:
                "Yes. For WordPress websites, you can easily manage content. We also provide basic training or guidance if needed.",
        },
        {
            question: "Do you provide website maintenance and support?",
            list: ["Updates", "Security", "Backup", "Technical support"],
            paragraph:
                "We offer monthly and yearly maintenance plans.",
        },
        {
            question: "How long does it take to build a website?",
            list: [
                "Basic website: 5–7 working days",
                "Business website: 7–15 working days",
                "Custom or e-commerce website: Depends on features",
            ],
            paragraph:
                "Timeline is shared clearly before starting the project.",
        },
        {
            question: "Do you work with local businesses?",
            paragraph:
                "Yes. We specialize in helping local businesses build a strong online presence with affordable and effective solutions.",
        },
        {
            question: "Can you redesign my existing website?",
            paragraph:
                "Yes. We can redesign, optimize, or upgrade your existing website to a modern and professional look.",
        },
        {
            question: "Is hosting and domain included?",
            list: [
                "Help you purchase them",
                "Or work with your existing hosting",
            ],
            paragraph:
                "Hosting and domain are optional.",
        },
        {
            question: "How do we get started?",
            paragraph:
                "Simply contact us via call, WhatsApp, or email. We understand your requirements, suggest the best solution, and start the process.",
        },
    ];

    return (
        <section className="faq-section section-padding">
             <div className='faq-wrapper'>
            <Container>
                <Row className='text-center justify-content-center title-gap align-items-center'>
                    <h2>Your questions answered</h2>
                    <p className='w-75 mb-5'>Yes. We don’t believe in one-size-fits-all pricing. Our website packages are fully customizable based on your business goals, features required, and budget.</p>
                </Row>
                <Row className='align-items-center justify-content-center'>
                <Col lg={10}>
                <FAQAccordionComp data={faqData} />
                </Col>
                </Row>
            </Container>
            </div>
        </section>
    );
};

export default FAQSection;
