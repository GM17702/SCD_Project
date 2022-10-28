import React from 'react';
import Button from 'react-bootstrap/Button';
import { useEffect , useState } from 'react';

import ValidateOrders from './ValidateOrders';
// import CarItem from "../components/UI/CarItem";
import Modal from 'react-bootstrap/Modal';


import { MDBContainer,  MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function ValidateOrdersList(props) {

   
    const [show, setShow] = useState(false);
    const handleClose = () =>{ setShow(false); }
    const handleShow = () =>{ setShow(true); }

    

    const { FoodName, ID, CustomerName, Quantity, CustomerDetails } = props.item;

    const[orderinfo ,setorderinfo] = React.useState([{}])
  var Dataa;


  useEffect(() => {
    (async () =>
      {
        await fetch("http://localhost:5000/ValidateOrders").then(
          response => response.json()
        ).then(
          orderdata => setorderinfo(orderdata))
     })();
  
    }, []);
    return (

      <div> 
      {(typeof orderinfo.order === 'undefined') ? (
       <p> Loading... </p>
           ) : (


  orderinfo.order.map((Dataa , i) => (
         
       <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{Dataa.FoodName}</p>
                <p className='text-muted mb-0'>Order ID: {Dataa.orderID}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{Dataa.CustomerName} </p>
            <p className='text-muted mb-0'>{Dataa.CustomerName}</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              {Quantity}
            </MDBBadge>
          </td>
          <td>{Dataa.CustomerDetails}</td>
          <td>
            <MDBBtn className='fw-normal mb-1' rounded size='sm' onClick={handleShow}>
              ACCEPT
            </MDBBtn>
            <MDBBtn color='link' rounded size='sm' onClick={handleShow}>
              REJECT
            </MDBBtn>
          </td>
          
        </tr>


))

      
 )}      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to reject?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            no
          </Button>
          <Button variant="primary"  onClick={handleClose}> 
            yes
          </Button>
        </Modal.Footer>
      </Modal>
    
  </div>    
    );



}