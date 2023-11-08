import Slider from "react-slick";
const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-xl-6 col-lg-6 p-0">
          <div className="testimonial-player">
            <div className="video_widget rounded-0">
              <img
                src="assets/images/video/video_poster_image_2.jpg"
                alt="Paradox Video Poster Image"
              />
              <a
                className="video_play_icon popup_video"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              >
                <span className="icon_wrap" data-magnetic>
                  <i className="fas fa-play"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col col-xl-6 col-lg-6 p-lg-0">
          <div className="review_carousel_4"></div>
          <div className="common_carousel_1col row">
            <Slider {...settings}>
              <div className="carousel_item col">
                <div className="review_item style_3">
                  <h3 className="review_title">Best Customer Support</h3>
                  <ul className="rating_star unordered_list">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <p className="review_content">
                    Customer feedback will help you understand exactly how
                    your customers experience your service or product and
                    fixing their concerns will lead to an improved client
                    experience. Customer satisfaction leads to customer
                    retention Excellent.
                  </p>
                  <span className="quote_icon">
                    <img
                      src="assets/images/icons/icon_quote_dark.svg"
                      alt="Paradox Icon Quote"
                    />
                  </span>
                  <div className="admin_item">
                    <div className="admin_thumbnail">
                      <img
                        src="assets/images/meta/avatar_1.png"
                        alt="Admin Avatar"
                      />
                    </div>
                    <div className="admin_info">
                      <h3 className="admin_name">Manuel K. Peoples</h3>
                      <span className="admin_designation">Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel_item col">
                <div className="review_item style_3">
                  <h3 className="review_title">Best Customer Support</h3>
                  <ul className="rating_star unordered_list">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <p className="review_content">
                    Customer feedback will help you understand exactly how
                    your customers experience your service or product and
                    fixing their concerns will lead to an improved client
                    experience. Customer satisfaction leads to customer
                    retention Excellent.
                  </p>
                  <span className="quote_icon">
                    <img
                      src="assets/images/icons/icon_quote_dark.svg"
                      alt="Paradox Icon Quote"
                    />
                  </span>
                  <div className="admin_item">
                    <div className="admin_thumbnail">
                      <img
                        src="assets/images/meta/avatar_2.png"
                        alt="Admin Avatar"
                      />
                    </div>
                    <div className="admin_info">
                      <h3 className="admin_name">Manuel K. Peoples</h3>
                      <span className="admin_designation">Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel_item col">
                <div className="review_item style_3">
                  <h3 className="review_title">Best Customer Support</h3>
                  <ul className="rating_star unordered_list">
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                    <li>
                      <i className="fas fa-star"></i>
                    </li>
                  </ul>
                  <p className="review_content">
                    Customer feedback will help you understand exactly how
                    your customers experience your service or product and
                    fixing their concerns will lead to an improved client
                    experience. Customer satisfaction leads to customer
                    retention Excellent.
                  </p>
                  <span className="quote_icon">
                    <img
                      src="assets/images/icons/icon_quote_dark.svg"
                      alt="Paradox Icon Quote"
                    />
                  </span>
                  <div className="admin_item">
                    <div className="admin_thumbnail">
                      <img
                        src="assets/images/meta/avatar_3.png"
                        alt="Admin Avatar"
                      />
                    </div>
                    <div className="admin_info">
                      <h3 className="admin_name">Manuel K. Peoples</h3>
                      <span className="admin_designation">Director</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;