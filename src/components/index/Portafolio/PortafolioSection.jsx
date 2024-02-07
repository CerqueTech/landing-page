import Slider from "react-slick";
import PortafolioElement from "./PortafolioElement";
import getData from "../../../services/data";
import { useState,useEffect } from "react";
export default function PortafolioSection(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(`${props.lang}/index/portafolio`);
      setData(result);
    };

    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    easing: "ease-in",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className="container">
      <div className="section_heading text-white text-center">
        <h2
          className="heading_subtitle text-uppercase"
          style={{ color: "#000" }}
        >
          <span className="double_icon">
            <i className="fas fa-sharp fa-square-full"></i>
            <i className="fas fa-sharp fa-square-full"></i>
          </span>
          <span>{data.span1}</span>
        </h2>
        <h3 className="heading_title mb-0" style={{ color: "#000" }}>
          {data.h3}
        </h3>
      </div>
      <div className="portfolio_carousel">
        <div className="common_carousel_centered"></div>
        <Slider {...settings}>
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_1.jpg"
            signTitle={data.portElem1title}
            signDescription={data.portElem1Desc}
          />
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_2.jpg"
            signTitle={data.portElem2title}
            signDescription={data.portElem2Desc}
          />
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_3.jpg"
            signTitle={data.portElem3title}
            signDescription={data.portElem3Desc}
          />
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_4.jpg"
            signTitle={data.portElem4title}
            signDescription={data.portElem4Desc}
          />
        </Slider>
      </div>
    </div>
  );
}
