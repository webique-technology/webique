import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { CloseButton } from "./shared/gsapAnimation";
import useIsDesktop from "../hooks/useIsDeskstop";

import downArrow from "../assets/images/caret-down-bold.svg";
import webiqueLogoWhite from "../assets/images/webique-logo-white.svg";
import phone from "../assets/images/call.svg";
import mail from "../assets/images/mail.svg";
import locationImg from "../assets/images/location.svg";

/* ---------------- animation variants ---------------- */

const backdropVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 0.9,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const sidebarVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

/* ---------------- contact card ---------------- */

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
  const location = useLocation();
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
          {/* backdrop */}
          <motion.div
            className="sidebar-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* sidebar */}
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
                <img
                  src={webiqueLogoWhite}
                  alt="Webique"
                  className="img-fluid"
                />
              </Col>

              <Col
                xs={4}
                className="d-flex align-items-center justify-content-end"
              >
                <div className="desk-ham" onClick={onClose}>
                  <CloseButton />
                </div>
              </Col>

              {/* description */}
              <Col xs={12} className="dashed-border">
                <p className="d-none d-lg-block">
                  We create custom websites and digital platforms that help
                  businesses establish, scale, and succeed online.
                </p>
              </Col>

              {/* nav links */}
              <Col xs={12} className="dashed-border pb-4">
                <ul className="navbar-ul d-flex flex-column gap-1 p-0 m-0">

                  {/* MOBILE NAV */}
                  {!isDesktop &&
                    linkItems.map((item, i) => {
                      const isDropdownActive =
                        item.dropdown.length > 0 &&
                        item.dropdown.some(
                          (sub) =>
                            location.pathname === `/${sub.dropLink}`
                        );

                      return (
                        <li
                          key={i}
                          className={`nav-item ${
                            isDropdownActive ? "active" : ""
                          }`}
                        >
                          <NavLink
                            to={item.link}
                            className={({ isActive }) =>
                              item.dropdown.length === 0
                                ? isActive
                                  ? "active"
                                  : ""
                                : "d-flex justify-content-between"
                            }
                            onClick={(e) => {
                              if (item.dropdown.length) {
                                e.preventDefault();
                                setActiveDropdown(
                                  activeDropdown === i ? null : i
                                );
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
                                animate={{
                                  rotate:
                                    activeDropdown === i ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                          </NavLink>

                          <AnimatePresence>
                            {item.dropdown.length > 0 &&
                              activeDropdown === i && (
                                <motion.ul
                                  className="acoordian-nav-list"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{
                                    opacity: 1,
                                    height: "auto",
                                  }}
                                  exit={{ opacity: 0, height: 0 }}
                                >
                                  {item.dropdown.map((sub, j) => (
                                    <li key={j}>
                                      <NavLink
                                        to={`/${sub.dropLink}`}
                                        className={({ isActive }) =>
                                          isActive ? "active" : ""
                                        }
                                        onClick={handleLinkClick}
                                      >
                                        <motion.div
                                          whileHover={{ x: 10 }}
                                        >
                                          {sub.dropName}
                                        </motion.div>
                                      </NavLink>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                          </AnimatePresence>
                        </li>
                      );
                    })}

                  {/* DESKTOP SERVICES ONLY */}
                  {isDesktop && servicesItem && (
                    <li className="d-none d-lg-block">
                      <ul className="sidebar-sub-link">
                        {servicesItem.dropdown.map((sub, i) => (
                          <li key={i}>
                            <NavLink
                              to={`/${sub.dropLink}`}
                              className={({ isActive }) =>
                                isActive ? "active" : ""
                              }
                              onClick={handleLinkClick}
                            >
                              {sub.dropName}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </Col>

              {/* contact */}
              <Col
                xs={12}
                className="d-flex flex-column gap-3 dashed-border pb-5"
              >
                <ContactCard
                  img={phone}
                  title="Phone"
                  value="9860188007"
                  type="phone"
                />

                <ContactCard
                  img={locationImg}
                  title="Address"
                  value="G-110, Atlanta Shoppers, Pathardi road, Nashik-422010"
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
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
