import Slider from 'react-slick';
import PortafolioElement from './PortafolioElement';
export default function PortafolioSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    easing: 'ease-in',
    pauseOnHover: false,
    pauseOnFocus: false
  };

  return (
    <div className="container">
      <div className="section_heading text-white text-center">
        <h2 className="heading_subtitle text-uppercase" style={{ color: '#000' }}>
          <span className="double_icon">
            <i className="fas fa-sharp fa-square-full"></i>
            <i className="fas fa-sharp fa-square-full"></i>
          </span>
          <span>Nuestro trabajo</span>
        </h2>
        <h3 className="heading_title mb-0" style={{ color: '#000' }}>Nuestro último trabajo</h3>
      </div>
      <div className="portfolio_carousel">
        <div className="common_carousel_centered"></div>
        <Slider {...settings}>
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_1.jpg"
            signTitle="Aplicación movil"
            signDescription="Aplicación de tienda de muebles móvil"
          />
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_2.jpg"
            signTitle="UI/UX"
            signDescription="Mapa de arte callejero de la ciudad"
          />
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_3.jpg"
            signTitle="Página web"
            signDescription="Elaboración de una página de destino eficaz"
          />
          <PortafolioElement
            portfolioImage="/assets/images/portfolio/portfolio_lfi_image_4.jpg"
            signTitle="Producto"
            signDescription="Entrega de seguimiento de paquetes 3D"
          />
        </Slider>
      </div>
    </div>
  );
}
