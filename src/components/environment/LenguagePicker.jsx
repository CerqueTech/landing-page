import { useEffect, useState } from "react";
import { getRouteFromUrl } from "../../i18n/utils";

/*Tener cuidado porque estoy usando el path del url*/
/*A Consultar */
const LanguagePicker = ({ url }) => {
  const [valuelang, setValuelang] = useState(url.pathname.split("/")[1]);
  useEffect(() => {
    setValuelang(url.pathname.split("/")[1]);
  }, [url.pathname]);

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    const route = getRouteFromUrl(url);
    const currentLanguage = route;

    if (currentLanguage === newLanguage) {
      return;
    }
    localStorage.setItem("lang", newLanguage);
    const urlTranslate = currentLanguage
      ? `/${newLanguage}/${route}`
      : `/${newLanguage}`;
    window.location.href = urlTranslate;
  };

  return (
    <div className="select_option m-0">
      <div className="icon_wrap">
        <img src="/assets/images/icons/icon_globe.svg" alt="Globe Icon" />
      </div>
      <select
        style={{
          border: "none",
          background: "inherit",
        }}
        onChange={handleChange}
        value={valuelang}
      >
        <option value="es">Español</option>
        <option value="en">Inglés</option>
      </select>
    </div>
  );
};

export default LanguagePicker;
