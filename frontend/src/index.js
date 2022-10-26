import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Link, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
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
      <Route path="/Cart" element={<Cart />} />
      </Routes>
      </Provider>
   </Router>
   
   
  
);


