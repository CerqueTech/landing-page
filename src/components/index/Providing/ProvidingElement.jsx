import { $theme } from '../../../environment/theme';
import { useStore } from '@nanostores/react';
import { useState, useEffect } from 'react';

const ProvidingElement = (props) => {
  const theme = useStore($theme);
  const [contentHeight, setContentHeight] = useState('195px');

  // Handle responsive styling
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setContentHeight('140px');
      } else {
        setContentHeight('195px');
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Verificar si el enlace es externo
  const isExternalLink = props.href && (props.href.startsWith('http://') || props.href.startsWith('https://'));

  // Atributos adicionales para enlaces externos
  const externalLinkProps = isExternalLink ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <div className="col">
      <div className="service_item style_4">
        <div
          className="item_icon"
          style={{ backgroundImage: `url(${props.shape})` }}
        >
          <img src={props.iconImage} alt={props.title} />
        </div>
        <div className="item_content" style={{ height: contentHeight }}>
          <h3 className="item_title">{props.title}</h3>
          <p className="item_description">{props.description}</p>
        </div>
        <a
          className="item_details_btn"
          data-cursor="-opaque"
          href={props.href}
          {...externalLinkProps}
        >
          <span className="btn_icon">
            <img
              src={
                theme === 'dark'
                  ? '/assets/images/icons/icon_arrow_down_right_white.svg'
                  : '/assets/images/icons/icon_arrow_down_right_dark_2.svg'
              }
              alt="Arrow icon"
            />
          </span>
        </a>
      </div>
    </div>
  );
};
export default ProvidingElement;
