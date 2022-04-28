import React from 'react';
import vynile from '../../Assets/Vynile.webp';
import './homepage.scss';

function HomePage() {
  return (
    <div className="homePage">
      <img src={vynile} className="homePage-vynile" alt="logo" />
    </div>
  );
}

HomePage.propTypes = {
};
HomePage.defaultProps = {
};
export default React.memo(HomePage);
