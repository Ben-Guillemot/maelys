import React from 'react';
import Main from '../Main/Main';
import './eventconcertpage.scss';

function EventConcertPage() {
  return (
    <Main>
      <div className="eventPage__container">
        <h2>Evénements et concerts</h2>
      </div>
    </Main>
  );
}

EventConcertPage.propTypes = {
};
EventConcertPage.defaultProps = {
};
export default React.memo(EventConcertPage);
