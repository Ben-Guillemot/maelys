import React from 'react';
import HomepageEvent from '../HomepageEvent/HomepageEvent';
import FacebookEvent from '../FacebookPage/FacebookPage';
import './eventfacebook.scss';

function EventFacebook() {
  return (
    <div className="eventfacebook__container">
      <HomepageEvent />
      <FacebookEvent />
    </div>
  );
}

EventFacebook.propTypes = {
};
EventFacebook.defaultProps = {
};
export default React.memo(EventFacebook);
