import { $theme } from "../../environment/theme";
import { useStore } from "@nanostores/react";

const Logo = ({ srcwith, srcdark, alt }) => {
  const theme = useStore($theme);

  return (
    <img
      style={{ height: "150px", marginTop: "-2em" }}
      src={theme === "dark" ? srcwith : srcdark}
      alt={alt}
    />
  );
};

export default Logo;
