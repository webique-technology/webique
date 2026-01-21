import { useRef } from 'react'
import uiImage from '../../assets/images/branding-top-img.svg'
import wwd from '../../assets/images/wwd.svg'
import marImg1 from '../../assets/images/branding-1.png'
import marImg2 from '../../assets/images/branding-2.png'
import marImg3 from '../../assets/images/branding-3.png'
import marImg4 from '../../assets/images/branding-4.png'
import marImg5 from '../../assets/images/branding-5.png'
import marImg6 from '../../assets/images/branding-6.png'

import pFo1 from '../../assets/images/portfolio-1.png'
import pFo2 from '../../assets/images/portfolio-2.png'
import LogoSlider from "../../components/LogoSlider";
import ServiceSlider from '../../components/ServiceSlider';
import { PortfolioSection, ServicesIntro, WhatWeDeliver } from '../../components/shared/Services';



const servicesData = [
  {
    id: 1,
    title: "Logo design & brand identity development",
  },
  {
    id: 2,
    title: "Brand color palette & typography selection",
  },
  {
    id: 3,
    title: "Visual branding guidelines",
  },
  {
    id: 4,
    title: "Website & digital branding alignment",

  },
  {
    id: 5,
    title: "Marketing collateral design support",

  }
];

const marqData = [
  { id: 1, image: marImg1, alt: "figma" },
  { id: 2, image: marImg2, alt: "xd" },
  { id: 3, image: marImg3, alt: "ps" },
  { id: 4, image: marImg4, alt: "ai" },
  { id: 5, image: marImg5, alt: "coral" },
  { id: 6, image: marImg6, alt: "ai" },
];







const DesignServices = [
  {
    id: 1,
    title: "Creates a strong and memorable brand presence",
    text: "A well-defined brand identity helps your business stand out, stay recognizable, and leave a lasting impression on your audience.",
  },
  {
    id: 2,
    title: "Ensures consistency across digital platforms",
    text: "Consistent visuals, colors, and messaging across platforms reinforce brand recognition and professionalism.",
  },
  {
    id: 3,
    title: "Enhances brand credibility and professionalism",
    text: "A polished and unified brand presentation builds trust and positions your business as reliable and established.",
  },
  {
    id: 4,
    title: "Supports long-term business growth",
    text: "Strong branding creates a foundation for marketing, expansion, and customer loyalty as your business scales.",
  }
];

const portfolioData = [
  {
    id: 1,
    image: pFo1,
    title: "Balasaheb Borade Group of Companies",
    description: "(Figma Website Mock-ups)",
  },
  {
    id: 2,
    image: pFo2,
    title: "Total Branding",
    description: "(Logo, Visiting Card, Brochure, LetterHead)",
  },
];

const serviceData = [
  {
    id: 1,
    // title: "Support",
    highlight: "Branding Support",
    // subtitle: "(Branding  &  Logo  Design)",
    text: "Strategic branding solutions designed to build a strong, consistent, and professional brand identity across all digital touchpoints. We help businesses create a cohesive visual and strategic presence that stands out and builds lasting recognition."
  }
];


const BrandingSupport = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <ServicesIntro
        Data={serviceData}
        IntroImage={uiImage}
      />





 



      <ServiceSlider
        figmaImg={marImg1}
        Title="Why Choose Our Branding Support?"
        data={DesignServices} pText="A clear and consistent brand identity is essential for building trust, recognition, and credibility. Our branding support ensures your business communicates a unified message across websites, digital platforms, and marketing materials—strengthening your overall brand perception."
        prevRef={prevRef}
        nextRef={nextRef} />

      <LogoSlider data={marqData} title="Tools & Technologies We Use" />



      <WhatWeDeliver Title="What We Deliver"  Data={servicesData} Image={wwd} />

      <PortfolioSection Title="Portfolio" Data={portfolioData} />

      
    </>
  )
}

export default BrandingSupport