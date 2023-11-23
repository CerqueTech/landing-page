import Slider from "react-slick";
import ProvidingElement from "./ProvidingElement";

const ProdivingSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="container">
      <div className="section_heading style_4 text-center">
        <h2 className="heading_subtitle text-uppercase">
          <span>Our Service</span>
        </h2>
        <h3 className="heading_title mb-0">Providing solutions</h3>
      </div>
      <div className="common_carousel_4col row" >
        <Slider {...settings}>
          <ProvidingElement 
            shape="assets/images/shapes/shape_color_1.svg"
            iconImage="/assets/images/icons/icon_code_5.svg"
            title="Development"
            description="We are help generate positive the cash flow"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_2.svg"
            iconImage="assets/images/icons/icon_house_2.svg"
            title="UX/UI Design"
            description="We are help generate positive the cash flow"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_3.svg"
            iconImage="assets/images/icons/icon_grid_2.svg"
            title="Application"
            description="We are help generate positive the cash flow"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_4.svg"
            iconImage="/assets/images/icons/icon_speaker.svg"
            title="Marketing"
            description="We are help generate positive the cash flow"
          />
          <ProvidingElement
            shape="/assets/images/shapes/shape_color_5.svg"
            iconImage="/assets/images/icons/icon_camera_2.svg"
            title="Video Editing"
            description="We are help generate positive the cash flow"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_6.svg"
            iconImage="assets/images/icons/icon_code_4.svg"
            title="Programming"
            description="We are help generate positive the cash flow"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_7.svg"
            iconImage="assets/images/icons/icon_idea_3.svg"
            title="Business"
            description="We are help generate positive the cash flow"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_8.svg"
            iconImage="assets/images/icons/icon_cog.svg"
            title="Tech Support"
            description="We are help generate positive the cash flow"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_5.svg"
            iconImage="assets/images/icons/icon_camera_2.svg"
            title="Video Editing"
            description=" We are help generate positive the cash flow"
          />
        </Slider>
      </div>
    </div>
  );
};
export default ProdivingSection;
