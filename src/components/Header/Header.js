import React from 'react';
import logo from '../../Assets/logo_maelys.png';
import facebook from '../../Assets/logolinks/facebook.png';
import instagram from '../../Assets/logolinks/instagram.png';
import './header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header-menu-burger">
        <img src="" alt="" />
      </div>
      <div className="Header-logo">
        <a href="*" className="header-link">
          <img src={logo} className="header-logo" alt="logo" />
        </a>
      </div>
      <div className="header-social-links-container">
        <a href="*" className="header-social-link">
          <img src={facebook} alt="" className="header-social-link-logo" />
        </a>
        <a href="*" className="header-social-link">
          <img src={instagram} alt="" className="header-social-link-logo" />
        </a>
      </div>

    </div>
  );
}

Header.propTypes = {
};
Header.defaultProps = {
};
export default React.memo(Header);
