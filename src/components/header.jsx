// components/Header.jsx
import React from "react";
import { heroData } from "../data/heroData";
import wLgo from "../assets/images/header-lgo.png";
import "../style/header.scss";

const Header = () => {
  return (
    <section className="header-wrap">
      <div className="w-lgo-wrap">
        <img src={wLgo} alt="Header Logo" />
      </div>

      {heroData.map((item) => (
        <React.Fragment key={item.id}>
          {/* Content */}
          <div className="hero-content">
            <h1
              className="hero-title"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />

            <p className="hero-subtitle">{item.subtitle}</p>

            <div className="hero-buttons">
              {item.buttons.map((btn, index) => (
                <button key={index} className={`hero-btn ${btn.type}`}>
                  <span>{btn.text}</span>
                  <img src={btn.icon} alt="arrow" />
                </button>
              ))}
            </div>
          </div>

          {/* Images */}
          {/* Images */}
{/* <div className="header-portfolio">
  <div className="hero-images hero-images--scroll">
    {[...item.images, ...item.images].map((img, index) => (
      <img key={index} src={img.src} alt={img.alt} />
    ))}
  </div>
</div> */}

<div className="header-portfolio">
  <div className="hero-images marquee">
    {[...item.images, ...item.images].map((img, index) => (
      <img key={index} src={img.src} alt={img.alt} />
    ))}
  </div>
</div>

        </React.Fragment>
      ))}
    </section>
  );
};

export default Header;
