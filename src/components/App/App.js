import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import PresentationPage from '../PresentationPage/PresentationPage';
import CartePage from '../CartePage/CartePage';
import EventConcertPage from '../EventConcertPage/EventConcertPage';
import PhotoPage from '../PhotoPage/PhotoPage';
import ContactPage from '../ContactPage/ContactPage';
import LoginPage from '../Admin/LoginPage/LoginPage';
import AdminHomePage from '../Admin/AdminHomePage/AdminHomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/presentation" element={<PresentationPage />} />
      <Route path="/carte" element={<CartePage />} />
      <Route path="/evenements-concerts" element={<EventConcertPage />} />
      <Route path="/galerie-photos" element={<PhotoPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin">
        <Route path="login" element={<LoginPage />} />
        <Route path="home" element={<AdminHomePage />} />
      </Route>

    </Routes>
  );
}

export default React.memo(App);
