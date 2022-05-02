import React from 'react';
import EventFacebook from '../EventFacebook/EventFacebook';
import photoMoto from '../../Assets/moto_maelys.webp';
import './homepage.scss';

function HomePage() {
  return (
    <div className="homePage__container">
      <div className="homePage__container-img">
        <img src={photoMoto} alt="moto" className="homePage-image" />
      </div>
      <EventFacebook />
    </div>
  );
}

HomePage.propTypes = {
};
HomePage.defaultProps = {
};
export default React.memo(HomePage);
