import React, { useState } from "react";
import tableCheck from "../../assets/images/table-check.svg";
import tableReject from "../../assets/images/table-reject.svg";
import "../../assets/scss/priceTable.scss"


const PricingPgaeData = [
  // wordpress website
  {
    pricingType: "wordpress",
    plans: [
      {
        pricingPackName: "Starter Website",
        packPrice: "₹12999",
      },
      {
        pricingPackName: "Business Website",
        packPrice: "₹24999",
      },
      {
        pricingPackName: "Enterprise Website",
        packPrice: "₹33999",
      },
      {
        pricingPackName: "ECommerce Website",
        packPrice: "₹41999",
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
    pricingType: "custome",
    plans: [
      {
        pricingPackName: "Starter Website",
        packPrice: "₹12999",
      },
      {
        pricingPackName: "Business Website",
        packPrice: "₹24999",
      },
      {
        pricingPackName: "Enterprise Website",
        packPrice: "₹33999",
      },
      {
        pricingPackName: "ECommerce Website",
        packPrice: "₹41999",
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


const PriceTable = () => {

  const [activeType, setActiveType] = useState("wordpress");
  const [activePlan, setActivePlan] = useState(0);

  const pricingData = PricingPgaeData.find(
    (item) => item.pricingType === activeType
  );

  const plans = pricingData.plans;
  const features = pricingData.features;

  const renderValue = (value) => {
    if (!value) return null;
    const v = value.toLowerCase();

    if (v === "right" || v === "✔")
      return <img src={tableCheck} alt="Yes" className="icon" />;

    if (v === "wrong" || v === "✖")
      return <img src={tableReject} alt="No" className="icon" />;

    return value;
  };



  return (
    <div className="pricing-wrapper">
      {/* Tabs */}
      <div className="pricing-tabs">
        <div className="nav-tabs">
          {PricingPgaeData.map((tab) => (
            <button
              key={tab.pricingType}
              className={activeType === tab.pricingType ? "active" : ""}
              onClick={() => {
                setActiveType(tab.pricingType);
                setActivePlan(0);
              }}
            >
              {tab.pricingType}
            </button>
          ))}
        </div>
      </div>
      {/* Mobile Plan Switch */}
      <div className="mobile-plan-switcher">
        <button onClick={() => setActivePlan(p => (p === 0 ? plans.length - 1 : p - 1))}>‹</button>
        <div>
          <h4>{plans[activePlan].pricingPackName}</h4>
          <p>{plans[activePlan].packPrice}</p>
        </div>
        <button onClick={() => setActivePlan(p => (p === plans.length - 1 ? 0 : p + 1))}>›</button>
      </div>

      {/* Table */}
      <table className="pricing-table">
        <thead>
          <tr>
            <th>Feature</th>

            {plans.map((p, i) => (
              <th key={i} className="desktop-only">
                {p.pricingPackName}<br />
                <span>{p.packPrice}</span>
              </th>
            ))}

            <th className="mobile-only">
              {plans[activePlan].pricingPackName}
            </th>
          </tr>
        </thead>

        <tbody>
          {features.map((row, i) => (
            <tr key={i}>
              <td className="feature-cell">{row.feature}</td>

              {plans.map((_, idx) => {
                const key = ["starter", "business", "enterprise", "ecommerce"][idx];
                return (
                  <td key={idx} className="desktop-only">
                    {renderValue(row[key])}
                  </td>
                );
              })}

              <td className="mobile-only">
                {renderValue(
                  row[["starter", "business", "enterprise", "ecommerce"][activePlan]]
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
