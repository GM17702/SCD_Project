
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RiderNavbar from './RiderNavbar';
import RiderProfile from './RiderProfile';
import RiderProfileUpdate from './RiderProfileUpdate';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RiderNavbar />
        <Routes>
          <Route path='/updateRiderProfile' element={<div><RiderProfileUpdate /></div>} />
          <Route path='/' element={<div><RiderProfile /></div>} />
        </Routes> 
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
