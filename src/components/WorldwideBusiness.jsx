import React, { useLayoutEffect, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import gsap from "gsap";

import "../assets/scss/chormeGrid.scss"

import wellnessLogo from "../assets/images/wellness-logo.svg";
import unicornsLogo from "../assets/images/unicorns-logo.svg";
import ktLogo from "../assets/images/kt-logo.svg";
import mangalamLogo from "../assets/images/mangalam-logo.svg";
import tockenLogo from "../assets/images/tocken-logo.svg";

const businessLogo = [
    {
        image: wellnessLogo,
        borderColor: '#4F46E5',
        gradient: 'linear-gradient(145deg, #4F46E5, #000)',
    },
    {
        image: unicornsLogo,
        borderColor: '#10B981',
        gradient: 'linear-gradient(210deg, #10B981, #000)',
    },
    {
        image: ktLogo,
        borderColor: '#F59E0B',
        gradient: 'linear-gradient(165deg, #F59E0B, #000)',
    },
    {
        image: tockenLogo,
        borderColor: '#EF4444',
        gradient: 'linear-gradient(195deg, #EF4444, #000)',
    },
    {
        image: mangalamLogo,
        borderColor: '#8B5CF6',
        gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
    },
    {
        image: unicornsLogo,
        borderColor: '#06B6D4',
        gradient: 'linear-gradient(135deg, #06B6D4, #000)',
    },
    {
        image: wellnessLogo,
        borderColor: '#4F46E5',
        gradient: 'linear-gradient(145deg, #4F46E5, #000)',
    },
    {
        image: unicornsLogo,
        borderColor: '#10B981',
        gradient: 'linear-gradient(210deg, #10B981, #000)',
    },
    {
        image: ktLogo,
        borderColor: '#F59E0B',
        gradient: 'linear-gradient(165deg, #F59E0B, #000)',
    },
    {
        image: tockenLogo,
        borderColor: '#EF4444',
        gradient: 'linear-gradient(195deg, #EF4444, #000)',
    },
    {
        image: mangalamLogo,
        borderColor: '#8B5CF6',
        gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
    },
    {
        image: unicornsLogo,
        borderColor: '#06B6D4',
        gradient: 'linear-gradient(135deg, #06B6D4, #000)',
    },
];

const WorldwideBusiness = ({ items }) => {
    const sectionRef = useRef(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);

    const data = items?.length ? items : businessLogo;

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');

        const rect = el.getBoundingClientRect();
        setX.current(rect.width / 2);
        setY.current(rect.height / 2);
    }, []);

    const handleMove = (e) => {
        const rect = sectionRef.current.getBoundingClientRect();
        setX.current(e.clientX - rect.left);
        setY.current(e.clientY - rect.top);

        gsap.to(fadeRef.current, { opacity: 1, duration: 0.2 });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.3 });
    };

    return (
        <section
            ref={sectionRef}
            className="worldwide-business section-padding"
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
        >
            {/* FULL WIDTH CHROME LAYERS */}
            <div className="chroma-grid-bg" />
            <div className="chroma-fade" ref={fadeRef} />

            <Container>
                <div className="title-count title-light text-center mb-5">
                    <h2>
                        Trusted by Businesses <br />
                        <span className="fst-italic">Worldwide</span>
                    </h2>
                    <p>
                        We collaborate with companies that value thoughtful design,
                        <br />
                        dependable development, and measurable digital growth.
                    </p>
                </div>

                <Row className="row-gap-4">
                    {data.map((c, i) => (
                        <Col key={i} xs={6} sm={4} md={4} lg={3} xl={2} className="chroma-card">
                            <div
                                className="chroma-img-wrapper"
                                style={{
                                    '--card-border': c.borderColor,
                                    '--card-gradient': c.gradient,
                                }}
                            >
                                <img src={c.image} alt="" />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default WorldwideBusiness;


{/* <Row className="row-gap-4">
    {businessLogo.map((logo, i) => (
        <Col sm={6} md={4} lg={3} xl={2} key={i}>
            <div className="business-logo">
                <img src={logo} alt="" className="img-fluid" />
            </div>
        </Col>
    ))}
</Row> */}

// import React, { useEffect, useRef } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import gsap from "gsap";

// import "../assets/scss/chormeGrid.scss"

// import wellnessLogo from "../assets/images/wellness-logo.svg";
// import unicornsLogo from "../assets/images/unicorns-logo.svg";
// import ktLogo from "../assets/images/kt-logo.svg";
// import mangalamLogo from "../assets/images/mangalam-logo.svg";
// import tockenLogo from "../assets/images/tocken-logo.svg";

// const businessLogo = [
//     { image: wellnessLogo, borderColor: "#fff", gradient: "linear-gradient(145deg,#4F46E5,#000)" },
//     { image: unicornsLogo, borderColor: "#fff", gradient: "linear-gradient(210deg,#10B981,#000)" },
//     { image: ktLogo, borderColor: "#fff", gradient: "linear-gradient(165deg,#F59E0B,#000)" },
//     { image: tockenLogo, borderColor: "#fff", gradient: "linear-gradient(195deg,#EF4444,#000)" },
//     { image: mangalamLogo, borderColor: "#fff", gradient: "linear-gradient(225deg,#8B5CF6,#000)" },
//     { image: unicornsLogo, borderColor: "#fff", gradient: "linear-gradient(135deg,#06B6D4,#000)" },
//     { image: wellnessLogo, borderColor: "#fff", gradient: "linear-gradient(145deg,#4F46E5,#000)" },
//     { image: unicornsLogo, borderColor: "#fff", gradient: "linear-gradient(210deg,#10B981,#000)" },
//     { image: ktLogo, borderColor: "#fff", gradient: "linear-gradient(165deg,#F59E0B,#000)" },
//     { image: tockenLogo, borderColor: "#fff", gradient: "linear-gradient(195deg,#EF4444,#000)" },
//     { image: mangalamLogo, borderColor: "#fff", gradient: "linear-gradient(225deg,#8B5CF6,#000)" },
//     { image: unicornsLogo, borderColor: "#fff", gradient: "linear-gradient(135deg,#06B6D4,#000)" },
// ];

// const WorldwideBusiness = ({ items }) => {
//     const rootRef = useRef(null);
//     const fadeRef = useRef(null);
//     const pos = useRef({ x: 0, y: 0 });
//     const setX = useRef(null);
//     const setY = useRef(null);

//     const data = items?.length ? items : businessLogo;

//     useEffect(() => {
//         const el = rootRef.current;
//         if (!el) return;

//         setX.current = gsap.quickSetter(el, "--x", "px");
//         setY.current = gsap.quickSetter(el, "--y", "px");

//         const rect = el.getBoundingClientRect();
//         pos.current = { x: rect.width / 2, y: rect.height / 2 };

//         setX.current(pos.current.x);
//         setY.current(pos.current.y);
//     }, []);


//     const moveTo = (x, y) => {
//         gsap.to(pos.current, {
//             x,
//             y,
//             duration: 0.45,
//             ease: "power3.out",
//             onUpdate: () => {
//                 setX.current(pos.current.x);
//                 setY.current(pos.current.y);
//             },
//             overwrite: true,
//         });
//     };

//     const handleMove = (e) => {
//         const rect = rootRef.current.getBoundingClientRect();
//         moveTo(e.clientX - rect.left, e.clientY - rect.top);

//         gsap.to(fadeRef.current, { opacity: 0, duration: 0.25 });
//     };

//     const handleLeave = () => {
//         gsap.to(fadeRef.current, { opacity: 1, duration: 0.6 });
//     };

//     const handleCardMove = (e) => {
//         const card = e.currentTarget;
//         const rect = card.getBoundingClientRect();

//         card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
//         card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
//     };

//     return (
//         <section className="worldwide-business section-padding">
//             <Container>
//                 <div className="title-count title-light text-center mb-5">
//                     <h2>
//                         Trusted by Businesses <br />
//                         <span className="fst-italic">Worldwide</span>
//                     </h2>
//                     <p>
//                         We collaborate with companies that value thoughtful design,
//                         <br />
//                         dependable development, and measurable digital growth.
//                     </p>
//                 </div>

//                 <Row
//                     ref={rootRef}
//                     className="chroma-grid row-gap-4"
//                     onPointerMove={handleMove}
//                     onPointerLeave={handleLeave}
//                 >
//                     {data.map((c, i) => (
//                         <Col
//                             xs={6}
//                             md={4}
//                             lg={3}
//                             xl={2}
//                             key={i}
//                             className="chroma-card"
//                             onMouseMove={handleCardMove}
//                             style={{
//                                 "--card-border": c.borderColor,
//                                 "--card-gradient": c.gradient,
//                             }}
//                         >
//                             <div className="chroma-img-wrapper">
//                                 <img src={c.image} alt="" className="img-fluid"/>
//                             </div>
//                         </Col>
//                     ))}

//                     <div className="chroma-overlay" />
//                     <div ref={fadeRef} className="chroma-fade" />
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default WorldwideBusiness;
