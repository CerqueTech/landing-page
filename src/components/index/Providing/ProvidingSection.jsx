import Slider from 'react-slick';
import ProvidingElement from './ProvidingElement';
import getData from '../../../services/data';
import { useState, useEffect, useRef } from 'react';

const ProdivingSection = (props) => {
  const [data, setData] = useState({});
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(`${props.lang}/index/providing`);
      setData(result);
    };
    fetchData();

    // Handle window resize for responsive arrows
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial value
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    // Clean up
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const href = props.lang === 'es' ? 'es/servicios' : 'en/services';

  // Arrow button styles
  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#ffcc00',
    border: 'none',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    opacity: 0.9,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'
  };

  // Functions to control the slider
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    easing: 'ease-in',
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
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
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '80px'
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

  return (
    <div className="container">
      <div className="section_heading style_4 text-center">
        <h2 className="heading_subtitle text-uppercase">
          <span>{data.span}</span>
        </h2>
        <h3 className="heading_title mb-0">{data.h3}</h3>
      </div>
      <div className="common_carousel_4col row">
        <div style={{ position: 'relative', padding: '0 50px' }}>
          {/* Left arrow button */}
          <button
            onClick={goToPrev}
            style={{
              ...arrowStyles,
              left: windowWidth > 767 ? '-60px' : '-10px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ff9900';
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffcc00';
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <i className="fa-solid fa-chevron-left" style={{ fontSize: '18px' }}></i>
          </button>

          <Slider ref={sliderRef} {...settings}>
            <ProvidingElement
              shape="assets/images/shapes/shape_color_6.svg"
              iconImage="assets/images/icons/icon_code_4.svg"
              title={data.elem6Title}
              description={data.elem6Desc}
              href="https://shieldcrackers.com/"
            />

            <ProvidingElement
              shape="assets/images/shapes/shape_color_1.svg"
              iconImage="/assets/images/icons/icon_code_5.svg"
              title={data.elem1Title}
              description={data.elem1Desc}
              href={href}
            />

            <ProvidingElement
              shape="assets/images/shapes/shape_color_2.svg"
              iconImage="assets/images/icons/icon_house_2.svg"
              title={data.elem2Title}
              description={data.elem2Desc}
              href={href}
            />

            <ProvidingElement
              shape="assets/images/shapes/shape_color_3.svg"
              iconImage="assets/images/icons/icon_grid_2.svg"
              title={data.elem3Title}
              description={data.elem3Desc}
              href={href}
            />

            <ProvidingElement
              shape="assets/images/shapes/shape_color_4.svg"
              iconImage="/assets/images/icons/icon_speaker.svg"
              title={data.elem4Title}
              description={data.elem4Desc}
              href={href}
            />

            <ProvidingElement
              shape="/assets/images/shapes/shape_color_5.svg"
              iconImage="/assets/images/icons/icon_camera_2.svg"
              title={data.elem5Title}
              description={data.elem5Desc}
              href={href}
            />

            <ProvidingElement
              shape="assets/images/shapes/shape_color_7.svg"
              iconImage="assets/images/icons/icon_idea_3.svg"
              title={data.elem7Title}
              description={data.elem7Desc}
              href={href}
            />

            <ProvidingElement
              shape="assets/images/shapes/shape_color_8.svg"
              iconImage="assets/images/icons/icon_cog.svg"
              title={data.elem8Title}
              description={data.elem8Desc}
              href={href}
            />
          </Slider>

          {/* Right arrow button */}
          <button
            onClick={goToNext}
            style={{
              ...arrowStyles,
              right: windowWidth > 767 ? '-60px' : '-10px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ff9900';
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffcc00';
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '18px' }}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdivingSection;
