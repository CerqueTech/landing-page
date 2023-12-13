import React, { useEffect, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "odometer/themes/odometer-theme-default.css";

const CounterItem = ({ count, title, supText, parallaxY, smoothness }) => {
  const odometerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [odometerInstance, setOdometerInstance] = useState(null);

  useEffect(() => {
    if (isVisible && odometerRef.current && !odometerInstance) {
      import("odometer").then((Odometer) => {
        const newOdometerInstance = new Odometer.default({
          el: odometerRef.current,
          value: 0,
          format: "(,ddd)",
          duration: 1000,
        });

        newOdometerInstance.update(count);
        setOdometerInstance(newOdometerInstance);
      });
    } 
    else if (!isVisible && odometerInstance) {
      odometerInstance.update(0);
      setOdometerInstance(null);
    }
  }, [count, isVisible, odometerInstance]);


  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visibility) => {
        if (visibility) {
          setIsVisible(true);
        }
        else{
          setIsVisible(false);
        }
      }}
    >
      <div
        className={`col-lg-4 col-md-6 col-sm-12`}
        data-parallax={`{"y": ${parallaxY}, "smoothness": ${smoothness}}`}
      >
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
