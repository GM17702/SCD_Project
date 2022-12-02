import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Link, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Profile from './components/Profile'
import Footer from './components/Footer'
import EditProfile from './components/EditProfile'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import store from './store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
   <Provider store = {store} >
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Customer_Cart" element={<Cart />} />
      <Route path="/Customer_Profile" element={<Profile />} />
      <Route path="/Customer_EditProfile" element={<EditProfile />} />
      </Routes>
     <Footer/>
      </Provider>
   </Router>
   
   
  
);


