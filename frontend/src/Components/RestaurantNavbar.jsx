import React from 'react';
import './RestaurantNav.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from "./navicon.png";



const RestaurantNavbar = () => {
// function RestaurantNavbar() {
  return (
    <Navbar className="navbar navbar-default navbar-fixed-top">
       
    <Container className="container">
      <div className="navbar-header">
        
        <Navbar.Brand className="navbar-brand" ><img className="navlogo" src={logo} Alt="logo"></img><b>BharosaRakh<span>Gaenda</span></b></Navbar.Brand>
      </div>
      <Navbar.Collapse className="collapse navbar-collapse" >
        <Nav className="ms-auto">
        
          <li className="nav-item" >
          <i class="bi bi-1-square-fill"></i>
             <Nav.Link  className="ml-auto"  >Menu_Management</Nav.Link>
           </li>
           <li className="nav-item" >
             <Nav.Link className="ml-auto">Orders</Nav.Link>
           </li>
           <li className="nav-item">
            <Nav.Link className="ml-auto">Profile_Management</Nav.Link>
            </li>
           
           <li className="nav-item">
            <Nav.Link className="ml-auto" >Log_out</Nav.Link>
            </li>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
  
}

export default RestaurantNavbar;
