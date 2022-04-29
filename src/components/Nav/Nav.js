import React from 'react';
import './nav.scss';

function Nav() {
  return (
    <div className="nav__container">
      <a href="*" className="nav-link">
        <p>Accueil</p>
      </a>
      <a href="*" className="nav-link">
        <p>Présentation</p>
      </a>
      <a href="*" className="nav-link">
        <p>Notre Carte</p>
      </a>
      <a href="*" className="nav-link">
        <p>Evènements et concerts</p>
      </a>
      <a href="*" className="nav-link">
        <p>Galerie photos</p>
      </a>
      <a href="*" className="nav-link">
        <p>Nous contacter</p>
      </a>
    </div>
  );
}

Nav.propTypes = {
};
Nav.defaultProps = {
};
export default React.memo(Nav);
