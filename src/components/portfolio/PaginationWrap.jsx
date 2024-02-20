import { useEffect, useState } from "react";
import { $theme } from "../../environment/theme";
import { useStore } from "@nanostores/react";
const PaginationWrap = ({ btnTxtPrev, btnTxtNext, portFolio }) => {
  const portFolios = ["portfolio1", "portfolio2", "portfolio3", "portfolio4"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useStore($theme);
  const nextPage = portFolios[(currentIndex + 1) % portFolios.length];
  const prevPage =
    portFolios[(currentIndex - 1 + portFolios.length) % portFolios.length];

  useEffect(() => {
    const index = portFolios.indexOf(portFolio);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [portFolio]);

  return (
    <div className="pagination_wrap" style={{ width: "100%" }}>
      <div className="other_post_pagination">
        <a href={`${prevPage}`} data-cursor="-exclusion -lg" data-astro-reload>
          <span className="btn_text">{btnTxtPrev}</span>
          <span className="btn_icon">
            <img
              src={`/assets/images/icons/icon_arrow_down_left_${
                theme === "dark" ? "white" : "dark"
              }.svg`}
              alt="Icon Arrow Down Left"
            />
            <img
              src="/assets/images/icons/icon_arrow_left_primary.svg"
              alt="Icon Arrow Down Left"
            />
          </span>
        </a>
        <a href={`${nextPage}`} data-cursor="-exclusion -lg" data-astro-reload>
          <span className="btn_text">{btnTxtNext}</span>
          <span className="btn_icon">
            <img
              src={`/assets/images/icons/icon_arrow_down_right_${
                theme === "dark" ? "white" : "dark"
              }.svg`}
              alt="Icon Arrow Down Right"
            />
            <img
              src="/assets/images/icons/icon_arrow_right_primary.svg"
              alt="Arrow Down Right"
            />
          </span>
        </a>
      </div>
    </div>
  );
};
export default PaginationWrap;
