




import { useRef } from 'react'
import uiImage from '../../assets/images/seo-top-img.svg'
import wwd from '../../assets/images/wwd.svg'
import marImg1 from '../../assets/images/seo-1.png'
import marImg2 from '../../assets/images/seo-2.png'
import marImg3 from '../../assets/images/seo-3.png'
import marImg4 from '../../assets/images/seo-1.png'
import marImg5 from '../../assets/images/seo-2.png'
import marImg6 from '../../assets/images/seo-3.png'

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
    title: "Lead capture & contact form setup",

  },
     {
    id: 6,
    title: "•	WhatsApp, call & CTA integrations",

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
    text: "Optimized performance reduces bounce rates, improves engagement, and delivers smoother experiences across all devices.",
  },
  {
    id: 2,
    title: "SEO-ready structure increases organic visibility",
    text: "Search-engine-friendly architecture helps your website rank higher, attract relevant traffic, and build long-term visibility.",
  },
  {
    id: 3,
    title: "Optimized user journeys enhance lead conversion",
    text: "Clear navigation, strategic CTAs, and conversion-focused layouts guide users toward meaningful actions.",
  },
   {
    id: 4,
    title: "Data-driven setup supports long-term growth",
    text: "Performance and SEO improvements are backed by best practices and analytics-ready setups for continuous optimization.",
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
    // title: "Performance",
    highlight: "Performance, SEO & Lead Enablement",
    // subtitle: "(Emailer Template Design)",
    text: "Optimized digital solutions designed to enhance website speed, improve search visibility, and enable consistent lead generation—transforming your website into a high-performing business asset."
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
        Title="Why Choose Our eCommerce / WooCommerce Development?"
        data={DesignServices} pText="A visually appealing website must also be fast, discoverable, and conversion-focused. Our approach combines performance optimization, SEO best practices, and strategic user journeys to ensure your website not only attracts visitors but also converts them into qualified leads." 
        prevRef={prevRef}
        nextRef={nextRef} />

        <LogoSlider data={marqData} title="Tools & Technologies We Use" />
    



    
        <WhatWeDeliver Title="What We Deliver"  Data={servicesData} Image={wwd}/>

        <PortfolioSection Title="Portfolio" Data={portfolioData}/>


    </>
  )
}

export default SeoService