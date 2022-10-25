import React from 'react';
import './RiderNavbar.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from "./navicon.png";
import { LinkContainer } from 'react-router-bootstrap';


function RiderNavbar() {
  return (
    <Navbar className="navbar navbar-default navbar-fixed-top">
    <Container className="container">
      <div className="navbar-header">
        <Navbar.Brand className="navbar-brand" ><img className="navlogo" src={logo} alt="logo"></img><b>Food<span>Panda</span></b></Navbar.Brand>
      </div>
      <Navbar.Collapse className="collapse navbar-collapse" >
        <Nav className="ms-auto">
        
          <li className="nav-item" >
          <i className="bi bi-1-square-fill"></i>
             <Nav.Link  className="ml-auto" >Home</Nav.Link>
           </li>
           <li className="nav-item" >
           <LinkContainer to='/rider/RiderOrders'>
             <Nav.Link className="ml-auto" >Orders</Nav.Link>
            </LinkContainer>
           </li>
           <li className="navfbr">
            <Nav.Link className="ml-auto" >Completed Deliveries</Nav.Link>
            </li>
            <li className="nav-item">
            <LinkContainer to='/rider/RiderProfile'>
            <Nav.Link className="ml-auto" >Profile</Nav.Link>
            </LinkContainer>
            </li>
           <li className="nav-item">
           <LinkContainer to='/rider/RiderLogin'>
            <Nav.Link className="ml-auto" >Log out</Nav.Link>
            </LinkContainer>
            </li>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
  
}

export default RiderNavbar;
