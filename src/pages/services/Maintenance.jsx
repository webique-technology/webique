
import uiImage from '../../assets/images/maintenence-top-img.svg'
import wwd from '../../assets/images/wwd.svg'
import marImg1 from '../../assets/images/maintenance-1.png'
import marImg2 from '../../assets/images/maintenance-2.png'
import marImg3 from '../../assets/images/maintenance-3.png'
import marImg4 from '../../assets/images/maintenance-1.png'
import marImg5 from '../../assets/images/maintenance-2.png'
import marImg6 from '../../assets/images/maintenance-3.png'

import pFo1 from '../../assets/images/portfolio-1.png'
import pFo2 from '../../assets/images/portfolio-2.png'
import LogoSlider from "../../components/LogoSlider";
import ServiceSlider from '../../components/ServiceSlider';
import { PortfolioSection, ServicesIntro, WhatWeDeliver } from '../../components/shared/Services';
import { useRef } from 'react'









const servicesData = [
  {
    id: 1,
    title: "Website security implementation & continuous monitoring",
  },
  {
    id: 2,
    title: "Malware protection & vulnerability management",
  },
  {
    id: 3,
    title: "Automated backup & recovery solutions",
  },
  {
    id: 4,
    title: "System, plugin & framework updates",

  },
   {
    id: 5,
    title: "Performance monitoring & issue resolution",

  },
     {
    id: 6,
    title: "Ongoing technical support & assistance",

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
    title: "Protects websites from security threats and vulnerabilities",
    text: "Proactive security measures help safeguard your website against malware, hacking attempts, and unauthorized access.",
  },
  {
    id: 2,
    title: "Ensures consistent performance and uptime",
    text: "Ongoing monitoring and optimization keep your website running smoothly and available to users at all times.",
  },
  {
    id: 3,
    title: "Prevents data loss through regular backups",
    text: "Automated backups ensure your website data can be quickly restored in case of errors, failures, or security incidents.",
  },
   {
    id: 4,
    title: "Keeps systems updated and compatible",
    text: "Regular updates to frameworks, plugins, and systems ensure compatibility, stability, and access to the latest features.",
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
    // title: "Support",
    highlight: "Security, Maintenance & Support",
    subtitle: "(Security, Maintenance & Support)",
    text: "Reliable website protection and ongoing technical support designed to ensure stability, security, and uninterrupted digital operations. We proactively manage and safeguard your website so you can focus on growing your business without technical concerns."
  }
];


const Maintenance = () => {

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
        Title="Why Choose Security, Maintenance & Support?"
        data={DesignServices} pText="A website requires continuous monitoring, regular updates, and proactive protection to remain secure and fully functional. Our maintenance and support services help prevent downtime, protect sensitive data, and ensure your website performs reliably over time." 
        prevRef={prevRef}
        nextRef={nextRef} />

        <LogoSlider data={marqData} title="Tools & Technologies We Use" />
    




        <WhatWeDeliver Title="What We Deliver"  Data={servicesData} Image={wwd}/>

        <PortfolioSection Title="Portfolio" Data={portfolioData}/>

   
    </>
  )
}

export default Maintenance