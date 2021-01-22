import React from "react";
import { Link } from "react-router-dom";
import "../styles/button.css";

// for checking the button type
const Styles = ["btn-main", "btn-download", "btn-icon"];
const Button = ({ children, type, onClick, buttonStyle }) => {
  const checkStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0];
  return (
    <Link to="/new" className="btn-mobile">
      <button className={`btn ${checkStyle}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
