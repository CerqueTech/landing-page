import React, { useState, useEffect } from 'react';
import './Preloader.css'; 

const Preloader = () => {
  useEffect(() => {
    const hidePreloader = () => {
      window.addEventListener("load",function(){this.document.getElementById("preloader").classList.toggle("hidden")})
    };
  }, []);

  return (
    <div className="preloader" id='preloader'>
      <div className="sk-three-bounce">
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
      </div>
    </div>
  );
};

export default Preloader;
