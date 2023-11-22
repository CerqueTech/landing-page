import Slider from "react-slick";
import PortafolioElement from "./PortafolioElement";
const PortafolioSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div className="section_heading text-white text-center">
        <h2 className="heading_subtitle text-uppercase">
          <span className="double_icon">
            <i className="fas fa-sharp fa-square-full"></i>
            <i className="fas fa-sharp fa-square-full"></i>
          </span>
          <span>Our Work</span>
        </h2>
        <h3 className="heading_title mb-0">Our Latest Work</h3>
      </div>
      <div className="portfolio_carousel">
        <div className="common_carousel_centered"></div>
        <Slider {...settings}>
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_1.jpg"
            signTitle="Mobile App"
            signDescription="Mobile Furniture Store App"
          />
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_2.jpg"
            signTitle="UI/UX"
            signDescription=" Street Art Map of the City"
          />
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_3.jpg"
            signTitle="Webpage"
            signDescription="Crafting Effective Landing Page"
          />
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_4.jpg"
            signTitle="Product"
            signDescription="3D Package Tracking Delivery"
          />
        </Slider>
      </div>
    </div>
  );
};

export default PortafolioSection;
