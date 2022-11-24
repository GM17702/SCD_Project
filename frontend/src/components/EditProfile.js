import {React, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom'
import he from '../assets/27470349_7309670.jpg'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBInput,
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

export default function EditProfile() {

  const location = useLocation()
  const { from } = location.state
const [pname, setpname] = useState([from.cust.name])
const [pemail, setpemail] = useState([from.cust.email])
const [pphone, setpphone] = useState([from.cust.phone])
const [paddress, setpaddress] = useState([from.cust.address])
const [customer_id] = useState([from.cust.customer_id])


const validateInput = async event => {

let name = pname;
let email = pemail;
let phone = pphone;
let address = paddress;


 await fetch(`/update/${customer_id}`,{

  method: 'put',
  body: JSON.stringify({name, email, phone, address}),
  headers: {'Content-Type': 'Application/json'}

});
}

  return (
  
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
                <p className="text-muted mb-1">{}</p>
                <p className="text-muted mb-4">{}</p>
                <div className="d-flex justify-content-center mb-2">
               
                <button className='edit' onClick={validateInput }>Update</button>
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
                  <MDBInput style={{textAlign: 'center' }} type='name' value={pname} onChange={(e) => setpname(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBInput style={{textAlign: 'center' }} type='email' value={pemail} onChange={(e) => setpemail(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBInput style={{textAlign: 'center' }} type='phone' value={pphone} onChange={(e) => setpphone(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <hr />
            
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBInput style={{textAlign: 'center' }} type='name' value={paddress} onChange={(e) => setpaddress(e.target.value)} />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section> 
)}
    