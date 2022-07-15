import React from 'react';
import viande from '../../../Assets/viande.webp';
import Article from '../Article/Article';
import meals from '../../../datas/meals';
import './meals.scss';

function Appetizers() {
  return (
    <section className="meals">
      <h3 className="meals-title">Nos Viandes</h3>
      <h4 className="burger-subtitle">Nos viandes sont servies avec frites et salade</h4>
      <div className="meals-container">
        <img src={viande} alt="Assiète de viande" className="meals-photo" />
        <div className="meals-content">
          {meals.map((item) => (
            <Article
              title={item.title}
              price={item.price}
              description={item.description}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

Appetizers.propTypes = {
};
Appetizers.defaultProps = {
};
export default React.memo(Appetizers);
