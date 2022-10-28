
import axios from "axios";



import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function CreateCustomerForm() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [repPassword,setRepeatpassword]=useState("")


  

const createuser =()=>{

  
 
axios({
  method: 'post',
  url: 'http://localhost:3001/createuser',
  data: {
    name: name,
    email: email,
    password:password,
    repPassword: repPassword
  }
});
  
  // axios.post('http://localhost:3001/createuser', {
  //   name: 'Fred',
  //   email: 'Flintstone',
  //   password:'1234',
  //   repeatpassword:'1234',
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
//  Axios.post("http://localhost:3001/createuser",
//  {name:"waleed",email:"email",password:"password",repeatpassword:"repeatpassword"}).then((response)=>{
// alert("New Customer has been created")


 }


  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center firstheading h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100'
                 placeholder='Please enter your name' onChange={(event)=>{setName(event.target.value)}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' placeholder='Please enter your email'
                onChange={(event)=>{setEmail(event.target.value)}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' placeholder='Please enter your email'
                onChange={(event)=>{setPassword(event.target.value)}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password' placeholder='Enter password again'
                onChange={(event)=>{setRepeatpassword(event.target.value)}}/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={createuser}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );

  }
export default CreateCustomerForm;