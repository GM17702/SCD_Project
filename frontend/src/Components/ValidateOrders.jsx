
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import ValidateOrdersList from '../Components/ValidateOrdersList';
import orderData from "../Data/orderData"
import { MDBContainer,  MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function ValidateOrders() {




  
    
  const [show, setShow] = useState(false);

  const handleClose = () =>{ setShow(false); }
  const handleShow = () =>{ setShow(true); }

  // const [Quantity, setQuantity] = useState(1);
  // const [FoodName , setFoodName ] = React.useState('Biryani');
  // const [OrderId , setOrderId] = React.useState('1122');
  // const [CustomerDetails , setCustomerDetails] = React.useState('jaime lanister');
 
  
  
  const CheckInput = async event => { 
   

  }

  const AcceptNotifications = () =>{
    

  }

  const RejectNotifications = () =>{
    console.log('Event handler called');
    handleClose();
    
  }

  // const { FoodName, ID, CustomerName, Quantity, CustomerDetails } = props.item;
  return (
    <>
    
    <section style={{ backgroundColor: '#eee' }}>


    <MDBContainer className="py-5">
    <h3 align='middle' >NOTIFICATIONS</h3>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Food Name</th>
          <th scope='col'>CustomerDetails</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>Context</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      
      {orderData.map((item) => ( <ValidateOrdersList item={item} key={item.id} /> ))} 
       
      
        {/* <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
          
                <p className='fw-bold mb-1'>{}</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm' onClick={handleShow}>
              Edit
            </MDBBtn>
          </td>
        </tr>
   */}

        {/* <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'  onClick={handleShow}>
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm' onClick={handleShow}>
              Edit
            </MDBBtn>
          </td>
        </tr> */}
        
      </MDBTableBody>
    </MDBTable>
 


    </MDBContainer>


      {/* <Button variant="primary" onClick={handleShow}>
        Check your Notifications
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to reject?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            no
          </Button>
          <Button variant="primary"  onClick={RejectNotifications}> 
            yes
          </Button>
        </Modal.Footer>
      </Modal> */}

      
      </section>
    </>
  );
}

// export default NotificationPop;