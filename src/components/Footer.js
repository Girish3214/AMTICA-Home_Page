import React from "react";
import { Link } from "react-router-dom";
import {} from "../styles/footer.css";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <section className="social-media">
          <div className="social-details-wrap">
            <div className="company-logo">
              <Link to="/" className="social-logo">
                AMTICA
              </Link>
            </div>
            <p className="company-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              nobis consequatur aut id velit expedita nostrum? Quaerat
              doloremque
            </p>
            <div className="social-media-icons">
              <Button buttonStyle="btn-icon">
                <i className="fab fa-youtube"></i>
              </Button>
              <Button buttonStyle="btn-icon">
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button buttonStyle="btn-icon">
                <i className="fab fa-twitter"></i>
              </Button>
              <Button buttonStyle="btn-icon">
                <i className="fab fa-instagram"></i>
              </Button>
            </div>
          </div>
        </section>

        <div className="footer-links">
          <div className="company-details-wrap">
            <div className="company-items">
              <h2>Sitemap</h2>
              <Link to="/link" target="_blank">
                Home
              </Link>
              <Link to="/link" target="_blank">
                Seller
              </Link>
              <Link to="/link" target="_blank">
                Buyer
              </Link>
              <Link to="/link" target="_blank">
                Search
              </Link>
            </div>
          </div>

          <div className="company-details-wrap">
            <div className="company-items">
              <h2>Services</h2>
              <Link to="/link" target="_blank">
                Help
              </Link>
              <Link to="/link" target="_blank">
                Request a Feature
              </Link>
              <Link to="/link" target="_blank">
                Terms and Policy
              </Link>
            </div>
          </div>
          <div className="company-details-wrap">
            <div className="company-items">
              <h2>For users</h2>
              <Link to="/link" target="_blank">
                Login
              </Link>
              <Link to="/link" target="_blank">
                Register
              </Link>
              <Link to="/link" target="_blank">
                My Orders
              </Link>
            </div>
          </div>
          <div className="company-details-wrap">
            <div className="company-items">
              <h2>Our App</h2>
              <Button buttonStyle="btn-download">
                <i className="fab fa-apple fa-1.5x fa-1"></i>
                <h6>Download on the</h6>
                App Store
              </Button>
              <Button buttonStyle="btn-download">
                <i className="fab fa-google-play fa-1.5x fa-1"></i>
                <h6>Get it on</h6>
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section className="rights-section">
        <div className="copy-rights">
          <div className="reserved-rights">
            <p>© Amtica. All rights reserved</p>
          </div>
          <div className="reserved-rights">
            <p>Privacy & Cookies</p>
            <p>Accessibility</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
