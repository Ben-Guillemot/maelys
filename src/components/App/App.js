import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/presentation" element={<HomePage />} />
      <Route path="/carte" element={<HomePage />} />
      <Route path="/evenements-concerts" element={<HomePage />} />
      <Route path="/galerie-photos" element={<HomePage />} />
      <Route path="/contact" element={<HomePage />} />
    </Routes>
  );
}

export default React.memo(App);
