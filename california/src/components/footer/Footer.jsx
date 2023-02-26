import React from "react";
import "../footer/FooterStyle.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-block">
            <img src="../../img/logo/logo.svg" alt="" />
            <p className="block-title">
              Sign up for texts to be notified about our best offers on the
              perfect gifts.
            </p>
          </div>
          <div className="all-products">
            <h4 className="footer-hero__title">All products</h4>
            <span className="block-two__title">Phones</span>
            <span className="block-two__title">Watch</span>
            <span className="block-two__title">Tablet</span>
            <span className="block-two__title">Laptops</span>
          </div>
          <div className="company">
            <h4 className="footer-hero__title">Company</h4>
            <span className="block-two__title">About</span>
            <span className="block-two__title">Support</span>
          </div>
          <div className="support">
            <h4 className="footer-hero__title">Support</h4>
            <span className="block-two__title">Style Guide</span>
            <span className="block-two__title">Licensing</span>
            <span className="block-two__title">Change Log</span>
            <span className="block-two__title">Contact</span>
          </div>
          <div className="follow-us">
            <div>
              <h4 className="footer-hero__title">Follow Us</h4>
            </div>
            <span className="footer-block__icon">
              <img
                className="footer-icons"
                src="./img/icons/instagram.png"
                alt="instagram"
              />
            </span>
            <span className="footer-block__icon">
              <img
                className="footer-icons"
                src="./img/icons/facebook.png"
                alt="facebook"
              />
            </span>
            <span className="footer-block__icon">
              <img
                className="footer-icons"
                src="./img/icons/linkedin.png"
                alt="linkedin"
              />
            </span>
            <span className="footer-block__icon">
              <img
                className="footer-icons"
                src="./img/icons/youtube.png"
                alt="youtube"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
