import React from 'react';
import Main from '../Main/Main';
import './contactpage.scss';

function ContactPage() {
  return (
    <Main>
      <div className="contactPage__container">
        <h2>Nous contacter</h2>
      </div>
    </Main>
  );
}

ContactPage.propTypes = {
};
ContactPage.defaultProps = {
};
export default React.memo(ContactPage);
