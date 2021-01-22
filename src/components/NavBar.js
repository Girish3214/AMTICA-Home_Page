import React, { useState, useEffect } from "react";
import "../styles/navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [show, handleShow] = useState();

  // hamburger action
  const hamClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${show && "nav_white"}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <h5> AMTICA </h5>
          </Link>
          <div className="menu-icon" onClick={hamClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                Login/Sign-up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                Cart <i className="fas fa-shopping-cart" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
