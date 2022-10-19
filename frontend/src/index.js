import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Navbar from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <React.StrictMode>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      </Routes>
   
      </React.StrictMode>
   </Router>
   
   
  
);


