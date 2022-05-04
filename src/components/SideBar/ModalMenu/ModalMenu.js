/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './modalmenu.scss';

function ModalMenu({
  buttonOpen,
  modalElement,
}) {
  function open() {
    modalElement.current.style.display = 'block';
  }

  function close() {
    modalElement.current.style.display = 'none';
  }

  useEffect(() => {
    buttonOpen.current.onclick = open;
  });
  return (
    <nav className="nav__mobile-container">
      <NavLink to="/" className={({ isActive }) => `nav__mobile-container-link ${isActive ? 'nav__mobile-container-link--active' : ''}`}>
        <p>Accueil</p>
      </NavLink>
      <NavLink to="/presentation" className={({ isActive }) => `nav__mobile-container-link ${isActive ? 'nav__mobile-container-link--active' : ''}`}>
        <p>Présentation</p>
      </NavLink>
      <NavLink to="/carte" className={({ isActive }) => `nav__mobile-container-link ${isActive ? 'nav__mobile-container-link--active' : ''}`}>
        <p>Notre Carte</p>
      </NavLink>
      <NavLink to="/evenements-concerts" className={({ isActive }) => `nav__mobile-container-link ${isActive ? 'nav__mobile-container-link--active' : ''}`}>
        <p>Evènements et concerts</p>
      </NavLink>
      <NavLink to="/galerie-photos" className={({ isActive }) => `nav__mobile-container-link ${isActive ? 'nav__mobile-container-link--active' : ''}`}>
        <p>Galerie photos</p>
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => `nav__mobile-container-link ${isActive ? 'nav__mobile-container-link--active' : ''}`}>
        <p>Nous contacter</p>
      </NavLink>
      <button type="button" className="nav__mobile-container-button" onClick={close}>X</button>
    </nav>
  );
}

ModalMenu.propTypes = {
};
ModalMenu.defaultProps = {
};
export default React.memo(ModalMenu);
