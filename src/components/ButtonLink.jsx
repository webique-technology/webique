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


// import React from "react";
// import "../assets/scss/ButtonLink.scss"

// const ButtonCall = ({ phone, label, icon, className = "" }) => {
//   return (
//     <a
//       href={`tel:${phone}`}
//       className={`${className}`}
//       aria-label={`Call ${label}`}
//     >

//       <span className="btn-text">{label}</span>
//       {icon && <img src={icon} alt="" className="btn-icon" />}
//     </a>
//   );
// };

// export default ButtonCall;



import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/scss/ButtonLink.scss";

const ButtonCall = ({
  email,
  phone,
  to,
  label,
  icon,
  className = "",
}) => {

  // 👉 1. Navigation link
  if (to) {
    return (
      <NavLink
        to={to}
        className={className}
        aria-label={label}
      >
        <span className="btn-text">{label}</span>
        {icon && <img src={icon} alt="" className="btn-icon" />}
      </NavLink>
    );
  }

  // 👉 2. Email button
  if (email) {
    return (
      <a
        href={`mailto:${email}`}
        className={className}
        aria-label={`Email ${label}`}
      >
        <span className="btn-text">{label}</span>
        {icon && <img src={icon} alt="" className="btn-icon" />}
      </a>
    );
  }

  // 👉 3. Phone call (default fallback)
  return (
    <a
      href={`tel:${phone}`}
      className={className}
      aria-label={`Call ${label}`}
    >
      <span className="btn-text">{label}</span>
      {icon && <img src={icon} alt="" className="btn-icon" />}
    </a>
  );
};

export default ButtonCall;


