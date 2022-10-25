
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RiderNavbar from './RiderNavbar';
import RiderProfile from './RiderProfile';
import RiderOrder from './RiderOrder';
import RiderProfileUpdate from './RiderProfileUpdate';
import RiderSignup from './RiderSignup';
import RiderLogin from './RiderLogin';
import Footer from './Footer';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <RiderNavbar />
        <Routes>
          <Route path='/rider/RiderLogin' element={<div><RiderLogin /></div>} />
          <Route path='/rider/riderSignup' element={<div><RiderSignup /></div>} />
          <Route path='/rider/updateRiderProfile' element={<div><RiderProfileUpdate /></div>} />
          <Route path='/rider/RiderProfile' element={<div><RiderProfile /></div>} />
          <Route path='/rider/RiderOrders' element={<div><RiderOrder /></div>} />
        </Routes> 
      <Footer />
      <ToastContainer/>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
