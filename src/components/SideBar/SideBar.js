import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Infos from '../Infos/Infos';

import './sideBar.scss';

function Sidebar() {
  return (
    <div className="sidebar__container">
      <Header />
      <Nav />
      <Infos />
    </div>
  );
}

export default React.memo(Sidebar);
