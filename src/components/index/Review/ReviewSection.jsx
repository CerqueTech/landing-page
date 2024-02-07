import React, { useRef } from "react";
import Slider from "react-slick";
import ReviewElement from "./ReviewElement";
import getData from "../../../services/data";
const data = await getData("es/index/review");
export default function ReviewSection() {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: "ease-in",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
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

  const sliderRef = useRef(null);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="container">
      <div className="section_heading text-center text-white">
        <h2 className="heading_subtitle">
          <span className="double_icon">
            <i className="fas fa-sharp fa-square-full"></i>
            <i className="fas fa-sharp fa-square  -full"></i>
          </span>
          <span>{data.span}</span>
        </h2>
        <h3 className="heading_title mb-0">{data.h3}</h3>
      </div>
      <div className="review_carousel_3">
        <Slider ref={sliderRef} {...settings}>
          <ReviewElement
            title={data.elem1Title}
            start={5}
            content={data.elem1Content}
            icon="assets/images/icons/icon_quote_dark.svg"
            img="assets/images/meta/avatar_2.png"
            name={data.elem1Name}
            designation={data.elem1Designation}
          />
          <ReviewElement
            title={data.elem2Title}
            start={4}
            content={data.elem2Content}
            icon="assets/images/icons/icon_quote_dark.svg"
            img="assets/images/meta/avatar_3.png"
            name={data.elem2Name}
            designation={data.elem2Designation}
          />
          <ReviewElement
            title={data.elem3Title}
            start={4}
            content={data.elem3Content}
            icon="assets/images/icons/icon_quote_dark.svg"
            img="assets/images/meta/avatar_1.png"
            name={data.elem3Name}
            designation={data.elem3Designation}
          />
        </Slider>
        <ul className="carousel_arrow unordered_list_center">
          <li>
            <button
              type="button"
              className="cc2c_left_arrow"
              onClick={goToPrev}
            >
              <i className="far fa-arrow-left"></i>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="cc2c_right_arrow"
              onClick={goToNext}
            >
              <i className="far fa-arrow-right"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
