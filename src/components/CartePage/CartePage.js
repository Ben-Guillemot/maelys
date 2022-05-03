import React from 'react';
import Main from '../Main/Main';
import Appetizers from './Appetizers/Appetizers';
import Burger from './Burger/Burger';
import './cartepage.scss';

function CartePage() {
  return (
    <Main>
      <div className="cartePage__container">
        <h2 className="cartePage__container-title">Notre Carte</h2>
        <Appetizers />
        <Burger />
      </div>
    </Main>
  );
}

CartePage.propTypes = {
};
CartePage.defaultProps = {
};
export default React.memo(CartePage);
