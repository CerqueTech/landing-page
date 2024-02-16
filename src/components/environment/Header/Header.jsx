import { useState, useEffect } from "react";
import Offcanvas from "../Offcanvas/Offcanvas.jsx";
import StyleButton from "../StyleButton/StyleButton.jsx";
import getData from "../../../services/data.ts";
import LenguaguePicker from "../LenguagePicker.jsx";
export default function Header(props) {
  const [isSticky, setSticky] = useState(false);
  const [elemOpen, setElemOpen] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(`${props.lang}/enviroment/header`);
      setData(result);
    };
    fetchData();
  }, []);
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

  const headerClass = isSticky
    ? "site_header site_header_3 sticky"
    : "site_header site_header_3";

  const swapElems = () => {
    setElemOpen(!elemOpen);
  };
  const updateOpen = () => {
    swapElems();
  };

  return (
    <>
      <Offcanvas
        open={elemOpen}
        updateOpen={updateOpen}
        data={data}
        lang={props.lang}
      />
      <div className={headerClass}>
        <div className="container">
          <div className="header_wrapper">
            <div className="site_logo">
              <a
                className="site_link"
                href={`/${props.lang}`}
                data-astro-reload
              >
                <img src={"/assets/images/logo/dark_without_icon.png"} />
              </a>
            </div>
            <div className="mean__menu-wrapper d-none d-lg-block">
              <div className={"main-menu " + props.menu}>
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <a
                        className="a_inicio"
                        href={`/${props.lang}`}
                        data-astro-reload
                      >
                        {data.home}
                      </a>
                    </li>
                    <li>
                      <a
                        className="a_servicios"
                        href={`/${props.lang}/${data.s}/`}
                        data-astro-reload
                      >
                        {data.services}
                      </a>
                    </li>
                    <li>
                      <a
                        className="a_servicios"
                        href={`/${props.lang}/${data.a}/`}
                        data-astro-reload
                      >
                        {data.about}
                      </a>
                    </li>
                    <li>
                      <a
                        className="a_contacto"
                        href={`/${props.lang}/${data.c}/`}
                        data-astro-reload
                      >
                        {data.contact}
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
                  <LenguaguePicker
                    lang={props.lang}
                    url={props.url}
                    path={props.url.pathname}
                  />
                </li>
                <li>
                  <StyleButton />
                </li>
                <li>
                  <a
                    href={`/${props.lang}/${data.c}/`}
                    className={
                      "bd-btn-link outline-" +
                      (props.menu == "" ? "dark" : "white")
                    }
                    transition:animate="none"
                    data-astro-reload
                  >
                    <span className="bd-button-content-wrapper">
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">{data.quote}</span>
                          <span className="bd-button-text">{data.quote}</span>
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
}
