import { languages } from "../../i18n/ui";
const LenguaguePicker = () => {
  return (
    <div className="select_option m-0">
      <div className="icon_wrap">
        <img src="/assets/images/icons/icon_globe.svg" alt="Globe Icon" />
      </div>
      <select defaultValue="es">
        <option value="es">Español</option>
        <option value="en">Inglés</option>
      </select>
    </div>
  );
};
export default LenguaguePicker;
