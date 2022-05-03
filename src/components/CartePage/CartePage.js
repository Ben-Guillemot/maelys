import React from 'react';
import Main from '../Main/Main';
import './cartepage.scss';

function CartePage() {
  return (
    <Main>
      <div className="cartePage__container">
        <h2>Notre Carte</h2>
      </div>
    </Main>
  );
}

CartePage.propTypes = {
};
CartePage.defaultProps = {
};
export default React.memo(CartePage);
