import React, { useState, useEffect } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import phoneIcon from "../assets/images/phone-footer.svg"
import arrowOne from "../assets/images/arrow-one.svg";
import webiqueLogo from "../assets/images/webique-logo.svg";
import "../style/Navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
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
                <Col sm={3} className="d-none d-sm-flex justify-content-end align-items-center top-bar-link">
                    <Link className="m-0 me-4" to='/faq'>Faq's</Link>
                    {/* <Link className="m-0 me-4" to={"#"}>Blog</Link> */}
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
const location = useLocation();
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

            <Nav className="">
                <div className="nav-container w-100">
                    <Container fluid="xxl" className="py-3">
                        <div className="d-flex align-items-center justify-content-between">
                            {/* nav logo */}
                            <div>
                                <Link to={"/"}>
                                    <img src={webiqueLogo} alt="Webique" className="img-fluid nav-img" />
                                </Link>
                            </div>

                            {/* DESKTOP NAV */}
                         <div className="d-none d-lg-flex justify-content-center">
  <ul className="navbar-ul">
    {navLinks.map((item, i) => {
      const isDropdownActive =
        item.dropdown.length > 0 &&
        item.dropdown.some(
          sub => location.pathname === `/${sub.dropLink}`
        );

      return (
        <li
          key={i}
          className={`nav-item ${isDropdownActive ? "active" : ""}`}
        >
          {/* 🔹 NORMAL LINKS */}
          {item.dropdown.length === 0 ? (
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `d-flex align-items-center ${isActive ? "active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ) : (
            /* 🔹 SERVICES (NO NavLink) */
            <button
              type="button"
              className={`d-flex gap-1 align-items-center nav-span ${
                isDropdownActive ? "active" : ""
              }`}
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === i ? null : i
                )
              }
            >
              {item.name}

              <motion.img
                src={downArrow}
                className="down-arrow-nav"
                alt="Dropdown arrow"
                animate={{
                  rotate: activeDropdown === i ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          )}

          {/* 🔹 DROPDOWN */}
          <AnimatePresence>
            {item.dropdown.length > 0 &&
              activeDropdown === i && (
                <motion.ul
                  className="dropdown-menu show"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {item.dropdown.map((sub, j) => (
                    <li key={j}>
                      <NavLink
                        to={`/${sub.dropLink}`}
                        className={({ isActive }) =>
                          isActive ? "active" : ""
                        }
                        onClick={() =>
                          setActiveDropdown(null)
                        }
                      >
                        {sub.dropName}
                      </NavLink>
                    </li>
                  ))}
                </motion.ul>
              )}
          </AnimatePresence>
        </li>
      );
    })}
  </ul>
</div>


                            {/* RIGHT ACTIONS */}
                            <div className="d-flex justify-content-end gap-3">
                                <div className="d-none d-lg-block">
                                    <Link to={"tel:+919860188007"} className="nav-btn">
                                        <span>Call Us</span>
                                        <img src={phoneIcon} alt="contact" />
                                    </Link>
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
                </div>
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
