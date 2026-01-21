import { useRef } from 'react'
import uiImage from '../../assets/images/uiux.svg'
import wwd from '../../assets/images/wwd.svg'
import marImg1 from '../../assets/images/custom-1.png'
import marImg2 from '../../assets/images/custom-2.png'
import marImg3 from '../../assets/images/custom-3.png'
import marImg4 from '../../assets/images/custom-4.png'
import marImg5 from '../../assets/images/custom-5.png'
import marImg6 from '../../assets/images/custom-6.png'

import pFo1 from '../../assets/images/portfolio-1.png'
import pFo2 from '../../assets/images/portfolio-2.png'
import LogoSlider from "../../components/LogoSlider";
import ServiceSlider from '../../components/ServiceSlider';
import { PortfolioSection, ServicesIntro, WhatWeDeliver } from '../../components/shared/Services';






const servicesData = [
  {
    id: 1,
    title: "Enterprises and growing brands",
  },
  {
    id: 2,
    title: "Product-based platforms",
  },
  {
    id: 3,
    title: "High-traffic websites",
  },
  {
    id: 4,
    title: "Businesses with complex workflows or integrations",

  }
];

const marqData = [
  { id: 1, image: marImg1, alt: "react" },
  { id: 2, image: marImg2, alt: "html5" },
  { id: 3, image: marImg3, alt: "css3" },
  { id: 4, image: marImg4, alt: "node" },
  { id: 5, image: marImg5, alt: "Bootstarp" },
  { id: 6, image: marImg6, alt: "Github" },
];


// 1) 
// 
// 2) 
// 
// 3) 
// 
// 4) 
// 
// 5) 
// 


const DesignServices = [
  {
    id: 1,
    title: "Tailor-made architecture aligned with business goals",
    text: "We design and develop websites from the ground up to match your specific business objectives, workflows, and target audience—ensuring every feature serves a purpose.",
  },
  {
    id: 2,
    title: "High-performance, lightweight, and fast-loading code",
    text: "Clean, optimized code improves page speed, enhances user experience, and boosts search engine rankings across all devices.",
  },
  {
    id: 3,
    title: "Complete design and functionality freedom",
    text: "Custom development gives you full control over UI/UX, layouts, animations, and features without template limitations.",
  },
  {
    id: 4,
    title: "Better scalability for future integrations",
    text: "Built to grow with your business, custom websites easily support future integrations like CRM tools, APIs, payment gateways, and third-party services.",
  },
  {
    id: 5,
    title: "Enhanced security and control over features",
    text: "With custom-built functionality and controlled code, we reduce security risks and give you greater control over updates, access, and system behavior.",
  },

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
    title: "Website",
    highlight: "Custom",
    subtitle: "(Custom Website Development)",
    text: "Custom websites are built from scratch to meet unique business needs, delivering high performance, custom-coded solutions (React & modern frameworks), bespoke UI/UX design, scalable and secure architecture, API & third-party integrations, and performance-optimized experiences for brands seeking a distinctive digital presence."
  }
];


const CustomWebsite = () => {

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
        Title="Why We Build Custom Websites"
        data={DesignServices} pText="We build custom websites to deliver tailored digital experiences that align perfectly with your business goals, brand identity, and user needs. Unlike template-based solutions, custom websites are designed for flexibility, performance, and long-term growth." 
        prevRef={prevRef}
        nextRef={nextRef} />

        <LogoSlider data={marqData} title="Tools & Technologies We Use" />
    


    
        <WhatWeDeliver Title="Best Suited For"  Data={servicesData} Image={wwd}/>

        <PortfolioSection Title="Portfolio" Data={portfolioData}/>


    </>
  )
}

export default CustomWebsite