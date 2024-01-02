import { useState, useEffect } from 'react';
import Offcanvas from '../Offcanvas/Offcanvas.jsx';
import StyleButton from '../StyleButton/StyleButton.jsx';
export default function Header(props) {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = isSticky
    ? 'site_header site_header_3 sticky'
    : 'site_header site_header_3';

  const swapElems = () => {
    setElemOpen(!elemOpen);
  };
  const updateOpen = () => {
    swapElems();
  };
  return (
    <>
      <Offcanvas open={elemOpen} updateOpen={updateOpen} />
      <div className={headerClass}>
        <div className="container">
          <div className="header_wrapper">
            <div className="site_logo">
              <a className="site_link" href="index.html">
                <img
                  src={
                    'assets/images/logo/' +
                    (props.menu == '' ? 'white_one_line.png' : 'dark_one_line.png')
                  }
                />
              </a>
            </div>
            <div className="mean__menu-wrapper d-none d-lg-block">
              <div className={'main-menu ' + props.menu}>
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <a href="index.html">Inicio</a>
                    </li>
                    <li>
                      <a href="service.html">Servicios</a>
                    </li>
                    <li>
                      <a href="contact.html">Contactanos</a>
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
                    href="contact.html"
                    className={
                      'bd-btn-link outline-' +
                      (props.menu == '' ? 'dark' : 'white')
                    }
                  >
                    <span className="bd-button-content-wrapper">
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">Cotizaciones</span>
                          <span className="bd-button-text">Cotizaciones</span>
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="offcanvas-toggle d-lg-none" onClick={swapElems}>
                <a
                  className={
                    'bar-icon' + (props.menu === '' ? '' : ' is-white')
                  }
                  href=""
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
}
