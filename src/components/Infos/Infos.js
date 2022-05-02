/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './infos.scss';

function Infos() {
  return (
    <div className="infos__container">
      <h3 className="infos__container-title">Maely&apos;s Cafe</h3>
      <p className="infos__container-content">Ouvert du Lundi au Samedi</p>
      <ul className="infos__container-list">
        <li className="infos__container-list-item">Du lundi au samedi : Plats du jour tous les midis</li>
        <li className="infos__container-list-item">Vendredi et Samedi : Restauration à la carte à partir de 18h</li>
        <li className="infos__container-list-item">Du mardi au jeudi soir : Tapas et pizzas à partir de 18h</li>
        <li className="infos__container-list-item">Concerts tous les week-ends</li>
      </ul>
      <a href="tel:+33423147639" className="infos__container-tel-link">Tel : 04.23.14.76.39</a>
      <div className="infos__container-google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.093648311182!2d5.890198415916959!3d43.12355887914292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9050d3217b7b1%3A0x322ca2fdc4df8b82!2zTWHDq2x5cyBjYWbDqQ!5e0!3m2!1sfr!2sfr!4v1651473313702!5m2!1sfr!2sfr" width="400" height="300" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  );
}

Infos.propTypes = {
};
Infos.defaultProps = {
};
export default React.memo(Infos);
