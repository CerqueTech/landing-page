import React from 'react';

const LanguagePicker = (props) => {
  const handleChange = (event) => {
    const newLanguage = event.target.value;
    let urlTranslate;
    if (props.url && props.url.length >= 3) {
      urlTranslate = `/${newLanguage}${props.url.slice(3)}`;
    } else {
      urlTranslate = `/${newLanguage}`;
    }
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
