import "./Offcanvas.css";
const Offcanvas = (props) => {
  const handleCLick = () => {
    props.updateOpen();
  };
  return (
    <>
      <div className="fix">
        <div
          className={
            props.open ? "offcanvas__info info-open" : "offcanvas__info"
          }
        >
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="/" data-astro-reload>
                    <img
                      src="/assets/images/logo/dark_one_line.png"
                      alt="logo not found"
                    />
                  </a>
                </div>

                <div className="offcanvas__close" onClick={handleCLick}>
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
            </div>

            <div className="mobile-menu fix mb-4">
              <div className="mobile-menu fix mb-4 mean-container">
                <nav className="mean-nav">
                  <ul className="ul-mean ">
                    <li>
                      <a
                        href="/"
                        transition:persist="true"
                        transition:animate="none"
                        data-astro-reload
                      >
                       {props.data.home}
                      </a>
                    </li>
                    <li>
                      <a
                        href="service"
                        transition:persist="true"
                        transition:animate="none"
                        data-astro-reload
                      >
                        {props.data.services}
                      </a>
                    </li>
                    <li>
                      <a
                        href="about-us"
                        transition:persist="true"
                        transition:animate="none"
                        data-astro-reload
                      >
                       {props.data.about}
                      </a>
                    </li>
                    <li>
                      <a
                        href="contact"
                        transition:persist="true"
                        transition:animate="none"
                        data-astro-reload
                      >
                        {props.data.contact}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="offcanvas__contact text-center">
              <h4 className="offcanvas__title">{props.data.offcanvasTitle}</h4>
              <div className="offcanvas__contact-text mb-2">
                <p>
                  <a
                    href="mailto:mateo.cerquetella@cerquetech.com"
                    target="_blank"
                    data-astro-reload
                  >
                    mateo.cerquetella@cerquetech.com
                  </a>
                </p>
                <span>
                  <a href="tel:+5491140541120" data-astro-reaload>
                    +54 911 4054-1120
                  </a>
                </span>
              </div>
              <div className="offcanvas__contact-text">
                <p>
                  <a target="_blank" href="https://www.google.com/maps">
                    San Miguel CP1613, Buenos Aires, Argentina
                  </a>
                </p>
              </div>
            </div>
            <div className="offcanvas__devider"></div>
          </div>
        </div>
      </div>
      <div
        className={
          props.open ? "offcanvas__overlay overlay-open" : "offcanvas__overlay"
        }
      ></div>
      <div className="offcanvas__overlay-white"></div>
    </>
  );
};
export default Offcanvas;
