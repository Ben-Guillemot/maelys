/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import EventFacebook from './EventFacebook/EventFacebook';
import Main from '../Main/Main';
import useWindowWidth from '../../hooks/useWindowWidth';
import photo1 from '../../Assets/photo-homepage-1.webp';
import photo2 from '../../Assets/photo-homepage-2.webp';
import photo3 from '../../Assets/photo-homepage-3.webp';
import Infos from '../SideBar/Infos/Infos';

import './homepage.scss';

function HomePage() {
  const [mobileWidth, setMobileWidth] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth <= 768) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  }, [windowWidth]);

  return (
    <Main>
      <div className="homePage__container">
        <div className="homePage__container-img">
          <img src={photo1} alt="pub" className="homePage__container-img-item" />
          <img src={photo2} alt="pub" className="homePage__container-img-item" />
          <img src={photo3} alt="pub" className="homePage__container-img-item" />
        </div>
        <EventFacebook />
        {mobileWidth ? (
          <Infos />
        ) : null}
      </div>
    </Main>
  );
}

HomePage.propTypes = {
};
HomePage.defaultProps = {
};
export default React.memo(HomePage);
