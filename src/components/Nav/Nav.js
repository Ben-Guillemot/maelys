import React from 'react';
import './nav.scss';

function Nav() {
  return (
    <div className="nav__container">
      <p>Navigation</p>
    </div>
  );
}

Nav.propTypes = {
};
Nav.defaultProps = {
};
export default React.memo(Nav);
