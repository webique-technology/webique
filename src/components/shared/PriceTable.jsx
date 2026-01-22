import React, { useState, useRef, useEffect } from "react";
import { Container, Tab, Nav, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import tableCheck from "../../assets/images/table-check.svg";
import tableReject from "../../assets/images/table-reject.svg";
import "../../assets/scss/priceTable.scss";

/* =======================
   JSON DATA
======================= */

const PricingPgaeData = [
  // wordpress website
  {
    pricingType: "cms-website",
    plans: [
      {
        pricingPackName: "Starter Website",
        packPrice: "₹12999",
        planType: "Basic"
      },
      {
        pricingPackName: "Business Website",
        packPrice: "₹24999",
        planType: "Basic Popular"
      },
      {
        pricingPackName: "Enterprise Website",
        packPrice: "₹33999",
        planType: "Advanced"
      },
      {
        pricingPackName: "ECommerce Website",
        packPrice: "₹41999",
        planType: "Premium"
      },
    ],
    features: [
      {
        feature: "Pages Included",
        starter: "Up to 10 Pages",
        business: "Up to 20 Pages",
        enterprise: "Up to 30 Pages",
        ecommerce: "5 Pages + 30 Products"
      },

      {
        feature: "Pages Included",
        starter: "Up to 10 Pages",
        business: "Up to 20 Pages",
        enterprise: "Up to 30 Pages",
        ecommerce: "5 Pages + 30 Products"
      },
      {
        feature: "Custom Layout Design",
        starter: "Template Based",
        business: "Semi-Custom",
        enterprise: "Custom",
        ecommerce: "Custom"
      },
      {
        feature: "CMS (Admin Access)",
        starter: "wrong",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Mobile Responsive + Bootstrap",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Customized Homepage Design",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "SEO Semantic HTML Code",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Google Map Integration",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Click to Call / Email",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Social Media Integration",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"

      },
      {
        feature: "JQuery Effects",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"

      },
      {
        feature: "Main Banner Management",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Slider on Homepage",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Testimonials Section",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Gallery Section",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Blog / News Module",
        starter: "Blog Only",
        business: "Blog + News",
        enterprise: "Blog + News",
        ecommerce: "Blog + News"
      },
      {
        feature: "Newsletter Integration",
        starter: "✖",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "On-page SEO",
        starter: "Wrong",
        business: "Wrong",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Google Analytics Setup",
        starter: "Wrong",
        business: "Wrong",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "XML Sitemap",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Live Chat Feature",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Malware Removal",
        starter: "Wrong",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Content Writing ₹1/word",
        starter: "Optional",
        business: "Optional",
        enterprise: "Optional",
        ecommerce: "Optional"
      },
      {
        feature: "Mockup for Homepage",
        starter: "Wrong",
        business: "Wrong",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Video / YouTube Integration",
        starter: "Wrong",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Training (Up to X Hrs)",
        starter: "Up to 2 Hrs",
        business: "Up to 3 Hrs",
        enterprise: "Up to 5 Hrs",
        ecommerce: "Up to 5 Hrs"
      },
      {
        feature: "Website Maintenance",
        starter: "7 Days",
        business: "7 Days",
        enterprise: "7 Days",
        ecommerce: "7 Days"
      },
      {
        feature: "Delivery Timeline",
        starter: "5-7 Days",
        business: "10-12 Days",
        enterprise: "10-12 Days",
        ecommerce: "15-20 Days"
      },
    ]
  },
  // custome website
  {
    pricingType: "custome-website",
    plans: [
      {
        pricingPackName: "Starter Website",
        packPrice: "₹12999",
        planType: "Basic"
      },
      {
        pricingPackName: "Business Website",
        packPrice: "₹24999",
        planType: "Basic Popular"
      },
      {
        pricingPackName: "Enterprise Website",
        packPrice: "₹33999",
        planType: "Advanced"
      },
      {
        pricingPackName: "ECommerce Website",
        packPrice: "₹41999",
        planType: "Premium"
      },
    ],
    features: [
      {
        feature: "Pages Included",
        starter: "Up to 10 Pages",
        business: "Up to 20 Pages",
        enterprise: "Up to 30 Pages",
        ecommerce: "5 Pages + 30 Products"
      },

      {
        feature: "Pages Included",
        starter: "Up to 10 Pages",
        business: "Up to 20 Pages",
        enterprise: "Up to 30 Pages",
        ecommerce: "5 Pages + 30 Products"
      },
      {
        feature: "Custom Layout Design",
        starter: "Template Based",
        business: "Semi-Custom",
        enterprise: "Custom",
        ecommerce: "Custom"
      },
      {
        feature: "CMS (Admin Access)",
        starter: "wrong",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Mobile Responsive + Bootstrap",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Customized Homepage Design",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "SEO Semantic HTML Code",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Google Map Integration",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Click to Call / Email",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Social Media Integration",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"

      },
      {
        feature: "JQuery Effects",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"

      },
      {
        feature: "Main Banner Management",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Slider on Homepage",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Testimonials Section",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Gallery Section",
        starter: "Right",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "Blog / News Module",
        starter: "Blog Only",
        business: "Blog + News",
        enterprise: "Blog + News",
        ecommerce: "Blog + News"
      },
      {
        feature: "Newsletter Integration",
        starter: "✖",
        business: "Right",
        enterprise: "Right",
        ecommerce: "Right"
      },
      {
        feature: "On-page SEO",
        starter: "Wrong",
        business: "Wrong",
        enterprise: "Right",
        ecommerce: "Right"
      },
    ]
  },
]

/* =======================
   COMPONENT
======================= */

const PriceTable = ({ initialPlan, initialType }) => {
  const [activeType, setActiveType] = useState(initialType || "cms-website");
  const [activePlan, setActivePlan] = useState(0);
  const [isFromHomePage, setIsFromHomePage] = useState(
    Boolean(initialPlan && initialType)
  );

  const navRefs = useRef({});
  const [isMobile, setIsMobile] = useState(false);
  const [ghostStyle, setGhostStyle] = useState({
    width: 0,
    left: 0,
    top: 0,
    height: 0,
  });
  console.log("getting props data from Pricing Page:", initialPlan, initialType);

  const selectedData =
    PricingPgaeData.find((item) => item.pricingType === activeType) ||
    PricingPgaeData[0];

  const plans = selectedData?.plans || [];
  // console.log("plans:", plans);
  const features = selectedData?.features || [];
  // console.log("features:", features);

  console.log("is form home:", isFromHomePage, ":", isFromHomePage && plans.planType === initialPlan);

  // make effect for refresh the tab on click
  useEffect(() => {
    setIsFromHomePage(Boolean(initialPlan && initialType));
  }, [initialPlan, initialType]);


  useEffect(() => {
    if (!initialPlan || plans.length === 0) return;

    const index = plans.findIndex(
      (p) => p.pricingPackName === initialPlan
    );

    if (index !== -1) {
      setActivePlan(index);
    }
  }, [initialPlan, plans]);

  useEffect(() => {
    if (initialType) {
      setActiveType(initialType);
    }
  }, [initialType]);

  /* icon render */
  const renderValue = (value) => {
    if (!value) return null;
    const v = value.toLowerCase();

    if (v === "right" || v === "✔")
      return <img src={tableCheck} alt="Yes" />;

    if (v === "wrong" || v === "✖")
      return <img src={tableReject} alt="No" />;

    return value;
  };

  /* //====ghost div animation */
  const isRTL =
    typeof window !== "undefined" &&
    getComputedStyle(document.documentElement).direction === "rtl";

  const updateGhost = () => {
    const currentTab = navRefs.current[activeType];
    if (!currentTab) return;

    const parent = currentTab.offsetParent;
    if (!parent) return;

    const tabRect = currentTab.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const x = isRTL
      ? parentRect.right - tabRect.right
      : tabRect.left - parentRect.left;

    setGhostStyle({
      width: tabRect.width,
      height: tabRect.height,
      top: tabRect.top - parentRect.top,
      x,
    });
  };

  useEffect(() => {
    updateGhost();

    const currentTab = navRefs.current[activeType];
    if (!currentTab) return;

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateGhost);
    });

    resizeObserver.observe(currentTab);
    window.addEventListener("resize", updateGhost);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateGhost);
    };
  }, [activeType]);
  /* //============== ghost div animation */

  return (
    <div className="pricing-section ">
      <div className="pricing-container d-flex flex-column gap-4 gap-sm-5 align-items-center">
        <Tab.Container
          activeKey={initialType || activeType}
          onSelect={(k) => {
            setActiveType(k);
            setActivePlan(0);
            setIsFromHomePage(false)
          }}
        >
          {/* ---------- TABS ---------- */}
          <div className="position-relative nav-tab-div">
            <Nav className="nav-tabs justify-content-center position-relative">
              {/* Ghost Div */}
              <motion.div
                className="nav-ghost-div position-absolute"
                style={{
                  width: ghostStyle.width,
                  height: ghostStyle.height,
                  top: ghostStyle.top,
                  left: 0,
                }}
                animate={{ x: ghostStyle.x }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
              <Nav.Item>
                <Nav.Link
                  ref={(el) => (navRefs.current["cms-website"] = el)}
                  eventKey="cms-website"
                >
                  <span>CMS Website</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  ref={(el) => (navRefs.current["custome-website"] = el)}
                  eventKey="custome-website"
                >
                  <span>Custom Website</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* ---------- CONTENT ---------- */}
          <Tab.Content>
            {PricingPgaeData.map((tab) => (
              <Tab.Pane eventKey={tab.pricingType} key={tab.pricingType}>
                {/* Mobile Switch */}
                <div className="mobile-plan-switcher">
                  <button
                    onClick={() =>
                      setActivePlan((p) =>
                        p === 0 ? plans.length - 1 : p - 1
                      )
                    }
                  >
                    ‹
                  </button>

                  <div>
                    <h4 className="m-0">{plans[activePlan].pricingPackName}</h4>
                    <p className="m-0">{plans[activePlan].packPrice}</p>
                  </div>

                  <button
                    onClick={() =>
                      setActivePlan((p) =>
                        p === plans.length - 1 ? 0 : p + 1
                      )
                    }
                  >
                    ›
                  </button>
                </div>

                {/* Table */}
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Feature</th>

                      {plans.map((plan, i) => (
                        <th key={i} >
                          {plan.pricingPackName}
                          <br />
                          <span>{plan.packPrice}</span>
                        </th>
                      ))}

                      <th
                        className="mobile-only"
                      // className={initialPlan === plans || initialType === tab.pricingType ? "text-dark" : "text-primary"}
                      >
                        {plans[activePlan].pricingPackName}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {features.map((row, i) => (
                      <tr key={i}>
                        <td className="text-start fw-semibold">{row.feature}</td>

                        {plans.map((plan, idx) => {
                          const mapKey = ["starter", "business", "enterprise", "ecommerce"][idx];

                          return (
                            <td
                              key={idx}
                              className={
                                isFromHomePage &&
                                  activeType === tab.pricingType &&
                                  plan.planType === activePlan
                                  ? "activeTypePlan"
                                  : "desktop-only"
                              }
                            >
                              {renderValue(row[mapKey])}
                            </td>
                          );
                        })}

                        <td className="mobile-only">
                          {renderValue(
                            row[
                            ["starter", "business", "enterprise", "ecommerce"][
                            activePlan
                            ]
                            ]
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default PriceTable;
