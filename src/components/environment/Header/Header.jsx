import { useState, useEffect } from "react";
import Offcanvas from "../Offcanvas/Offcanvas.jsx";
import StyleButton from "../StyleButton/StyleButton.jsx";
const Header = (props) => {
  const [isSticky, setSticky] = useState(false);
  const [elemOpen, setElemOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
     document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClass = isSticky
    ? "site_header site_header_3 sticky"
    : "site_header site_header_3";

  const swapElems = () => {
    setElemOpen(!elemOpen);
  };
  return (
    <>
      <Offcanvas open={elemOpen} updateOpen={swapElems} transition:animate="none"/>
      <div className={headerClass}>
        <div className="container">
          <div className="header_wrapper">
            <div className="site_logo">
              <a className="site_link" href="/">
                <img src={"assets/images/logo/dark_without_icon.png"} />
              </a>
            </div>
            <div className="mean__menu-wrapper d-none d-lg-block">
              <div className={"main-menu " + props.menu}>
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <a className="a_inicio" href="/"
                       >
                        Inicio
                      </a>{" "}
                      {/*Revisar bien esto..*/}
                    </li>
                    <li>
                      <a
                        className="a_servicios"
                        href="service"
                        
                      >
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a
                        className="a_servicios"
                        href="about-us"
                        
                      >
                        Nosotros
                      </a>
                    </li>
                    <li>
                      <a
                        className="a_contacto"
                        href="contact"
                        
                      >
                        Contactanos
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
              <ul className="header_btns_group unordered_list_end d-none d-md-inline-flex">
                <li>
                  <StyleButton />
                </li>
                <li>
                  <a
                    href="contact"
                    className={
                      "bd-btn-link outline-" +
                      (props.menu == "" ? "dark" : "white")
                    }
                  >
                    <span className="bd-button-content-wrapper">
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">Cotizar</span>
                          <span className="bd-button-text">Cotizar</span>
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="offcanvas-toggle d-lg-none" onClick={swapElems}>
                <a
                  className={
                    "bar-icon" + (props.menu === "" ? "" : " is-white")
                  }
                >
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
    </>
  );
};
export default Header;
