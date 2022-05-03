import React, { useState, useEffect } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Infos from '../Infos/Infos';

import './sideBar.scss';

function Sidebar() {
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
    <div className="sidebar__container">
      <Header />
      <Nav />
      {mobileWidth ? (
        null
      ) : <Infos />}
    </div>
  );
}

export default React.memo(Sidebar);
