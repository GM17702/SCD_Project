import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/js/bootstrap.min";
// import { MDBContainer,} from 'react-bootstrap';

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '~@fortawesome/fontawesome-free/css/fontawesome.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import {  MDBCol, MDBContainer,  MDBRow,  MDBCard,  MDBCardText,  MDBCardBody,  MDBCardImage,  MDBBtn } from 'mdb-react-ui-kit';

import logo from "./Restaurant_icon.jpg";
import './RestaurantProfileManagement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faBell, faMotorcycle, faRightLeft, faThumbsUp} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import './RestaurantProfileManagement.css';


const RestaurantProfileManagement = () => {

return (

<section style={{ backgroundColor: '#eee' }}>
 
 {/* <MDBContainer className="w-auto p-4 " style={{ backgroundColor: "#808000", width: 200,  height: 1000 }} >   
 <MDBRow >

  <MDBCol className='bg-light shadow-5 text-dark'style={{width: 100, height: 200,}}>

    <MDBCardImage src={logo} alt="avatar" className="rounded-circle"  style={{ width: '150px' }} fluid>
  
    </MDBCardImage>

  </MDBCol>

  <MDBCol className="w-50 p-3">
3
  </MDBCol>
  <MDBCol>
4
  </MDBCol>
 </MDBRow>

*/}


<MDBContainer className="py-5">
    
    <MDBRow>
   

      <MDBCol lg="8">
        <MDBCard className="mb-4">
          <MDBCardBody>

            <MDBRow md="5">
              <MDBCol sm="3">
                <MDBCardText>Full Name</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
              </MDBCol>
              
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Email</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">example@example.com</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Phone</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Mobile</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Address</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>

        
        <MDBCol lg="4">
        <MDBCard className="mb-4">
          <MDBCardBody className="text-center">
            <MDBCardImage
              src={logo}
              alt="avatar"
              className="rounded-circle"
              style={{ width: '128px' }}
              fluid />
              <p>     </p>
            <p className="text-muted mb-1">Your RESTAURANT</p>
            <p className="text-muted mb-4">HAR LAMHA AAP KE GHAR</p>
            <p className="text-muted mb-1">BHAROSA RAKH JANI</p>
            
                  
                  
         
           
         
          
            <div className="d-flex justify-content-center mb-2">
            <Link to='/UpdateRestaurantProfile'>
              <MDBBtn className="updatebutton">Update</MDBBtn>
              </Link>
            </div>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
    </MDBRow>

        <MDBRow >
        <MDBCol lg="4">
        <MDBCard className="col-xl-10 col-sm-20 col-20 mb-20" style={{marginRight : 50  ,maxWidth : 350}}>
          <MDBCardBody>
            
                <div className="d-flex justify-content-between px-md-4">
                <div className="align-self-center">
                <FontAwesomeIcon className="deliveryicon" icon={faThumbsUp} seed size='5x'/>
                </div>
                    <MDBCardText className="text-end">
                        <h3>278</h3>
                        <p className="mb-0">Reviews</p>
                    </MDBCardText>
                </div>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
        
        <MDBCol lg="4">
        <MDBCard className="col-xl-10 col-sm-20 col-20 mb-20" style={{marginRight : 20  ,maxWidth : 350}}>
          <MDBCardBody>
            <div className="d-flex justify-content-between px-md-4">
                <div className="align-self-center">
                <FontAwesomeIcon className="ratingicon" icon={faStar} beat size='5x'/>
                </div>
                    <MDBCardText className="text-end">
                        <h3>4.7</h3>
                        <p className="mb-0">Rating</p>
                        <p className="mb-0">View Ratings</p>
                    </MDBCardText>
                </div>
                <br/>
                <Link to='/ValidateOrders'>
              <MDBBtn className="updatebutton">View</MDBBtn>
              </Link>
              
                </MDBCardBody>
            </MDBCard>
            </MDBCol>

            <MDBCol lg="4">
            {/* className="col-xl-4 col-sm-6 col-18 mb-4"  in mdbcard*/ }
           <MDBCard className="col-xl-10 col-sm-20 col-20 mb-20" style={{maxWidth : 350}}>  
          <MDBCardBody>
            <div className="d-flex justify-content-between px-md-4" >
                <div className="align-self-center">
                <FontAwesomeIcon  icon={faBell} beatFade size='5x' style={{color : 'orange'}}/>
                </div>
                    <MDBCardText className="text-end">
                        <h3>3</h3>
                        <h5>Validate Orders</h5>
                        <p className="mb-0">Check for new orders</p>
                    </MDBCardText>
                </div>
                <br/>
                <Link to='/ValidateOrders'>
              <MDBBtn className="updatebutton">View</MDBBtn>
              </Link>

            </MDBCardBody>
        </MDBCard>
        </MDBCol>
    </MDBRow>
    </MDBContainer>
</section>

);
  
}

export default RestaurantProfileManagement;