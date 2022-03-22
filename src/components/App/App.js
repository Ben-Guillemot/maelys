import React from 'react';
import vynile from '../../Assets/Vynile.webp';
import logo from '../../Assets/logo_maelys.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={vynile} className="App-vynile" alt="logo" />
      </header>
    </div>
  );
}

export default React.memo(App);
