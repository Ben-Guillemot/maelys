import React from 'react';
import EventFacebook from '../EventFacebook/EventFacebook';
import photo1 from '../../Assets/photo-homepage-1.webp';
import photo2 from '../../Assets/photo-homepage-2.webp';
import photo3 from '../../Assets/photo-homepage-3.webp';

import './homepage.scss';

function HomePage() {
  return (
    <div className="homePage__container">
      <div className="homePage__container-img">
        <img src={photo1} alt="pub" className="homePage__container-img-item" />
        <img src={photo2} alt="pub" className="homePage__container-img-item" />
        <img src={photo3} alt="pub" className="homePage__container-img-item" />
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
