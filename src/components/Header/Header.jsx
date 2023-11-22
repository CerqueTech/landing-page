import { useState, useEffect } from "react";
import "./Header.css";
const Header = () => {
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const headerClass = isSticky ? "site_header sticky" : "site_header";
  const colorText = isSticky ? "": "text-white";
  return (
    <div className={headerClass}>
      <div className="container">
        <div className="header_wrapper">
          <div className="site_logo">
            <a className="site_link" href="index.html">
              <img
                src="/assets/images/logo/site_logo_dark.svg"
                alt="Site Logo - Paradox - Agency Template"
              ></img>
            </a>
          </div>
          <div className="mean__menu-wrapper d-none d-lg-block">
            <div className="main-menu">
              <nav id="mobile-menu">
                <ul>
                  <li className="has-dropdown">
                    <a className={colorText} href="index.html">
                      Home
                    </a>
                    <ul className="submenu">
                      <li className="active">
                        <a href="index.html">Creative Agency</a>
                      </li>
                      <li>
                        <a href="personal_portfolio.html">Personal Portfolio</a>
                      </li>
                      <li>
                        <a href="startup_business.html">Startup Business</a>
                      </li>
                      <li>
                        <a href="digital_agency.html">Digital Agency</a>
                      </li>
                      <li>
                        <a href="business_consulting.html">
                          Business Consulting
                        </a>
                      </li>
                      <li>
                        <a href="it_agency.html">IT Agency</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="javascript:void(0)">RTL Demos</a>
                        <ul className="submenu">
                          <li>
                            <a href="index_rtl.html">Creative Agency RTL</a>
                          </li>
                          <li>
                            <a href="personal_portfolio_rtl.html">
                              Personal Portfolio RTL
                            </a>
                          </li>
                          <li>
                            <a href="startup_business_rtl.html">
                              Startup Business RTL
                            </a>
                          </li>
                          <li>
                            <a href="digital_agency_rtl.html">
                              Digital Agency RTL
                            </a>
                          </li>
                          <li>
                            <a href="business_consulting_rtl.html">
                              Business Consulting RTL
                            </a>
                          </li>
                          <li>
                            <a href="it_agency_rtl.html">IT Agency RTL</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <a className={colorText} href="blog.html">
                      Services
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="service.html">Service Layout 1</a>
                      </li>
                      <li>
                        <a href="service_2.html">Service Layout 2</a>
                      </li>
                      <li>
                        <a href="service_3.html">Service Layout 3</a>
                      </li>
                      <li>
                        <a href="service_4.html">Service Layout 4</a>
                      </li>
                      <li>
                        <a href="service_details.html">Service Details</a>
                      </li>
                    </ul>
                  </li>              
                  <li>
                    <a className={colorText} href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header__hamburger ml-50 d-none">
                <button
                  type="button"
                  className="hamburger-btn offcanvas-open-btn"
                >
                  <span>01</span>
                  <span>01</span>
                  <span>01</span>
                </button>
              </div>
            </div>
          </div>
          <div className="header_right">
            <ul className="header_btns_group unordered_list_end d-none d-md-flex">
              <li>
                <a href="contact.html" className="bd-btn-link outline-dark">
                  <span className="bd-button-content-wrapper">
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">Get a Quotes</span>
                        <span className="bd-button-text">Get a Quotes</span>
                      </span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
            <div className="offcanvas-toggle d-lg-none">
              <a className="bar-icon" href="javascript:void(0)">
                <span></span>
                <span>
                  <small></small>
                </span>
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
