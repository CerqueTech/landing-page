import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [visible, setVisible] = useState('visible');

  useEffect(() => {
    const hidePreloader = () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('hidden');
        setVisible('hidden');
      }
    };
    hidePreloader();
    return () => {
      window.removeEventListener('load', hidePreloader);
    };
  }, []);

  return (
    <div className={'preloader ' + visible} id="preloader">
      <div className="sk-three-bounce">
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
      </div>
    </div>
  );
};

export default Preloader;
