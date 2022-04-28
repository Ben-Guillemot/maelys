import React from 'react';
import Nav from '../Nav/Nav';
import Infos from '../Infos/Infos';
import logo from '../../Assets/logo_maelys.webp';

import './sideBar.scss';

function Sidebar() {
  return (
    <div className="sidebar__container">
      <img src={logo} className="sidebar__container-logo" alt="logo" />
      <Nav className="sidebar__container-nav" />
      <Infos />
    </div>
  );
}

export default React.memo(Sidebar);
