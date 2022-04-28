import React from 'react';
import './infos.scss';

function Infos() {
  return (
    <div className="infos__container">
      <p>Infos</p>
    </div>
  );
}

Infos.propTypes = {
};
Infos.defaultProps = {
};
export default React.memo(Infos);
