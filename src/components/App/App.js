import React from 'react';
import Sidebar from '../SideBar/SideBar';
import HomePage from '../HomePage/HomePage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <HomePage />
    </div>
  );
}

export default React.memo(App);
