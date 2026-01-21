

import uiImage from '../../assets/images/cms-top-img.svg'
import wwd from '../../assets/images/wwd.svg'
import marImg1 from '../../assets/images/ec-1.svg'
import marImg2 from '../../assets/images/ec-2.svg'
import marImg3 from '../../assets/images/ec-3.svg'
import marImg4 from '../../assets/images/ec-4.svg'
import marImg5 from '../../assets/images/ec-5.svg'
import marImg6 from '../../assets/images/ec-1.svg'
import marImg7 from '../../assets/images/ec-2.svg'

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
    title: "Blogs, portfolios, and informational websites ",
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
  { id: 6, image: marImg1, alt: "figma" },
  { id: 7, image: marImg2, alt: "xd" },
];












// •	
// 
// •	
// 
// •	
// 
// •	
// 
// •	
// 







const DesignServices = [
  {
    id: 1,
    title: "Industry-leading CMS with long-term reliability",
    text: "WordPress is a mature and stable platform that powers a significant portion of the web. Regular updates, strong community support, and proven performance ensure long-term stability, security, and consistent website functionality.",
  },
  {
    id: 2,
    title: "Easy content updates without technical dependency",
    text: "The intuitive admin dashboard allows teams to update text, images, pages, and blogs without any coding knowledge. This removes technical dependency and enables faster content changes, saving both time and operational costs.",
  },
  {
    id: 3,
    title: "Scalable Plugin Ecosystem",
    text: "With thousands of secure and well-maintained plugins, WordPress can be easily extended to support advanced features such as forms, eCommerce, bookings, analytics, and integrations—while maintaining speed and scalability as your business grows.",
  },
    {
    id: 4,
    title: "Cost-Effective Solution",
    text: "Compared to fully custom-built platforms, WordPress significantly reduces development and maintenance costs. It delivers enterprise-level features without the need for heavy custom development, making it an ideal choice for businesses of all sizes.",
  },
  {
    id: 5,
    title: "SEO-Friendly Structure",
    text: "WordPress is built with clean code and SEO best practices in mind. With customizable URLs, fast-loading pages, mobile responsiveness, and powerful SEO plugins, it helps improve search engine rankings and increase online visibility.",
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
    title: "Solutions",
    highlight: "CMS Website",
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
        Title="Why We Use CMS WEBSITES"
        data={DesignServices} 
        pText="WordPress is an industry-leading CMS known for long-term reliability, ease of use, and scalability. It offers cost-effective solutions with powerful plugins and an SEO-friendly structure, making it ideal for startups and growing businesses." 
        prevRef={prevRef}
        nextRef={nextRef} />

        <LogoSlider data={marqData} title="Best Suited For" />
    
 


    
        <WhatWeDeliver Title="Best Suited For"  Data={servicesData} Image={wwd}/>

        <PortfolioSection Title="Portfolio" Data={portfolioData}/>


    </>
  )
}

export default WordPress