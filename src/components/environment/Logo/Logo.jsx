import { $theme } from '../../../environment/theme';
import { useStore } from '@nanostores/react';
import './Logo.css';
const Logo = ({ srcwith, srcdark, alt }) => {
  const theme = useStore($theme);
  return (
    <img
      className="logo"
      src={theme === 'dark' ? srcwith : srcdark}
      alt={alt}
    />
  );
};

export default Logo;
