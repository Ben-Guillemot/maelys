import React from 'react';
import ArticleEvent from './ArticleEvent/ArticleEvent';
import './homepageevent.scss';

function HomepageEvent() {
  return (
    <div className="homepageevent__container">
      <h2 className="homepageevent__container-title">Evènements à venir</h2>
      <ArticleEvent />
    </div>
  );
}

HomepageEvent.propTypes = {
};
HomepageEvent.defaultProps = {
};
export default React.memo(HomepageEvent);
