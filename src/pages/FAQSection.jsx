
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/scss/faq.scss'
import FAQAccordionComp from '../components/shared/FAQAccordionComp';
const FAQSection = () => {


 



    const faqData = [
        {
            title: "Do you offer customized website packages?",
            para: "Yes. We don’t believe in one-size-fits-all pricing. Our website packages are fully customizable based on your business goals, features required, and budget.",
            listTitle: "",
            lists: [],
            image: ""
        },
        {
            title: "What types of websites do you design?",
            para: "",
            listTitle: "We design:",
            lists: [
                "Business & corporate websites",
                "WordPress websites",
                "Custom (React / modern tech) websites",
                "E-commerce (WooCommerce / Shopify) websites",
                "Landing pages & one-page websites",
            ],
            image: ""
        },
        {
            title: "How much does a website cost?",
            para: "We offer affordable packages for local businesses and startups. Final pricing is shared after understanding your requirements.",
            listTitle: "Website cost depends on:",
            lists: [
                "Number of pages",
                "Design complexity",
                "Features & integrations",
                "Technology used",
            ],
            image: ""
        },
        {
            title: "Can I start with a basic website and upgrade later?",
            para:  "Absolutely. You can start with a basic website and add features like blog, payment gateway, SEO, or advanced design anytime.",
            listTitle: "",
            lists: [],
            image: ""
        },
        {
            title: "Will my website be mobile-friendly?",
            para: "Yes. All our websites are 100% responsive, optimized for mobile, tablet, and desktop devices.",
            listTitle: "",
            lists: [],
            image: ""
        },
        {
            title: "Do you provide content and images?",
            para: "(Advanced branding or professional photos can be added separately.)",
            listTitle: "Yes. We can help with:",
            lists: [
                "Website content writing",
                "Royalty-free images",
                "Basic branding guidance",
            ],
            image: ""
        },

        {
            title: "Which platform is better: WordPress or Custom Website?",
            para: "We recommend the best option based on your business needs.",
            listTitle: "",
            lists: [
                "WordPress is best for quick launch, blogs, and budget-friendly websites",
                "Custom websites (React / modern tech) are ideal for performance, scalability, and unique UI",
            ],
            image: ""
        },
        {
            title: "Do you provide SEO-friendly websites?",
            para: "",
            listTitle: "",
            lists: [
                "SEO-friendly structure",
                "Fast loading speed",
                "Clean code",
                "Basic on-page SEO setup",
            ],
            image: ""
        },
        {
            title: "Will I be able to manage the website myself?",
            para: "Yes. For WordPress websites, you can easily manage content. We also provide basic training or guidance if needed.",
            listTitle: "",
            lists: [],
            image: ""
        },
        {
            title: "Do you provide website maintenance and support?",
            para: "We offer monthly and yearly maintenance plans.",
            listTitle: "",
            lists: ["Updates", "Security", "Backup", "Technical support"],
            image: ""
        },
        
        {
            title: "How long does it take to build a website?",
            para: "Timeline is shared clearly before starting the project.",
            listTitle: "",
            lists: [
                "Basic website: 5–7 working days",
                "Business website: 7–15 working days",
                "Custom or e-commerce website: Depends on features",
            ],
            image: ""
        },
        {
            title: "Do you work with local businesses?",
            para: "Yes. We specialize in helping local businesses build a strong online presence with affordable and effective solutions.",
            listTitle: "",
            lists: [],
            image: ""
        },
        {
            title: "Can you redesign my existing website?",
            para: "Yes. We can redesign, optimize, or upgrade your existing website to a modern and professional look.",
            listTitle: "",
            lists: [],
            image: ""
        },
        {
            title: "Is hosting and domain included?",
            para: "Hosting and domain are optional.",
            listTitle: "",
            lists: [
                "Help you purchase them",
                "Or work with your existing hosting",
            ],
            image: ""
        },
        {
            title: "How do we get started?",
            para: "Simply contact us via call, WhatsApp, or email. We understand your requirements, suggest the best solution, and start the process.",
            listTitle: "",
            lists: [],
            image: ""
        },
    ]

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
                            <FAQAccordionComp data={faqData} showImage={false}/>

                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default FAQSection;
