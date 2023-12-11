
/*
import React, { useEffect, useRef, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import 'odometer/themes/odometer-theme-default.css';

const CounterItem = ({ count, title, supText, parallaxY, smoothness }) => {
  const odometerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible && typeof document !== 'undefined') {
      import('odometer').then((Odometer) => {
        const odometerInstance = new Odometer.default({
          el: odometerRef.current,
          value: 0,
          format: '(,ddd)',
          duration: 1000,
        });

        odometerInstance.update(count);

        return () => {
          odometerInstance.remove();
        };
      });
    }
  }, [count, isVisible]);

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visibility) => {
        if (visibility) {
          setIsVisible(true);
        }
      }}
    >
      <div className={`col-lg-4 col-md-6 col-sm-12`} data-parallax={`{"y": ${parallaxY}, "smoothness": ${smoothness}}`}>
        <div className="counter_item mb-5 mb-lg-0">
          <div className="counter_value">
            <span className="odometer" ref={odometerRef}></span>
            <sup className='m-2'>{supText}</sup>
          </div>
          <h3 className="counter_title mb-0">{title}</h3>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default CounterItem;
*/
import React, { useEffect, useRef, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import 'odometer/themes/odometer-theme-default.css';

const CounterItem = ({ count, title, supText, parallaxY, smoothness }) => {
  const odometerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible && typeof document !== 'undefined') {
      import('odometer').then((Odometer) => {
        const odometerInstance = new Odometer.default({
          el: odometerRef.current,
          value: 0,
          format: '(,ddd)',
          duration: 1000,
        });

        odometerInstance.update(count);

        return () => {
          odometerInstance.remove();
        };
      });
    }
  }, [count, isVisible]);

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visibility) => {
        if (visibility) {
          setIsVisible(true);
        }
      }}
    >
      <div className={`col-lg-4 col-md-6 col-sm-12`} data-parallax={`{"y": ${parallaxY}, "smoothness": ${smoothness}}`}>
        <div className="counter_item mb-5 mb-lg-0">
          <div className="counter_value">
            <span className="odometer" ref={odometerRef}></span>
            <sup className='m-2'>{supText}</sup>
          </div>
          <h3 className="counter_title mb-0">{title}</h3>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default CounterItem;
