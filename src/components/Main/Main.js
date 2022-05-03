import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../SideBar/SideBar';

import './main.scss';

function Main({
  children,
}) {
  return (
    <main className="main">
      <SideBar />
      <div className="main__container">
        {children}
      </div>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
Main.defaultProps = {
};
export default React.memo(Main);
