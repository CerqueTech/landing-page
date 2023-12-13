import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const StepItem = ({ delay, title }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      const animation = gsap
        .timeline({ paused: true })
        .set(element, { opacity: 0, y: 50 })
        .to(element, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: parseFloat(delay) || 0,
          ease: "power3.out",
        });

      animation.play();
    }
  }, [delay]);

  return (
    <div className="content_wrap" ref={contentRef}>
      <div className="item_icon">
        <img src="assets/images/icons/icon_team_white.svg" alt="Icono" />
      </div>
      <h3 className="item_title m-0">{title}</h3>
    </div>
  );
};

export default StepItem;
