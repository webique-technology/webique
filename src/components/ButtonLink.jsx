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
  phone,
  to,
  label,
  icon,
  className = "",
}) => {

  // 👉 If `to` exists → navigate
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

  // 👉 Else → phone call
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

