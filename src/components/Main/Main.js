import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useWindowWidth from '../../hooks/useWindowWidth';
import SideBar from '../SideBar/SideBar';
import Footer from '../SideBar/Footer/Footer';

import './main.scss';

function Main({
  children,
}) {
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
    <main className="main">
      <SideBar />
      <div className="main__container">
        {children}
      </div>
      {mobileWidth ? (
        <Footer />
      ) : null}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
Main.defaultProps = {
};
export default React.memo(Main);
