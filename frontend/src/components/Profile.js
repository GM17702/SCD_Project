import {React, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import he from '../assets/27470349_7309670.jpg'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function Profile() {



  const [customerinfo, setcustomerinfo]= useState([{}])

      useEffect(() => {
    (async () =>
    {
      await fetch(`/getcustomerprofile`).then(
        response => response.json()
      ).then(
        data => setcustomerinfo(data))
   })();

  }, []);

  return (

      <div>

{(typeof customerinfo.cust === 'undefined') ? (
<p>Loading</p>
) : (     
         <section style={{ backgroundColor: '#FBFBFB'}}>
      <MDBContainer className="py-5">
       
        <MDBRow>
          <MDBCol lg="12">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={he}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{customerinfo.cust.name}</p>
                <p className="text-muted mb-4">{customerinfo.cust.address}</p>
                <div className="d-flex justify-content-center mb-2">
                <Link to="/Customer_EditProfile" className="edit" state={{ from: customerinfo }}>Edit </Link> 
                  <button className="edit1">Message</button>
                </div>
              </MDBCardBody>
            </MDBCard>
        
           
          </MDBCol>
          <MDBCol lg="12">
            <MDBCard className="mb-4">
              <MDBCardBody> 
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{customerinfo.cust.name} </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{customerinfo.cust.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{customerinfo.cust.phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
            
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{customerinfo.cust.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section> 
)}
      </div>


   
  );
}