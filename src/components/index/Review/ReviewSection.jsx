import React, { useRef } from 'react';
import Slider from 'react-slick';
import ReviewElement from './ReviewElement';

export default function ReviewSection() {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: 'ease-in',
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
          <span>Testimonios</span>
        </h2>
        <h3 className="heading_title mb-0">Lo que dicen mis clientes</h3>
      </div>

      <div className="review_carousel_3">
        <Slider ref={sliderRef} {...settings}>
          <ReviewElement
            title="Soluciones Innovadoras"
            start={5}
            content="La dedicación del equipo de Cerquetech fue más allá de lo esperado. Personalmente, siempre sentí que realmente les importaba el éxito de nuestro proyecto."
            icon="assets/images/icons/icon_quote_dark.svg"
            img="assets/images/meta/avatar_2.png"
            name="Tomas Pacios Moya"
            designation="CEO de PM Finance"
          />
          <ReviewElement
            title="Experiencia de Usuario Sobresaliente"
            start={4}
            content="Lo que más valoro de Cerquetech es su enfoque humano. Fernando, de su equipo, fue particularmente atento; su habilidad para escuchar y entender nuestras preocupaciones transformó completamente nuestra forma de trabajar."
            icon="assets/images/icons/icon_quote_dark.svg"
            img="assets/images/meta/avatar_3.png"
            name="Andres Sosa"
            designation="Maestro Mayor de Obras"
          />
          <ReviewElement
            title="Soporte Confiable y Eficaz"
            start={4}
            content="El soporte técnico de Cerquetech es confiable y siempre accesible. Su capacidad para solucionar problemas rápidamente y con eficacia nos ha ayudado a mantener nuestras operaciones funcionando sin problemas."
            icon="assets/images/icons/icon_quote_dark.svg"
            img="assets/images/meta/avatar_1.png"
            name="Trinidad Tevini"
            designation="CEO de Tevini Finance"
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
