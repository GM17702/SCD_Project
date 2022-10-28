import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './AdminNavbar.css'
import reportWebVitals from './reportWebVitals';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';
import CreateCustomerForm from './CreateCustomerForm'
import DisplayForm from './DisplayForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <AdminNavbar/>
   
    <Routes>
      <Route path="/" element={<CreateCustomerForm />} />
      <Route path="/DisplayForm" element={<DisplayForm/>} />
    
      </Routes>
     <Footer/>
      
   </Router>
);


reportWebVitals();


