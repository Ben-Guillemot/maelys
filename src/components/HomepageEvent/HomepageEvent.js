import React from 'react';
import vynile from '../../Assets/Vynile.webp';
import './homepageevent.scss';

function HomepageEvent() {
  return (
    <div className="homepageevent__container">
      <article className="homepageevent__container-article">
        <img src={vynile} className="homepageevent__container-article--vynile" alt="Vynile" />
        <p>event1</p>
      </article>
      <article className="homepageevent__container-article">
        <img src={vynile} className="homepageevent__container-article--vynile" alt="Vynile" />
        <p>even2</p>
      </article>
      <article className="homepageevent__container-article">
        <img src={vynile} className="homepageevent__container-article--vynile" alt="Vynile" />
        <p>event3</p>
      </article>
    </div>
  );
}

HomepageEvent.propTypes = {
};
HomepageEvent.defaultProps = {
};
export default React.memo(HomepageEvent);
