import { useEffect, useState } from 'react';
import { getRouteFromUrl } from '../../../i18n/utils';
import './LanguagePicker.css';

const LanguagePicker = ({ url, menu }) => {
  const [valuelang, setValuelang] = useState(url.pathname.split('/')[1]);
  useEffect(() => {
    setValuelang(url.pathname.split('/')[1]);
  }, [url.pathname]);

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    const route = getRouteFromUrl(url);
    const currentLanguage = route;

    if (currentLanguage === newLanguage) {
      return;
    }
    localStorage.setItem('lang', newLanguage);
    const urlTranslate = currentLanguage
      ? `/${newLanguage}/${route}`
      : `/${newLanguage}`;
    window.location.href = urlTranslate;
  };

  return (
    <div className="select_option m-0">
      <div className="icon_wrap">
        <img
          src={
            menu === 'main-menu-3'
              ? '/assets/images/icons/icon_globe_2.svg'
              : '/assets/images/icons/icon_globe.svg'
          }
          height={20}
          width={20}
          alt="Globe Icon"
        />
      </div>
      <select
        onChange={handleChange}
        value={valuelang}
        className={menu === 'main-menu-3' ? 'white' : 'dark'}
      >
        <option className={menu === 'main-menu-3' ? 'menu3' : ''} value="es">
          Español
        </option>
        <option className={menu === 'main-menu-3' ? 'menu3' : ''} value="en">
          Inglés
        </option>
      </select>
    </div>
  );
};

export default LanguagePicker;
