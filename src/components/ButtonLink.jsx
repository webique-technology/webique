// import React from "react";
// import { Link } from "react-router-dom";
// import "../assets/scss/ButtonLink.scss"

// const ButtonLink = ({ to, label, icon, className = "" }) => {
//   return (
//     <Link to={to} className={`btn-link ${className}`}>
//       {icon && <img src={icon} alt={label} className="btn-icon" />}
//       <span className="btn-text">{label}</span>
//     </Link>
//   );
// };

// export default ButtonLink;


import React from "react";
import "../assets/scss/ButtonLink.scss"

const ButtonCall = ({ phone, label, icon, className = "" }) => {
  return (
    <a
      href={`tel:${phone}`}
      className={`${className}`}
      aria-label={`Call ${label}`}
    >

      <span className="btn-text">{label}</span>
      {icon && <img src={icon} alt="" className="btn-icon" />}
    </a>
  );
};

export default ButtonCall;

