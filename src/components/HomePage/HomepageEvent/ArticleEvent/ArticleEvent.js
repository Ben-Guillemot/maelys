import React from 'react';
import vynile from '../../../../Assets/Vynile.webp';
import event1 from '../../../../Assets/event1.png';
import event2 from '../../../../Assets/event2.png';
import './articleevent.scss';

function ArticleEvent() {
  return (
    <>
      <article className="articleEvent">
        <div className="articleEvent__content">
          <img src={vynile} className="articleEvent__content-vynile" alt="Vynile" />
          <p className="articleEvent__content-date">Mercredi 4 mai</p>
          <p className="articleEvent__content-hour">20h30</p>
        </div>
        <h2 className="articleEvent__title">Session irlandaise</h2>
        <img src={event2} className="articleEvent__photo" alt="event" />
      </article>
      <article className="articleEvent">
        <div className="articleEvent__content">
          <img src={vynile} className="articleEvent__content-vynile" alt="Vynile" />
          <p className="articleEvent__content-date">Vendredi 6 mai</p>
          <p className="articleEvent__content-hour">21h00</p>
        </div>
        <h2 className="articleEvent__title">Sin City cover ACDC</h2>
        <img src={event1} className="articleEvent__photo" alt="event" />
      </article>
    </>
  );
}

ArticleEvent.propTypes = {
};
ArticleEvent.defaultProps = {
};
export default React.memo(ArticleEvent);
