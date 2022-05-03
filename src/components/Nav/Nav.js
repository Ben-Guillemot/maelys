import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

function Nav() {
  return (
    <nav className="nav__container">
      <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
        <p>Accueil</p>
      </NavLink>
      <NavLink to="/presentation" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
        <p>Présentation</p>
      </NavLink>
      <NavLink to="/carte" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
        <p>Notre Carte</p>
      </NavLink>
      <NavLink to="/evenements-concerts" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
        <p>Evènements et concerts</p>
      </NavLink>
      <NavLink to="/galerie-photos" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
        <p>Galerie photos</p>
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>
        <p>Nous contacter</p>
      </NavLink>
    </nav>
  );
}

Nav.propTypes = {
};
Nav.defaultProps = {
};
export default React.memo(Nav);
