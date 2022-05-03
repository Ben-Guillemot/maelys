import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../SideBar/SideBar';

import './main.scss';

function Main({
  children,
}) {
  return (
    <main className="main__container">
      <SideBar />
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
Main.defaultProps = {
};
export default React.memo(Main);
