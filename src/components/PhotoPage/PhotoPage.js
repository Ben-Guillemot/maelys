import React from 'react';
import Main from '../Main/Main';
import './photopage.scss';

function PhotoPage() {
  return (
    <Main>
      <div className="photoPage__container">
        <h2>Galerie Photos</h2>
      </div>
    </Main>
  );
}

PhotoPage.propTypes = {
};
PhotoPage.defaultProps = {
};
export default React.memo(PhotoPage);
