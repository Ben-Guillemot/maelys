import React from 'react';
import Main from '../Main/Main';
import './presentationpage.scss';

function PresentationPage() {
  return (
    <Main>
      <div className="presentationPage__container">
        <h2>Bienvenue au Maëly&apos;s Café</h2>
      </div>
    </Main>
  );
}

PresentationPage.propTypes = {
};
PresentationPage.defaultProps = {
};
export default React.memo(PresentationPage);
