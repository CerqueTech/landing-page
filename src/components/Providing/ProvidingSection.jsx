import Slider from "react-slick";
import ProvidingElement from "./ProvidingElement";

const ProdivingSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed: 10000,
    easing: 'ease-in',
    pauseOnHover: false, 
    pauseOnFocus: false,
    responsive:[
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
          centerPadding: '80px',
  			},
  		},
  		{
  			breakpoint: 575,
  			settings: {
  				slidesToShow: 1,
          slidesToScroll: 1, 
  			},
  		},
    ]
    
  };
  return (
    <div className="container">
      <div className="section_heading style_4 text-center">
        <h2 className="heading_subtitle text-uppercase">
          <span>Servicios</span>
        </h2>
        <h3 className="heading_title mb-0">Nuestras soluciones</h3>
      </div>
      <div className="common_carousel_4col row" >
        <Slider {...settings}>
          <ProvidingElement 
            shape="assets/images/shapes/shape_color_1.svg"
            iconImage="/assets/images/icons/icon_code_5.svg"
            title="Desarrollo"
            description="Ayudamos a generar flujo de caja positivo"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_2.svg"
            iconImage="assets/images/icons/icon_house_2.svg"
            title="Diseño UX/UI"
            description="Ayudamos a generar flujo de caja positivo"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_3.svg"
            iconImage="assets/images/icons/icon_grid_2.svg"
            title="Aplicaciones"
            description="Ayudamos a generar flujo de caja positivo"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_4.svg"
            iconImage="/assets/images/icons/icon_speaker.svg"
            title="Marketing"
            description="Ayudamos a generar flujo de caja positivo"
          />
          <ProvidingElement
            shape="/assets/images/shapes/shape_color_5.svg"
            iconImage="/assets/images/icons/icon_camera_2.svg"
            title="Edición de video"
            description="Ayudamos a generar flujo de caja positivo"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_6.svg"
            iconImage="assets/images/icons/icon_code_4.svg"
            title="Programación"
            description="Ayudamos a generar flujo de caja positivo"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_7.svg"
            iconImage="assets/images/icons/icon_idea_3.svg"
            title="Negocio"
            description="Ayudamos a generar flujo de caja positivo"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_8.svg"
            iconImage="assets/images/icons/icon_cog.svg"
            title="Apoyo técnico"
            description="Ayudamos a generar flujo de caja positivo"
          />
          <ProvidingElement
            shape="assets/images/shapes/shape_color_5.svg"
            iconImage="assets/images/icons/icon_camera_2.svg"
            title="Edición de video"
            description="Ayudamos a generar flujo de caja positivo"
          />
        </Slider>
      </div>
    </div>
  );
};
export default ProdivingSection;
