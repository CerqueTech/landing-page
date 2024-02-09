import React from 'react';

const LanguagePicker = ({ url }) => {
  const handleChange = (event) => {
    const newLanguage = event.target.value;
    const currentLanguage = url && url.length >= 3 ? url.slice(1, 3) : '';
    
    if (currentLanguage === newLanguage) {
      return;
    }
    
    const urlTranslate = currentLanguage ? `/${newLanguage}${url.slice(3)}` : `/${newLanguage}`;
    window.location.href = urlTranslate;
  };

  return (
    <div className="select_option m-0">
      <div className="icon_wrap">
        <img src="/assets/images/icons/icon_globe.svg" alt="Globe Icon" />
      </div>
      <select style={{ border: "none" }} onChange={handleChange}>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
      </select>
    </div>
  );
};

export default LanguagePicker;
