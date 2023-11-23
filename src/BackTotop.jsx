import React, { useState, useEffect } from "react";

import { animateScroll as scroll } from 'react-scroll';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

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

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuint'
    });
  };

  return (
    <div
      className={
        showButton
          ? "backtotop position-fixed"
          : "backtotop position-fixed hidden"
      }>
      <a href="#" className="scroll" onClick={scrollToTop}>
        <i className="far fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default BackToTop;
