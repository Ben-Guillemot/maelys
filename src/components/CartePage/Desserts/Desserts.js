import React from 'react';
import dessert from '../../../Assets/dessert.webp';
import Article from '../Article/Article';
import desserts from '../../../datas/desserts';
import './desserts.scss';

function Appetizers() {
  return (
    <section className="dessert">
      <h3 className="dessert-title">Nos Desserts</h3>
      <div className="dessert-container">
        <div className="dessert-content">
          {desserts.map((item) => (
            <Article
              title={item.title}
              price={item.price}
              description={item.description}
              key={item.id}
            />
          ))}
        </div>
        <img src={dessert} alt="dessert" className="dessert-photo" />
      </div>
    </section>
  );
}

Appetizers.propTypes = {
};
Appetizers.defaultProps = {
};
export default React.memo(Appetizers);
