import React, { useState } from "react";

const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log("hola");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`fix ${isOpen ? "info-open" : ""}`}>
      <div className="offcanvas__info">
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo">
                <a href="index.html">
                  <img
                    src="assets/images/logo/site_logo_white.svg"
                    alt="logo not found"
                  />
                </a>
              </div>
              <div className="offcanvas__close" onClick={handleClose}>
                <svg
                  className="menu-close-btn"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33.666"
                  height="33.666"
                  viewBox="0 0 33.666 33.666"
                >
                  <path d="m1.414 1.414 30.83763383 30.83763383"></path>
                  <path d="M1.414 32.252 32.25163383 1.41436617"></path>
                </svg>
              </div>
            </div>
            <div className="mobile-menu fix mb-4"></div>
            <div className="offcanvas__contact text-center">
              <h4 className="offcanvas__title">Contact Info</h4>
              <div className="offcanvas__contact-text mb-2">
                <p>
                  <a href="mailto:paradox@example" target="_blank">
                    paradox@example.com
                  </a>
                </p>
                <span>
                  <a href="tel:725214456">725 214 456</a>
                </span>
              </div>
              <div className="offcanvas__contact-text">
                <p>
                  <a target="_blank" href="https://www.google.com/maps">
                    Folkungagatan 83, Stockholm, Sweden
                  </a>
                </p>
              </div>
            </div>
            <div className="offcanvas__devider"></div>
            <div className="offcanvas__social">
              <ul>
                <li>
                  <a target="_blank" href="https://www.facebook.com">
                    Facebook
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com">
                    Instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.twitter.com">
                    Twitter
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="offcanvas__overlay" onClick={handleToggle}></div>
          <div className="offcanvas__overlay-white"></div>
        </div>
      )}
    </div>
  );
};

export default Offcanvas;
