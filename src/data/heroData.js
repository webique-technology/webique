// data/heroData.js
import arrowOne from "../assets/images/arrow-one.svg";

// images
import imgOne from "../assets/images/template-1.png";
import imgTwo from "../assets/images/template-2.png";
import imgThree from "../assets/images/template-3.png";
import imgFour from "../assets/images/template-4.png";
import imgFive from "../assets/images/template-5.png";

export const heroData = [
  {
    id: 1,
    title:
      "Digital <span>Design & Development</span> <br/> Aligned With Business Goals",
    subtitle:
      "We create custom websites and digital platforms that help businesses establish, scale, and succeed online.",

    buttons: [
      {
        text: "View Portfolio",
        icon: arrowOne,
        type: "primary",
      },
    ],

    images: [
      {
        src: imgOne,
        alt: "Modern website design",
      },
      {
        src: imgTwo,
        alt: "Creative UI UX design",
      },
      {
        src: imgThree,
        alt: "Web development dashboard",
      },
      {
        src: imgFour,
        alt: "Mobile app interface",
      },
      {
        src: imgFive,
        alt: "Digital branding concept",
      },
    ],
  },
];
