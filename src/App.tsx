import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Content from './pages/content';
import Footer from './components/Footer';

import Home from './pages/home';
import Nospizzas from './pages/nospizzas';
import Formules from './pages/formules';
import Horaires from './pages/horaires';
import Client from './pages/client';
import Admin from './pages/admin';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nospizzas" element={<Nospizzas />} />
        <Route path="formules" element={<Formules />} />
        <Route path="horaires" element={<Horaires />} />
        <Route path="client" element={<Client />} />
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
