import React from 'react';
import PropTypes from 'prop-types';

import './adminmain.scss';

function Main({
  children,
}) {
  return (
    <main className="admin__main">
      <div className="admin__main-header">
        <h1 className="admin__main-header-title">Page Admin</h1>
        <button type="button" className="admin__main-header-button">Se déconnecter</button>
      </div>
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
