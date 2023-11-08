import Slider from "react-slick";

const PortafolioSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
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
          <div className="carousel_item">
            <div className="portfolio_item layout_fullimage">
              <div className="item_image">
                <a href="portfolio_details.html">
                  <img
                    src="/assets/images/portfolio/portfolio_lfi_image_1.jpg"
                    alt="Paradox Portfolio Image"
                  />
                </a>
              </div>
              <div className="item_content">
                <ul className="category_list unordered_list">
                  <li>
                    <a href="#!">Mobile App</a>
                  </li>
                </ul>
                <h3 className="item_title mb-0">
                  <a href="portfolio_details.html">
                    Mobile Furniture Store App
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="portfolio_item layout_fullimage">
              <div className="item_image">
                <a href="portfolio_details.html">
                  <img
                    src="/assets/images/portfolio/portfolio_lfi_image_2.jpg"
                    alt="Paradox Portfolio Image"
                  />
                </a>
              </div>
              <div className="item_content">
                <ul className="category_list unordered_list">
                  <li>
                    <a href="#!">UI/UX</a>
                  </li>
                </ul>
                <h3 className="item_title mb-0">
                  <a href="portfolio_details.html">
                    Street Art Map of the City
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="portfolio_item layout_fullimage">
              <div className="item_image">
                <a href="portfolio_details.html">
                  <img
                    src="/assets/images/portfolio/portfolio_lfi_image_3.jpg"
                    alt="Paradox Portfolio Image"
                  />
                </a>
              </div>
              <div className="item_content">
                <ul className="category_list unordered_list">
                  <li>
                    <a href="#!">Webpage</a>
                  </li>
                </ul>
                <h3 className="item_title mb-0">
                  <a href="portfolio_details.html">
                    Crafting Effective Landing Page
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="portfolio_item layout_fullimage">
              <div className="item_image">
                <a href="portfolio_details.html">
                  <img
                    src="/assets/images/portfolio/portfolio_lfi_image_4.jpg"
                    alt="Paradox Portfolio Image"
                  />
                </a>
              </div>
              <div className="item_content">
                <ul className="category_list unordered_list">
                  <li>
                    <a href="#!">Product</a>
                  </li>
                </ul>
                <h3 className="item_title mb-0">
                  <a href="portfolio_details.html">
                    3D Package Tracking Delivery
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PortafolioSection;