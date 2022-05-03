import React from 'react';
import tapas from '../../../Assets/tapas.webp';
import Article from '../Article/Article';
import appetizers from '../../../datas/appetizers';
import './appetizers.scss';

function Appetizers() {
  return (
    <section className="appetizer">
      <h3 className="appetizer-title">Nos Appetizers</h3>
      <div className="appetizer-container">
        <img src={tapas} alt="Assiète de Tapas" className="appetizer-photo" />
        <div className="appetizer-content">
          {appetizers.map((item) => (
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
