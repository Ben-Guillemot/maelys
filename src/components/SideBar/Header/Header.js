import React, { useRef } from 'react';
import instagram from '../../../Assets/logolinks/instagram.png';
import logo from '../../../Assets/logo_maelys.webp';
import burger from '../../../Assets/menu.png';
import facebook from '../../../Assets/logolinks/facebook.png';
import './header.scss';
import ModalMenu from '../ModalMenu/ModalMenu';

function Header() {
  const buttonOpen = useRef(null);
  const modalElement = useRef(null);

  return (
    <div className="header">
      <div className="header-container">
        <button type="button" className="header-menu-burger" ref={buttonOpen}>
          <img src={burger} alt="burger-menu" />
        </button>
        <div className="modal" ref={modalElement}>
          <ModalMenu buttonOpen={buttonOpen} modalElement={modalElement} ref={modalElement} />
        </div>
        <h1 className="header-title">
          <a href="/" className="header-link">
            <img src={logo} className="header-logo" alt="Maëly's Café" />
          </a>
        </h1>
        <div className="header-social-links-container">
          <a href="https://www.facebook.com/Maelys-Caf%C3%A9-201902384059045/" target="_blank" className="header-social-link" rel="noreferrer">
            <img src={facebook} alt="" className="header-social-link-logo" />
          </a>
          <a href="https://www.instagram.com/maelys_cafe/" target="_blank" className="header-social-link" rel="noreferrer">
            <img src={instagram} alt="" className="header-social-link-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
};
Header.defaultProps = {
};
export default React.memo(Header);
