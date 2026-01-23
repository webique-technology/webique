import { useRef } from 'react'
import uiImage from '../../assets/images/ecommerce-top-img.svg'
import wwd from '../../assets/images/wwd.svg'
import marImg1 from '../../assets/images/ecom-1.png'
import marImg2 from '../../assets/images/ecom-2.png'
import marImg3 from '../../assets/images/custom-1.png'
import marImg4 from '../../assets/images/ecom-4.png'
import marImg5 from '../../assets/images/ecom-5.png'

import pFo1 from '../../assets/images/ecom-11.png'
import pFo2 from '../../assets/images/ecom-22.png'
import LogoSlider from "../../components/LogoSlider";
import ServiceSlider from '../../components/ServiceSlider';
import { PortfolioSection, ServicesIntro, WhatWeDeliver } from '../../components/shared/Services';


const servicesData = [
  {
    id: 1,
    title: "Custom eCommerce website design & development",
  },
  {
    id: 2,
    title: "WooCommerce setup & configuration",
  },
  {
    id: 3,
    title: "Product, category & inventory management",
  },
  {
    id: 4,
    title: "Payment gateway & shipping integration",
  },
  {
    id: 5,
    title: "Cart, checkout & order management",
  },
  {
    id: 6,
    title: "Mobile-responsive shopping experience",
  }
];

const marqData = [
  { id: 1, image: marImg1, alt: "woo" },
  { id: 2, image: marImg2, alt: "Shopify" },
  { id: 3, image: marImg3, alt: "react" },
  { id: 4, image: marImg4, alt: "Drupal" },
  { id: 5, image: marImg5, alt: "Network" },

  { id: 8, image: marImg1,  alt: "woo" },
  { id: 9, image: marImg2,  alt: "Shopify" },
  { id: 10, image: marImg3, alt: "Shopify" },
  { id: 11, image: marImg4, alt: "Drupal" },
  { id: 12, image: marImg5, alt: "Network" },
];














const DesignServices = [
  {
    id: 1,
    title: "Flexible and scalable eCommerce platform",
    text: "WooCommerce is designed to grow alongside your business. Whether you’re starting with a small catalog or scaling to thousands of products, it handles increasing traffic, orders, and complex store requirements without sacrificing performance or stability.",
  },
  {
    id: 2,
    title: "Easy product and inventory management",
    text: "The user-friendly admin dashboard makes it easy to manage products, categories, pricing, discounts, variations, and stock levels. Real-time inventory updates help prevent overselling while streamlining day-to-day store operations.",
  },
  {
    id: 3,
    title: "Secure and reliable payment integrations",
    text: "WooCommerce supports a wide range of trusted payment gateways, including cards, UPI, wallets, and international payment methods. Regular updates, secure APIs, and compliance with industry security standards ensure safe transactions and customer data protection.",
  },
   {
    id: 4,
    title: "SEO-friendly architecture for product visibility",
    text: "Built on WordPress, WooCommerce follows SEO best practices with clean URLs, customizable meta data, schema support, and compatibility with leading SEO plugins—helping products rank better and attract organic traffic.",
  },
  {
    id: 5,
    title: "Customizable features to match business needs",
    text: "From custom checkout flows and product filters to advanced pricing rules and third-party integrations, WooCommerce allows complete flexibility. This ensures your store aligns perfectly with your brand identity, customer journey, and operational workflows.",
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
    title: "Ecommerce Website",
    // highlight: "Ecommerce",
    subtitle: "(ecommerce / Woo Commerce Development)",
    text: "Scalable and conversion-focused eCommerce solutions designed to deliver seamless shopping experiences and support long-term business growth. We build fast, secure, and user-friendly online stores that turn visitors into loyal customers."
  }
];


const Ecommerce = () => {

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
        data={DesignServices} pText="A well-built eCommerce website is essential for driving online sales and building customer trust. Our WooCommerce solutions are designed with a strong focus on performance, usability, and secure transactions to ensure smooth shopping journeys and higher conversion rates." 
        prevRef={prevRef}
        nextRef={nextRef} />

        <LogoSlider data={marqData} title="Tools & Technologies We Use" />
    

    
        <WhatWeDeliver Title="What We Deliver"  Data={servicesData} Image={wwd}/>

        <PortfolioSection Title="Our Approach" Data={portfolioData}/>

   
    </>
  )
}

export default Ecommerce