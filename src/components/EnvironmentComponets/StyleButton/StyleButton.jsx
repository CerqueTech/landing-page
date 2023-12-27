import "./StyleButton.css";
import { useState } from "react";

export default function StyleButton() {
  const [color, setColor] = useState("");

  const toggle = () => {
    document.body.classList.toggle('dark');
    setColor((prevColor) => (prevColor === "" ? " active" : ""));
  };

  return (
    <button className={"switch" + color} id="switch" onClick={toggle}>
      <span><i className="fas fa-sun"></i></span>
      <span><i className="fas fa-moon"></i></span>
    </button>
  );
}
