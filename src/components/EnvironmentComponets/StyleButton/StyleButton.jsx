import "./StyleButton.css";
import { useState } from "react";
export default function StyleButton() {
  const [style, setStyle] = useState(false);
  const swap = () => {
    setStyle(!style);
  };
  const darkMode = () => {
    document.body.style.backgroundColor = "#050122";
  };
  return (
    <div className="boton" onClick={darkMode}>
      <input type="checkbox" id="btn-switch" />
      <label
        htmlFor="btn-switch"
        className="lbl-switch"
        id="lbl-switch"
      ></label>
    </div>
  );
}
