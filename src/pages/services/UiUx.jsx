
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
import { useRef } from 'react'
const servicesData = [
  {
    id: 1,
    title: "Mobile-first Design",
  },
  {
    id: 2,
    title: "Mobile app UI/UX design",
  },
  {
    id: 3,
    title: "Wireframes & user flows",
  },
  {
    id: 4,
    title: "High-fidelity UI screens",

  },
  {
    id: 5,
    title: "Interactive prototypes",

  },
  {
    id: 6,
    title: "Design systems & style guides",
  },
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
    title: "Custom UI & UX Design",
    text: "Custom UI & UX design creates a unique brand experience aligned with your business goals and user needs. Our tailored approach blends creativity, usability, and consistency to give your website a distinct identity.",
  },
  {
    id: 2,
    title: "Responsive UI & UX Design",
    text: "Responsive design ensures a seamless experience across desktops, tablets, and mobile devices. We create flexible, fast-loading layouts that adapt to every screen enhance user engagement across platforms.",
  },
  {
    id: 3,
    title: "UI & UX Redesign",
    text: "Our website redesign services modernize outdated websites by improving user flow  UI & UX redesign. We simplify complex journeys to deliver smooth, engaging experiences that support business growth.",
  },
  {
    id: 4,
    title: "Custom UI & UX Design",
    text: "Custom UI & UX design creates a unique brand experience aligned with your business goals and user needs. Our tailored approach blends creativity, usability, and consistency to give your website a distinct identity.",
  },
  {
    id: 5,
    title: "Responsive UI & UX Design",
    text: "Responsive design ensures a seamless experience across desktops, tablets, and mobile devices. We create flexible, fast-loading layouts that adapt to every screen enhance user engagement across platforms.",
  },
  {
    id: 6,
    title: "UI & UX Redesign",
    text: "Our website redesign services modernize outdated websites by improving user flow  UI & UX redesign. We simplify complex journeys to deliver smooth, engaging experiences that support business growth.",
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
    title: "Design",
    highlight: "UI & UX",
    subtitle: "(Website & Mobile App)",
    text: "Strategic UI/UX design for websites and mobile apps that balances usability, visual appeal, and business goals—crafted in Figma for precision, collaboration, and scalable, conversion-focused user experiences."
  }
];


const UiUx = () => {

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
        Title="Our UI & UX Design Services"
        data={DesignServices} pText="We use Figma as our core design platform to build modern, scalable, and user-centric digital experiences.Its real-time collaboration keeps teams aligned and speeds up decision-making. With structured design systems and precise layouts, we ensure consistency across web and mobile products." 
        prevRef={prevRef}
        nextRef={nextRef} />

        <LogoSlider data={marqData} title="Tools & Technologies We Use" />
    

    
        <WhatWeDeliver Title="What We Deliver"  Data={servicesData} Image={wwd}/>

        <PortfolioSection Title="Portfolio" Data={portfolioData}/>

 
    </>
  )
}

export default UiUx