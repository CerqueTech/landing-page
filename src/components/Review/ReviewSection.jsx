import Slider from "react-slick";
import ReviewElement from "./ReviewElement";
const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 6000,
    easing: 'ease-in',
    pauseOnHover: false, 
    pauseOnFocus: false,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-xl-6 col-lg-6 p-0">
          <div className="testimonial-player">
            <div className="video_widget rounded-0">
              <img
                src="assets/images/video/video_poster_image_1.jpg"
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
              <ReviewElement
                title="Mejor atención al cliente"
                content="Los comentarios de los clientes le ayudarán a comprender exactamente cómo
                sus clientes experimentan su servicio o producto y
                solucionar sus inquietudes conducirá a un mejor cliente
                experiencia. La satisfacción del cliente conduce al cliente.
                retención Excelente."
                icon="/assets/images/icons/icon_quote_dark.svg"
                imgAdmin="assets/images/meta/avatar_1.png"
                adminName="Manuel K. Peoples"
                adminDesignation="Director"
              />

              <ReviewElement
                title="Mejor atención al cliente"
                content="Los comentarios de los clientes le ayudarán a comprender exactamente cómo
                sus clientes experimentan su servicio o producto y
                solucionar sus inquietudes conducirá a un mejor cliente
                experiencia. La satisfacción del cliente conduce al cliente.
                retención Excelente."
                icon="/assets/images/icons/icon_quote_dark.svg"
                imgAdmin="assets/images/meta/avatar_2.png"
                adminName="Manuel K. Peoples"
                adminDesignation="Director"
              />

              <ReviewElement
                title="Mejor atención al cliente"
                content="Los comentarios de los clientes le ayudarán a comprender exactamente cómo
                sus clientes experimentan su servicio o producto y
                solucionar sus inquietudes conducirá a un mejor cliente
                experiencia. La satisfacción del cliente conduce al cliente.
                retención Excelente."
                icon="/assets/images/icons/icon_quote_dark.svg"
                imgAdmin="assets/images/meta/avatar_3.png"
                adminName="Manuel K. Peoples"
                adminDesignation="Director"
              />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
