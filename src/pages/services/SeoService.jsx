




import { useRef } from 'react'
import uiImage from '../../assets/images/uiux.svg'
import wwd from '../../assets/images/wwd.svg'
import marImg1 from '../../assets/images/marquee-item-1.svg'
import marImg2 from '../../assets/images/marquee-item-2.svg'
import marImg3 from '../../assets/images/marquee-item-3.svg'
import marImg4 from '../../assets/images/marquee-item-4.svg'
import marImg5 from '../../assets/images/marquee-item-5.svg'
import marImg6 from '../../assets/images/marquee-item-6.svg'

import pFo1 from '../../assets/images/portfolio-1.png'
import pFo2 from '../../assets/images/portfolio-2.png'
import LogoSlider from "../../components/LogoSlider";
import ServiceSlider from '../../components/ServiceSlider';
import { PortfolioSection, ServicesIntro, WhatWeDeliver } from '../../components/shared/Services';











const servicesData = [
  {
    id: 1,
    title: "Website speed & performance optimization",
  },
  {
    id: 2,
    title: "Core Web Vitals improvement",
  },
  {
    id: 3,
    title: "SEO-friendly website structure",
  },
  {
    id: 4,
    title: "On-page SEO implementation",

  },
   {
    id: 5,
    title: "Lead capture & contact forms",

  },
     {
    id: 6,
    title: "WhatsApp, call & CTA integration",

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
    title: "Faster loading websites improve user experience and retention",
    text: "A trusted platform that ensures stability, security, and consistent performance over time.",
  },
  {
    id: 2,
    title: "SEO-ready structure increases organic visibility",
    text: "Content can be managed and updated easily without coding knowledge.",
  },
  {
    id: 3,
    title: "Optimized journeys enhance lead conversion",
    text: "Thousands of plugins extend functionality while maintaining security and scalability.",
  },
   {
    id: 4,
    title: "Faster loading websites improve user experience and retention",
    text: "A trusted platform that ensures stability, security, and consistent performance over time.",
  },
  {
    id: 5,
    title: "SEO-ready structure increases organic visibility",
    text: "Content can be managed and updated easily without coding knowledge.",
  },
  {
    id: 6,
    title: "Optimized journeys enhance lead conversion",
    text: "Thousands of plugins extend functionality while maintaining security and scalability.",
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
    title: "Performance",
    highlight: "Seo,Lead",
    subtitle: "(Emailer Template Design)",
    text: "Professionally crafted emailer templates designed to deliver clear communication, consistent branding, and improved engagement across all email platforms. A well-designed emailer template ensures your message looks professional, readable, and impactful across devices. It strengthens brand identity and improves user response without compromising inbox compatibility."
  }
];


const SeoService = () => {

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
        Title="Why This Service Matters"
        data={DesignServices} pText="WordPress is an industry-leading CMS known for long-term reliability, ease of use, and scalability. It offers cost-effective solutions with powerful plugins and an SEO-friendly structure, making it ideal for startups and growing businesses." 
        prevRef={prevRef}
        nextRef={nextRef} />

        <LogoSlider data={marqData} title="Tools & Technologies We Use" />
    

    
        <WhatWeDeliver Title="What We Deliver"  Data={servicesData} Image={wwd}/>

        <PortfolioSection Title="Portfolio" Data={portfolioData}/>


    </>
  )
}

export default SeoService