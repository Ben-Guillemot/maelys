import React from 'react';
import burgerPicture from '../../../Assets/burger.jpg';
import Article from '../Article/Article';
import burger from '../../../datas/burger';
import './burger.scss';

function Appetizers() {
  return (
    <section className="burger">
      <h3 className="burger-title">Nos Burgers</h3>
      <h4 className="burger-subtitle">Nos burgers sont servis avec frites et salade</h4>
      <div className="burger-container">
        <div className="burger-content">
          {burger.map((item) => (
            <Article
              title={item.title}
              price={item.price}
              description={item.description}
              key={item.id}
            />
          ))}
        </div>
        <img src={burgerPicture} alt="burger" className="burger-photo" />
      </div>
    </section>
  );
}

Appetizers.propTypes = {
};
Appetizers.defaultProps = {
};
export default React.memo(Appetizers);
