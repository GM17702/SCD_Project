import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBCol, MDBContainer,  MDBRow,  MDBCard,  MDBCardText,  MDBCardBody,  MDBCardImage,  MDBBtn,
} from 'mdb-react-ui-kit';
import logo from "./rider.png";
import './RiderProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faWallet, faMotorcycle} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
    
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={logo}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                  <p>     </p>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <Link to='/updateRiderProfile'>
                  <MDBBtn className="updatebutton">Update</MDBBtn>
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>

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
        </MDBRow>

            <MDBRow >
            <MDBCol lg="4">
            <MDBCard className="col-xl-4 col-sm-8 col-12 mb-4" style={{marginRight : 50  ,maxWidth : 350}}>
              <MDBCardBody>
                
                    <div className="d-flex justify-content-between px-md-4">
                    <div className="align-self-center">
                    <FontAwesomeIcon className="deliveryicon" icon={faMotorcycle} bounce size='4x'/>
                    </div>
                        <MDBCardText className="text-end">
                            <h3>278</h3>
                            <p className="mb-0">Deliveries</p>
                        </MDBCardText>
                    </div>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            
            <MDBCol lg="4">
            <MDBCard className="col-xl-4 col-sm-6 col-12 mb-4" style={{marginRight : 20  ,maxWidth : 350}}>
              <MDBCardBody>
                <div className="d-flex justify-content-between px-md-4">
                    <div className="align-self-center">
                    <FontAwesomeIcon className="ratingicon" icon={faStar} beat size='4x'/>
                    </div>
                        <MDBCardText className="text-end">
                            <h3>4.7</h3>
                            <p className="mb-0">Rating</p>
                        </MDBCardText>
                    </div>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>

                <MDBCol lg="4">
               <MDBCard className="col-xl-4 col-sm-6 col-18 mb-4" style={{maxWidth : 350}}>
              <MDBCardBody>
                <div className="d-flex justify-content-between px-md-4" >
                    <div className="align-self-center">
                    <FontAwesomeIcon className="walleticon" icon={faWallet} shake size='4x' style={{color : 'cyan'}}/>
                    </div>
                        <MDBCardText className="text-end">
                            <h3>$550</h3>
                            <p className="mb-0">Credits</p>
                        </MDBCardText>
                    </div>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
        
      </MDBContainer>
    </section>
  );
}