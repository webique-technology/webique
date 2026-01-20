import React, { useState, useEffect } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import arrowOne from "../assets/images/arrow-one.svg";
import webiqueLogo from "../assets/images/webique-logo.svg";
import "../style/Navbar.scss";

import Sidebar from "./Sidebar";
import useIsDesktop from "../hooks/useIsDeskstop";

import downArrow from "../assets/images/caret-down-bold.svg"

/* ---------------- topbar ---------------- */

const TopBar = () => (
    <div className="top-bar d-none d-sm-block">
        <Container fluid="xxl">
            <Row>
                <Col xs={12} sm={9} className="d-flex align-items-center items-center">
                    <p className="m-0">
                        🎨 Custom Website Design & React Development – Let’s Talk
                    </p>
                </Col>
                <Col sm={3} className="d-none d-sm-flex justify-content-end top-bar-link">
                    <Link className="m-0 me-4" to='/faq'>Faqs</Link>
                    <Link className="m-0 me-4" to={"#"}>Blog</Link>
                    <Link className="m-0 me-4" to='/about'>About</Link>
                    <Link className="m-0" to='/careers'>Career</Link>
                </Col>
            </Row>
        </Container>
    </div>
);

/* ---------------- nav links data ---------------- */

const navLinks = [
    { name: "Home", link: "/", dropdown: [] },
    // { name: "About Us", link: "/about", dropdown: [] },
    {
        name: "Services",
        link: "#",
        dropdown: [
            {
                dropName: "WordPress Website",
                dropLink: "wordpress"
            },
            {
                dropName: "Custom Website Development",
                dropLink: "custom-website-development",
            },
            {
                dropName: "E-commerce / WooCommerce",
                dropLink: "e-commerce-woocommerce",
            },
            {
                dropName: "Emailer Template Design",
                dropLink: "emailer-template-design",
            },
            {
                dropName: "Performance, SEO & Lead Enablement",
                dropLink: "performance-seo",
            },
            {
                dropName: "UI/UX Design",
                dropLink: "ui-ux-design"
            },
            {
                dropName: "Security, Maintenance & Support",
                dropLink: "security-maintenance-support",
            },
            {
                dropName: "Branding Support",
                dropLink: "branding-support"
            },
        ],
    },
    { name: "Pricing", link: "/pricing", dropdown: [] },
    { name: "Portfolio", link: "/portfolio", dropdown: [] },
    { name: "Contact", link: "/contact", dropdown: [] },
];

/* ---------------- navbar ---------------- */

const NavigationBar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isDesktop = useIsDesktop()

    /* body scroll lock */
    useEffect(() => {
        const shouldLockScroll = isDesktop
            ? activeDropdown !== null || sidebarOpen
            : sidebarOpen;

        document.body.style.overflow = shouldLockScroll ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [activeDropdown, sidebarOpen, isDesktop]);


    /* keyboard Esc btn click close backdrop and sidebar and dropdown*/
    useEffect(() => {
        const escHandler = (e) => {
            if (e.key === "Escape") {
                setActiveDropdown(null);
                setSidebarOpen(false);
            }
        };
        window.addEventListener("keydown", escHandler);
        return () => window.removeEventListener("keydown", escHandler);
    }, []);

    return (
        <>
            <TopBar />

            <Nav className="py-3">
                <Container fluid="xxl">
                    <div className="d-flex align-items-center justify-content-between">
                        {/* nav logo */}
                        <div>
                            <img src={webiqueLogo} alt="Webique" className="img-fluid nav-img" />
                        </div>

                        {/* DESKTOP NAV */}
                        <div className="d-none d-lg-flex justify-content-center">
                            <ul className="navbar-ul">
                                {navLinks.map((item, i) => (
                                    <li key={i} className="nav-item">
                                        <Link
                                            to={item.link}
                                            className={item.dropdown.length === 0 ? "d-flex align-items-center" : "d-flex gap-1 align-items-center"}
                                            onClick={(e) => {
                                                if (item.dropdown.length) {
                                                    e.preventDefault();
                                                    setActiveDropdown(
                                                        activeDropdown === i ? null : i
                                                    );
                                                }
                                            }}
                                        >
                                            {item.name}
                                            {item.dropdown.length > 0 && (
                                                <motion.img
                                                    src={downArrow}
                                                    className="down-arrow-nav"
                                                    alt="Dropdown arrow"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setActiveDropdown(activeDropdown === i ? null : i);
                                                    }}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                        rotate: activeDropdown === i ? 180 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}
                                        </Link>

                                        <AnimatePresence>
                                            {item.dropdown.length > 0 &&
                                                activeDropdown === i && (
                                                    <motion.ul
                                                        className="dropdown-menu show"
                                                        initial={{ opacity: 0, y: 15 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        transition={{ duration: 0.25 }}
                                                    >
                                                        {item.dropdown.map((sub, j) => (
                                                            <li key={j}>
                                                                <motion.div
                                                                    whileHover={{ x: 10 }}
                                                                    transition={{ type: "spring", stiffness: 300 }}
                                                                >
                                                                    <Link
                                                                        to={`/${sub.dropLink}`}
                                                                        onClick={() =>
                                                                            setActiveDropdown(null)
                                                                        }
                                                                    >
                                                                        {sub.dropName}
                                                                    </Link>
                                                                </motion.div>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT ACTIONS */}
                        <div className="d-flex justify-content-end gap-3">
                            <div className="d-none d-lg-block">
                                <button className="nav-btn">
                                    <span>Contact</span>
                                    <img src={arrowOne} alt="arrow" />
                                </button>
                            </div>

                            <div
                                className="desk-ham"
                                onClick={() => {
                                    setActiveDropdown(null);
                                    setSidebarOpen(true);
                                }}
                            >
                                <div className="desk-ham-bar" />
                                <div className="desk-ham-bar" />
                                <div className="desk-ham-bar" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Nav>

            {/* dropdown backdrop */}
            {isDesktop && (
                activeDropdown !== null && (
                    <div
                        className="nav-backdrop"
                        onClick={() => setActiveDropdown(null)}
                    />
                )
            )}

            {/* sidebar */}
            <Sidebar
                linkItems={navLinks} /* sending links data to sidebar */
                activeDropdown={activeDropdown}
                isDropdown={() => setActiveDropdown(false)} /* sending dropdown function to sidebar */
                open={sidebarOpen} /* sending open function to sidebar */
                onClose={() => setSidebarOpen(false)} /* sending close funtion to sidebar */
            />
        </>
    );
};

export default NavigationBar;

/* nav bar Row and col
<Col xs={6} lg={2}>
    <img src={webiqueLogo} alt="Webique" className="img-fluid" />
</Col>

<Col lg={7} xl={7} xxl={8} className="d-none d-lg-flex justify-content-center">
    <ul className="navbar-ul">
        {navLinks.map((item, i) => (
            <li key={i} className="nav-item">
                <Link
                    to={item.link}
                    onClick={(e) => {
                        if (item.dropdown.length) {
                            e.preventDefault();
                            setActiveDropdown(
                                activeDropdown === i ? null : i
                            );
                        }
                    }}
                >
                    {item.name}
                </Link>

                <AnimatePresence>
                    {item.dropdown.length > 0 &&
                        activeDropdown === i && (
                            <motion.ul
                                className="dropdown-menu show"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.25 }}
                            >
                                {item.dropdown.map((sub, j) => (
                                    <li key={j}>
                                        <motion.div
                                            whileHover={{ x: 10 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Link
                                                to={`/${sub.dropLink}`}
                                                onClick={() =>
                                                    setActiveDropdown(null)
                                                }
                                            >
                                                {sub.dropName}
                                            </Link>
                                        </motion.div>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                </AnimatePresence>
            </li>
        ))}
    </ul>
</Col>

<Col xs={6} lg={3} xl={3} xxl={2} className="d-flex justify-content-end gap-3">
    <div className="d-none d-lg-block">
        <button className="hero-btn">
            <span>Contact</span>
            <img src={arrowOne} alt="arrow" />
        </button>
    </div>

    <div
        className="desk-ham"
        onClick={() => {
            setActiveDropdown(null);
            setSidebarOpen(true);
        }}
    >
        <div className="desk-ham-bar" />
        <div className="desk-ham-bar" />
        <div className="desk-ham-bar" />
    </div>
</Col> */