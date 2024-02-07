import Slider from "react-slick";
import ProvidingElement from "./ProvidingElement";
import getData from "../../../services/data";
import { useState, useEffect } from "react";
const ProdivingSection = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(`${props.lang}/index/providing`);
      setData(result);
    };
    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,
    easing: "ease-in",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="section_heading style_4 text-center">
        <h2 className="heading_subtitle text-uppercase">
          <span>{data.span}</span>
        </h2>
        <h3 className="heading_title mb-0">{data.h3}</h3>
      </div>
      <div className="common_carousel_4col row">
        <Slider {...settings}>
          <ProvidingElement
            shape="assets/images/shapes/shape_color_1.svg"
            iconImage="/assets/images/icons/icon_code_5.svg"
            title={data.elem1Title}
            description={data.elem1Desc}
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_2.svg"
            iconImage="assets/images/icons/icon_house_2.svg"
            title={data.elem2Title}
            description={data.elem2Desc}
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_3.svg"
            iconImage="assets/images/icons/icon_grid_2.svg"
            title={data.elem3Title}
            description={data.elem3Desc}
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_4.svg"
            iconImage="/assets/images/icons/icon_speaker.svg"
            title={data.elem4Title}
            description={data.elem4Desc}
          />

          <ProvidingElement
            shape="/assets/images/shapes/shape_color_5.svg"
            iconImage="/assets/images/icons/icon_camera_2.svg"
            title={data.elem5Title}
            description={data.elem5Desc}
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_6.svg"
            iconImage="assets/images/icons/icon_code_4.svg"
            title={data.elem6Title}
            description={data.elem6Desc}
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_7.svg"
            iconImage="assets/images/icons/icon_idea_3.svg"
            title={data.elem7Title}
            description={data.elem7Desc}
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_8.svg"
            iconImage="assets/images/icons/icon_cog.svg"
            title={data.elem8Title}
            description={data.elem8Desc}
          />
        </Slider>
      </div>
    </div>
  );
};

export default ProdivingSection;
