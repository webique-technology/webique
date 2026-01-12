import React, { useState, useRef } from "react";
import "../../assets/scss/priceTable.scss"

const PricingTable = () => {
   const plans = [
    { key: "starter", label: "Starter Website ₹12999" },
    { key: "business", label: "Business Website ₹24999" },
    { key: "enterprise", label: "Enterprise Website ₹33999" },
    { key: "ecommerce", label: "E-Commerce Website ₹41999" },
  ];

  const tableData = [
    { feature: "Pages Included", starter: "5", business: "10", enterprise: "15", ecommerce: "Unlimited" },
    { feature: "Custom Layout Design", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "CMS (Admin Access)", starter: "✔", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Mobile Responsive + Bootstrap", starter: "✔", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Customized Homepage Design", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "SEO Semantic HTML Code", starter: "✔", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Google Map Integration", starter: "✔", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Click to Call / Email", starter: "✔", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Social Media Integration", starter: "✔", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "JQuery Effects", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Main Banner Management", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Slider on Homepage", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Testimonials Section", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Gallery Section", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Blog / News Module", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Newsletter Integration", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "On-page SEO", starter: "Basic", business: "Standard", enterprise: "Advanced", ecommerce: "Advanced" },
    { feature: "Google Analytics Setup", starter: "✔", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "XML Sitemap", starter: "✔", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Live Chat Feature", starter: "✖", business: "✖", enterprise: "✔", ecommerce: "✔" },
    { feature: "Malware Removal", starter: "✖", business: "✖", enterprise: "✔", ecommerce: "✔" },
    { feature: "Content Writing", starter: "₹1/word", business: "₹1/word", enterprise: "₹1/word", ecommerce: "₹1/word" },
    { feature: "Mockup for Homepage", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Video / YouTube Integration", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Training (Up to X Hrs)", starter: "1 Hr", business: "2 Hrs", enterprise: "3 Hrs", ecommerce: "3 Hrs" },
    { feature: "Website Maintenance", starter: "✖", business: "✔", enterprise: "✔", ecommerce: "✔" },
    { feature: "Delivery Timeline", starter: "7 Days", business: "10 Days", enterprise: "15 Days", ecommerce: "20 Days" },
  ];

  const [activePlan, setActivePlan] = useState(0);
  const touchStartX = useRef(0);

  const prevPlan = () =>
    setActivePlan((prev) => (prev === 0 ? plans.length - 1 : prev - 1));

  const nextPlan = () =>
    setActivePlan((prev) => (prev === plans.length - 1 ? 0 : prev + 1));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 60) nextPlan();
    if (diff < -60) prevPlan();
  };

  return (
    <div
      className="pricing-table-wrapper"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* MOBILE PLAN SWITCHER */}
      <div className="plan-switcher">
        <button onClick={prevPlan}>‹</button>
        <span>{plans[activePlan].label}</span>
        <button onClick={nextPlan}>›</button>
      </div>

      <table className="pricing-table">
        <thead>
          <tr>
            <th className="feature-head sticky">Feature / Task</th>
            {plans.map((plan) => (
              <th key={plan.key} className="desktop-only sticky">
                {plan.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="feature-cell">{row.feature}</td>

              {/* DESKTOP */}
              {plans.map((plan) => (
                <td key={plan.key} className="desktop-only">
                  {row[plan.key]}
                </td>
              ))}

              {/* MOBILE */}
              <td className="mobile-only value-cell">
                {row[plans[activePlan].key]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
