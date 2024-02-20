import { atom } from "nanostores";
const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme ? storedTheme : "light";
};

export const $theme = atom(getInitialTheme());
