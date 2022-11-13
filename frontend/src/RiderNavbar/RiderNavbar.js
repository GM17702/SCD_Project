import React from 'react';
import './RiderNavbar.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from "./navicon.png";
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';


function RiderNavbar() {

  const location = useLocation();
  const data = location.state;

  const[emailprop] = React.useState(data.email);
  
  return (
    <Navbar className="navbar navbar-default navbar-fixed-top">
    <Container className="container">
      <div className="navbar-header">
        <Navbar.Brand className="navbar-brand" ><img className="navlogo" src={logo} alt="logo"></img><b>Shapaatar<span>meals</span></b></Navbar.Brand>
      </div>
      <Navbar.Collapse className="collapse navbar-collapse" >
        <Nav className="ms-auto">
        
          <li className="nav-item" >
          <i className="bi bi-1-square-fill"></i>
          <LinkContainer to='/rider/RiderHome' state={{email:emailprop}}>
             <Nav.Link  className="ml-auto" >Home</Nav.Link>
             </LinkContainer>
           </li>
           <li className="nav-item" >
           <LinkContainer to='/rider/RiderOrders' state={{email:emailprop}}>
             <Nav.Link className="ml-auto" >Orders</Nav.Link>
            </LinkContainer>
           </li>
           <li className="navfbr">
           <LinkContainer to='/rider/RiderDeliveries' state={{email:emailprop}}>
            <Nav.Link className="ml-auto" >Deliver</Nav.Link>
            </LinkContainer>
            </li>

            <li className="nav-item">
           <LinkContainer to='/rider/RiderProfile' state={{email:emailprop}}>
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
