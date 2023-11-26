import React, { useState, useEffect } from "react";

import { animateScroll as scroll } from "react-scroll";

import "./BackToTop.css";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop
      /*{
      duration: 200,
      delay:50, 
      smooth: true,
      offset:-10,
    }
    */
      ();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`backtotop position-fixed ${showButton ? "" : "hidden"}`} onClick={scrollToTop}>
      <a href="#" className="scroll">
        <i className="far fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default BackToTop;
