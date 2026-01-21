import { useRef } from 'react'
import uiImage from '../../assets/images/email-top-img.svg'
import wwd from '../../assets/images/wwd.svg'
import marImg1 from '../../assets/images/figma.png'
import marImg2 from '../../assets/images/custom-2.png'
import marImg3 from '../../assets/images/custom-3.png'
import marImg4 from '../../assets/images/custom-1.png'
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
    title: "Custom-designed emailer templates",
  },
  {
    id: 2,
    title: "Promotional & service-based email layouts",
  },
  {
    id: 3,
    title: "Newsletter-style email templates",
  },
  {
    id: 4,
    title: "Website & product launch emailers",

  },
   {
    id: 5,
    title: "HTML or image-based email templates",

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





 




// •	Brand-consistent layout and visual identity
// 
// •	
// 
// •	Clean, structured format for better readability
// 
// •	
// 
// •	
// 






const DesignServices = [
  {
    id: 1,
    title: "Brand-consistent layout and visual identity",
    text: "We design templates that align seamlessly with your brand guidelines, ensuring consistent colors, typography, and visual language across all email communications.",
  },
  {
    id: 2,
    title: "Mobile-responsive, email-friendly design",
    text: "Templates are optimized for mobile and desktop viewing, ensuring your emails render correctly and remain user-friendly on all screen sizes.",
  },
  {
    id: 3,
    title: "Clean, structured format for better readability",
    text: "Clear layouts, proper spacing, and visual hierarchy make content easy to scan and improve message clarity and engagement.",
  },
   {
    id: 4,
    title: "Optimized for major email clients",
    text: "Designed and tested for compatibility across popular email platforms such as Gmail, Outlook, Apple Mail, and more—ensuring consistent appearance.",
  },
  {
    id: 5,
    title: "Easy-to-edit templates for future use",
    text: "Reusable designs that allow quick content updates without redesigning the entire email, saving time and effort for future campaigns.",
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
    // title: "Design",
    highlight: "Emailer Template Design",
    subtitle: "(Emailer Template Design)",
    text: "Professionally crafted emailer templates designed to deliver clear communication, consistent branding, and improved engagement across all email platforms. Our designs ensure your emails look polished, perform reliably, and drive meaningful user actions."
  }
];


const EmailerTemplate = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <ServicesIntro  Data={serviceData}  IntroImage={uiImage} />

        <ServiceSlider 
        figmaImg={marImg1} 
        Title="Why Choose Our Emailer Template Design?"
        data={DesignServices} pText="A well-designed emailer template plays a crucial role in capturing attention and conveying your message effectively. Our templates are built to look professional, remain readable across devices, and maintain inbox compatibility—helping strengthen brand identity and improve open rates, click-throughs, and user response." 
        prevRef={prevRef}
        nextRef={nextRef} />

        <LogoSlider data={marqData} title="Tools & Technologies We Use" />
    



    
        <WhatWeDeliver Title="What We Deliver"  Data={servicesData} Image={wwd}/>

        <PortfolioSection Title="Portfolio" Data={portfolioData}/>

 
    </>
  )
}

export default EmailerTemplate