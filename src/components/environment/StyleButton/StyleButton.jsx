import "./StyleButton.css";
import { useState, useEffect } from "react";

export default function StyleButton() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme || "light";
    document.documentElement.setAttribute("data-theme", initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <button className={"switch" + (theme === "dark" ? " active" : "")} id="switch" onClick={toggle}>
      <span>
        <i className="fas fa-sun"></i>
      </span>
      <span>
        <i className="fas fa-moon"></i>
      </span>
    </button>
  );
}
