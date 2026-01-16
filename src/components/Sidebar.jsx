import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { CloseButton } from "./shared/gsapAnimation";

import downArrow from "../assets/images/caret-down-bold.svg"
import webiqueLogoWhite from "../assets/images/webique-logo-white.svg";
import phone from "../assets/images/call.svg";
import mail from "../assets/images/mail.svg";
import location from "../assets/images/location.svg";
import useIsDesktop from "../hooks/useIsDeskstop";

/* ---------------- animation varients ---------------- */

const backdropVariants = {
    hidden: {
        x: "100%",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 0.9,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    exit: {
        x: "100%",
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const sidebarVariants = {
    hidden: {
        x: "100%",
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.5,
            // delay: , 
            ease: "easeInOut",
        },
    },
    exit: {
        x: "100%",
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

/* ---------------- conact card ---------------- */

const ContactCard = ({ img, title, value, type, link }) => {
    const href =
        type === "phone"
            ? `tel:+91${value}`
            : type === "email"
                ? `mailto:${value}`
                : link;

    return (
        <div className="contact-box d-flex align-items-center gap-4">
            <img src={img} alt={title} />
            <div>
                <p>{title}</p>
                <a
                    href={href}
                    target={type === "address" ? "_blank" : undefined}
                    rel={type === "address" ? "noopener noreferrer" : undefined}
                >
                    {value}
                </a>
            </div>
        </div>
    );
};

/* ---------------- sidebar ---------------- */

const Sidebar = ({ open, onClose, linkItems }) => {
    const isDesktop = useIsDesktop();
    const [activeDropdown, setActiveDropdown] = useState(null);

    const servicesItem = linkItems.find(
        (item) => item.name === "Services"
    );

    const handleLinkClick = () => {
        setActiveDropdown(null);
        onClose();
    };


    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* backdrop run first */}
                    <motion.div
                        className="sidebar-backdrop"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    {/* sidebar runs after backdrop */}
                    <motion.div
                        className="sidebar-count"
                        variants={sidebarVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Row className="row-gap-3 row-gap-md-4">
                            {/* logo */}
                            <Col xs={8}>
                                <img src={webiqueLogoWhite} alt="Webique" className="img-fluid" />
                            </Col>

                            <Col xs={4} className="d-flex align-items-center justify-content-end">
                                <div className="desk-ham" onClick={onClose}>
                                    <CloseButton />
                                </div>
                            </Col>

                            <Col xs={12} className="dashed-border">
                                <p className="d-none d-lg-block">
                                    We create custom websites and digital platforms that help businesses establish, scale, and succeed online.
                                </p>
                            </Col>

                            {/* services */}
                            <Col xs={12} className="dashed-border pb-4">
                                <ul className="navbar-ul d-flex flex-column gap-1 p-0 m-0">
                                    {/* for mobile view to show all links */}
                                    {!isDesktop && (
                                        linkItems.map((item, i) => {
                                            return (
                                                <li key={i} className="nav-item">
                                                    <Link
                                                        to={item.link}
                                                        className={item.dropdown.length === 0 ? "" : "d-flex justify-content-between"}
                                                        onClick={(e) => {
                                                            if (item.dropdown.length) {
                                                                e.preventDefault();
                                                                setActiveDropdown(activeDropdown === i ? null : i);
                                                            } else {
                                                                handleLinkClick();
                                                            }
                                                        }}

                                                    >
                                                        {item.name}
                                                        {item.dropdown.length > 0 && (
                                                            <motion.img
                                                                src={downArrow}
                                                                className="down-arrow"
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
                                                        {item.dropdown.length > 0 && activeDropdown === i && (
                                                            <motion.ul
                                                                className="acoordian-nav-list"
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
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
                                                                                onClick={handleLinkClick}
                                                                            >
                                                                                {sub.dropName}
                                                                            </Link>
                                                                        </motion.div>
                                                                    </li>
                                                                ))}
                                                            </motion.ul>
                                                        )}
                                                    </AnimatePresence>
                                                </li >
                                            )
                                        })
                                    )}
                                    <li className="d-block d-sm-none"><Link to={"about"}>About Us</Link></li>
                                    <li className="d-block d-sm-none"><Link to={"career"}>Career</Link></li>
                                    {/* for desltop view to show only services sub links */}
                                    <li className="d-none d-lg-block">
                                        <Link
                                            to={servicesItem.link}
                                            onClick={(e) => {
                                                if (!isDesktop) {
                                                    e.preventDefault();
                                                    isDropdown(
                                                        activeDropdown === 0 ? null : 0
                                                    );
                                                }
                                            }}
                                        >
                                        </Link>
                                        {/* desltop */}
                                        {isDesktop && (
                                            <ul className="sidebar-sub-link">
                                                {servicesItem.dropdown.map((sub, i) => (
                                                    <li key={i}>
                                                        <Link
                                                            to={`/${sub.dropLink}`}
                                                            onClick={handleLinkClick}
                                                        >
                                                            {sub.dropName}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            </Col>

                            {/* contact links */}
                            <Col xs={12} className="d-flex flex-column gap-3 dashed-border pb-5">
                                {/* <h4>Contact</h4> */}

                                <ContactCard
                                    img={phone}
                                    title="Phone"
                                    value="9860188007"
                                    type="phone"
                                />

                                <ContactCard
                                    img={location}
                                    title="Address"
                                    value="G-110, Atlanta Shoppers, Pathardi road, Pathardi Phata, Nashik-422010"
                                    type="address"
                                    link="https://maps.app.goo.gl/iNPJVhtMfUWuNWHz8"
                                />

                                <ContactCard
                                    img={mail}
                                    title="Email"
                                    value="contact@webique.in"
                                    type="email"
                                />
                            </Col>
                        </Row>
                    </motion.div>
                </>
            )
            }
        </AnimatePresence >
    );
};

export default Sidebar;
