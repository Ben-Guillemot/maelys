import React from 'react';
import Main from '../Main/Main';
import Appetizers from './Appetizers/Appetizers';
import Burger from './Burger/Burger';
import Meals from './Meals/Meals';
import Desserts from './Desserts/Desserts';
import './cartepage.scss';

function CartePage() {
  return (
    <Main>
      <div className="cartePage__container">
        <h2 className="cartePage__container-title">Notre Carte</h2>
        <Appetizers />
        <Burger />
        <Meals />
        <Desserts />
      </div>
    </Main>
  );
}

CartePage.propTypes = {
};
CartePage.defaultProps = {
};
export default React.memo(CartePage);
