import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SelfService from './pages/SelfService';

import Navbar from './components/navbarComponent/Navbar';

import AboutUs from './components/SelfServiceComponent/Header/AboutUs.js';
import Contact from './components/SelfServiceComponent/Header/Contact.js';
import Services from './components/SelfServiceComponent/Header/Services.js'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
       
          <Route path="/" element={<SelfService />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
         
          

         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
