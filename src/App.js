import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SelfService from './pages/SelfService';

import Navbar from './components/navbarComponent/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
       
          <Route path="/" element={<SelfService />} />
         
          

         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
