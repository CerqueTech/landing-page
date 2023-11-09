import Slider from "react-slick";
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
      <div className="common_carousel_4col row" data-slick='{"arrows": false}'>
        <Slider {...settings}>
          <div className="carousel_item col">
            <div className="service_item style_4 bg-white">
              <div
                className="item_icon"
                style={{
                  backgroundImage: "assets/images/shapes/shape_color_1.svg",
                }}
              >
                <img
                  src="/assets/images/icons/icon_code_5.svg"
                  alt="Paradox Icon"
                />
              </div>
              <div className="item_content">
                <h3 className="item_title">Development</h3>
                <p className="item_description">
                  We are help generate positive the cash flow
                </p>
              </div>
              <a
                className="item_details_btn"
                href="service_details.html"
                data-magnetic
                data-cursor="-opaque"
              >
                <span className="btn_icon">
                  <img
                    src="assets/images/icons/icon_arrow_down_right_dark_2.svg"
                    alt="Paradox icons"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="carousel_item col">
            <div className="service_item style_4 bg-white">
              <div
                className="item_icon"
                style={{
                  backgroundImage: "assets/images/shapes/shape_color_2.svg",
                }}
              >
                <img
                  src="assets/images/icons/icon_house_2.svg"
                  alt="Paradox Icon"
                />
              </div>
              <div className="item_content">
                <h3 className="item_title">UX/UI Design</h3>
                <p className="item_description">
                  We are help generate positive the cash flow
                </p>
              </div>
              <a
                className="item_details_btn"
                href="service_details.html"
                data-magnetic
                data-cursor="-opaque"
              >
                <span className="btn_icon">
                  <img
                    src="assets/images/icons/icon_arrow_down_right_dark_2.svg"
                    alt="Paradox icons"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="carousel_item col">
            <div className="service_item style_4 bg-white">
              <div
                className="item_icon"
                style={{
                  backgroundImage: "assets/images/shapes/shape_color_3.svg",
                }}
              >
                <img
                  src="assets/images/icons/icon_grid_2.svg"
                  alt="Paradox Icon"
                />
              </div>
              <div className="item_content">
                <h3 className="item_title">Application</h3>
                <p className="item_description">
                  We are help generate positive the cash flow
                </p>
              </div>
              <a
                className="item_details_btn"
                href="service_details.html"
                data-magnetic
                data-cursor="-opaque"
              >
                <span className="btn_icon">
                  <img
                    src="/assets/images/icons/icon_arrow_down_right_dark_2.svg"
                    alt="Paradox icons"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="carousel_item col">
            <div className="service_item style_4 bg-white">
              <div
                className="item_icon"
                style={{
                  backgroundImage: "/assets/images/shapes/shape_color_4.svg",
                }}
              >
                <img
                  src="/assets/images/icons/icon_speaker.svg"
                  alt="Paradox Icon"
                />
              </div>
              <div className="item_content">
                <h3 className="item_title">Marketing</h3>
                <p className="item_description">
                  We are help generate positive the cash flow
                </p>
              </div>
              <a
                className="item_details_btn"
                href="service_details.html"
                data-magnetic
                data-cursor="-opaque"
              >
                <span className="btn_icon">
                  <img
                    src="/assets/images/icons/icon_arrow_down_right_dark_2.svg"
                    alt="Paradox icons"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="carousel_item col">
            <div className="service_item style_4 bg-white">
              <div
                className="item_icon"
                style={{
                  backgroundImage: "/assets/images/shapes/shape_color_5.svg",
                }}
              >
                <img
                  src="/assets/images/icons/icon_camera_2.svg"
                  alt="Paradox Icon"
                />
              </div>
              <div className="item_content">
                <h3 className="item_title">Video Editing</h3>
                <p className="item_description">
                  We are help generate positive the cash flow
                </p>
              </div>
              <a
                className="item_details_btn"
                href="service_details.html"
                data-magnetic
                data-cursor="-opaque"
              >
                <span className="btn_icon">
                  <img
                    src="/assets/images/icons/icon_arrow_down_right_dark_2.svg"
                    alt="Paradox icons"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="carousel_item col">
            <div className="service_item style_4 bg-white">
              <div
                className="item_icon"
                style={{
                  backgroundImage: "assets/images/shapes/shape_color_6.svg",
                }}
              >
                <img
                  src="assets/images/icons/icon_code_4.svg"
                  alt="Paradox Icon"
                />
              </div>
              <div className="item_content">
                <h3 className="item_title">Programming</h3>
                <p className="item_description">
                  We are help generate positive the cash flow
                </p>
              </div>
              <a
                className="item_details_btn"
                href="service_details.html"
                data-magnetic
                data-cursor="-opaque"
              >
                <span className="btn_icon">
                  <img
                    src="assets/images/icons/icon_arrow_down_right_dark_2.svg"
                    alt="Paradox icons"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="carousel_item col">
            <div className="service_item style_4 bg-white">
              <div
                className="item_icon"
                style={{
                  backgroundImage: "assets/images/shapes/shape_color_7.svg",
                }}
              >
                <img
                  src="assets/images/icons/icon_idea_3.svg"
                  alt="Paradox Icon"
                />
              </div>
              <div className="item_content">
                <h3 className="item_title">Business</h3>
                <p className="item_description">
                  We are help generate positive the cash flow
                </p>
              </div>
              <a
                className="item_details_btn"
                href="service_details.html"
                data-magnetic
                data-cursor="-opaque"
              >
                <span className="btn_icon">
                  <img
                    src="assets/images/icons/icon_arrow_down_right_dark_2.svg"
                    alt="Paradox icons"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="carousel_item col">
            <div className="service_item style_4 bg-white">
              <div
                className="item_icon"
                style={{
                  backgroundImage: "assets/images/shapes/shape_color_8.svg",
                }}
              >
                <img
                  src="assets/images/icons/icon_cog.svg"
                  alt="Paradox Icon"
                />
              </div>
              <div className="item_content">
                <h3 className="item_title">Tech Support</h3>
                <p className="item_description">
                  We are help generate positive the cash flow
                </p>
              </div>
              <a
                className="item_details_btn"
                href="service_details.html"
                data-magnetic
                data-cursor="-opaque"
              >
                <span className="btn_icon">
                  <img
                    src="assets/images/icons/icon_arrow_down_right_dark_2.svg"
                    alt="Paradox icons"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="carousel_item col">
            <div className="service_item style_4 bg-white">
              <div
                className="item_icon"
                style={{
                  backgroundImage: "assets/images/shapes/shape_color_5.svg",
                }}
              >
                <img
                  src="assets/images/icons/icon_camera_2.svg"
                  alt="Paradox Icon"
                />
              </div>
              <div className="item_content">
                <h3 className="item_title">Video Editing</h3>
                <p className="item_description">
                  We are help generate positive the cash flow
                </p>
              </div>
              <a
                className="item_details_btn"
                href="service_details.html"
                data-magnetic
                data-cursor="-opaque"
              >
                <span className="btn_icon">
                  <img
                    src="assets/images/icons/icon_arrow_down_right_dark_2.svg"
                    alt="Paradox icons"
                  />
                </span>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default ProdivingSection;
