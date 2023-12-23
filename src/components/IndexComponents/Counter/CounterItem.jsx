import React, { useEffect, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "odometer/themes/odometer-theme-default.css";

const CounterItem = ({ count, title, supText,dataParallax }) => {
  const odometerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [odometerInstance, setOdometerInstance] = useState(null);

  useEffect(() => {
    let unmounted = false;

    if (isVisible && odometerRef.current && !odometerInstance) {
      import("odometer").then((Odometer) => {
        if (!unmounted) {
          const newOdometerInstance = new Odometer.default({
            el: odometerRef.current,
            value: 0,
            format: "(,ddd)",
            duration: 1000,
          });

          newOdometerInstance.update(count);
          setOdometerInstance(newOdometerInstance);
        }
      });
    } else if (!isVisible && odometerInstance) {
      odometerInstance.update(0);
      setOdometerInstance(null);
    }

    return () => {
      unmounted = true;
    };
  }, [count, isVisible, odometerInstance]);

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visibility) => {
        setIsVisible(visibility);
      }}
    >
      <div className="col-lg-4 col-md-6 col-sm-12"  data-parallax={dataParallax}>
        <div className="counter_item mb-5 mb-lg-0">
          <div className="counter_value">
            <span className="odometer" ref={odometerRef}></span>
            <sup className="m-2">{supText}</sup>
          </div>
          <h3 className="counter_title mb-0">{title}</h3>
        </div>
      </div>
    </VisibilitySensor>
    );
  
};

export default CounterItem;
