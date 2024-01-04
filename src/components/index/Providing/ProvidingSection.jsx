import Slider from "react-slick";
import ProvidingElement from "./ProvidingElement";
export default function ProdivingSection() {
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
          <span>Nuestros Servicios</span>
        </h2>
        <h3 className="heading_title mb-0">Las soluciones</h3>
      </div>
      <div className="common_carousel_4col row">
        <Slider {...settings}>
          <ProvidingElement
            shape="assets/images/shapes/shape_color_1.svg"
            iconImage="/assets/images/icons/icon_code_5.svg"
            title="Desarrollo Web"
            description="Creando aplicaciones web modernas y escalables con Angular, React y Svelte."
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_2.svg"
            iconImage="assets/images/icons/icon_house_2.svg"
            title="Desarrollo de Aplicaciones Móviles"
            description="Construyendo aplicaciones móviles multiplataforma con Swift y NativeScript."
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_3.svg"
            iconImage="assets/images/icons/icon_grid_2.svg"
            title="Soluciones en la Nube"
            description="Implementando servicios en la nube y estrategias de migración con AWS, Azure y Heroku."
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_4.svg"
            iconImage="/assets/images/icons/icon_speaker.svg"
            title="DevOps y Automatización"
            description="Mejorando procesos de CI/CD utilizando Docker, Kubernetes y Jenkins."
          />

          <ProvidingElement
            shape="/assets/images/shapes/shape_color_5.svg"
            iconImage="/assets/images/icons/icon_camera_2.svg"
            title="Arquitectura de Microservicios"
            description="Diseñando e implementando microservicios para sistemas eficientes y escalables."
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_6.svg"
            iconImage="assets/images/icons/icon_code_4.svg"
            title="Consultoría en Ciberseguridad"
            description="Ofreciendo auditorías de seguridad y consultoría de cumplimiento de primera categoría."
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_7.svg"
            iconImage="assets/images/icons/icon_idea_3.svg"
            title="Análisis de Datos"
            description="Transformando datos en conocimientos con herramientas modernas de análisis y reportes."
          />

          <ProvidingElement
            shape="assets/images/shapes/shape_color_8.svg"
            iconImage="assets/images/icons/icon_cog.svg"
            title="IA y Aprendizaje Automático"
            description="Desarrollando soluciones impulsadas por IA para mejorar las operaciones empresariales."
          />
        </Slider>
      </div>
    </div>
  );
}
