

import uiImage from '../../assets/images/wordpress-img.svg'
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
import { useRef } from 'react'






const servicesData = [
  {
    id: 1,
    title: "Service-based businesses",
  },
  {
    id: 2,
    title: "Corporate websites",
  },
  {
    id: 3,
    title: "Blogs, portfolios, and informational websites",
  },
  {
    id: 4,
    title: "Businesses requiring frequent content updates",

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
    title: "Tailor-made architecture aligned with business goals",
    text: "A trusted platform that ensures stability, security, and consistent performance over time.",
  },
  {
    id: 2,
    title: "High-performance, lightweight, and fast-loading code",
    text: "Content can be managed and updated easily without coding knowledge.",
  },
  {
    id: 3,
    title: "Complete design and functionality freedom",
    text: "Thousands of plugins extend functionality while maintaining security and scalability.",
  },
    {
    id: 4,
    title: "Tailor-made architecture aligned with business goals",
    text: "A trusted platform that ensures stability, security, and consistent performance over time.",
  },
  {
    id: 5,
    title: "High-performance, lightweight, and fast-loading code",
    text: "Content can be managed and updated easily without coding knowledge.",
  },
  {
    id: 6,
    title: "Complete design and functionality freedom",
    text: "Thousands of plugins extend functionality while maintaining security and scalability.",
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
    highlight: "WordPress",
    subtitle: "(WordPress Website Solutions)",
    text: "WordPress is a powerful and flexible CMS used worldwide to build professional, scalable, and easy-to-manage websites. We deliver custom WordPress solutions with optimized plugins, CMS customization, and an SEO-friendly structure for growing businesses."

  }
];


const WordPress = () => {

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
        data={DesignServices} 
        pText="WordPress is an industry-leading CMS known for long-term reliability, ease of use, and scalability. It offers cost-effective solutions with powerful plugins and an SEO-friendly structure, making it ideal for startups and growing businesses." 
        prevRef={prevRef}
        nextRef={nextRef} />

        <LogoSlider data={marqData} title="Best Suited For" />
    

    
        <WhatWeDeliver Title="What We Deliver"  Data={servicesData} Image={wwd}/>

        <PortfolioSection Title="Portfolio" Data={portfolioData}/>


    </>
  )
}

export default WordPress