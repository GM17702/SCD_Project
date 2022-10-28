import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { useNavigate } from 'react-router-dom';
import {  MDBCol, MDBContainer,  MDBRow,  MDBCard,  MDBCardText,  MDBCardBody,  MDBCardImage,  MDBBtn, MDBInput, } from 'mdb-react-ui-kit';
import logo from "./Restaurant_icon.jpg";
import './RestaurantProfileManagement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faBell, faMotorcycle, faRightLeft, faThumbsUp} from "@fortawesome/free-solid-svg-icons"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// for linking the popup
import { Link } from 'react-router-dom';


  export default function UpdateRestaurantProfile() {
   
        const fake = 0;
         const navigate = useNavigate();
        const [bioValue,setbioValue] = React.useState('hehe suii');
        const [addressValue,setaddressValue] = React.useState('Bay Area, San Francisco, CA');
        const [nameValue,setnameValue] = React.useState('Johnathan Smith');
        const [mobileValue,setmobileValue] = React.useState('12345678999');
        const [emailValue,setemailValue] = React.useState('example@example.com');
        const [cnicValue] = React.useState('61101-1234567-9');
   
    const CheckInput = async event => {   

     
        // console.log("Hello world!");
        // console.log(bioValue);
        // console.log(addressValue);
        // console.log(mobileValue);

        
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      const emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const phonecheck = /^\d{11}$/;
      const addresscheck = /[`!@$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/;
      if (specialChars.test(bioValue))
      {
        toast.error('Special characters not allowed in Bio field', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      else if (specialChars.test(nameValue))
      {
        toast.error('Special characters not allowed in name field', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      else if (!(emailcheck.test(emailValue)))
      {
        toast.error('Invalid Email Address', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      else if (!(phonecheck.test(mobileValue)))
      {
        toast.error('Invalid Mobile Number', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      else if (addresscheck.test(addressValue))
      {
        toast.error('Unrelated special characters not allowed in Address field', {position: toast.POSITION.TOP_RIGHT});
        return false;
      }
      else
      {
        toast.success('Changes Validated!', {position: toast.POSITION.TOP_RIGHT});
        const delay = (ms) => new Promise(
          resolve => setTimeout(resolve, ms)
        );
        await delay(2000);
        navigate('/');

      }

    }


    return (
<section style={{ backgroundColor: '#eee' }}>


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
              {/* <MDBInput className="bio-feild" label='Full Name' id='typename' type='name' value={nameValue} onChange={(e) => setnameValue(e.target.value)}   /> */}
              <MDBInput className="bio-field" label='Bio' id="typebio" value={bioValue} onChange={(e) => setbioValue(e.target.value) }     />
            


                {/* <MDBCardText className="text-muted">Johnatan Smith</MDBCardText> */}
              </MDBCol>
              
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Email</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
              <MDBInput label='Email Address' id='typeEmail' type='Email' value={emailValue} onChange={(e) => setemailValue(e.target.value)} />
                {/* <MDBCardText className="text-muted">example@example.com</MDBCardText> */}
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Phone</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
              <MDBInput label='Mobile Number' id='typeMobile' type='Mobile' value={mobileValue} onChange={(e) => setmobileValue(e.target.value)} />
                {/* <MDBCardText className="text-muted">(097) 234-5678</MDBCardText> */}
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Mobile</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                {/* <MDBCardText className="text-muted">(098) 765-4321</MDBCardText> */}
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow>
              <MDBCol sm="3">
                <MDBCardText>Address</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
              <MDBInput label='Address' id='typeAddress' type='Address' value={addressValue} onChange={(e) => setaddressValue(e.target.value)} />
                {/* <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText> */}
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
              <MDBInput className="bio-field" label='Bio' id="typebio" value={bioValue} onChange={(e) => setbioValue(e.target.value) }     />

            {/* <p className="text-muted mb-1">Your RESTAURANT</p> */}
            <p className="text-muted mb-4">{addressValue}</p>
            
            <p className="text-muted mb-1">BHAROSA RAKH JANI</p>
            <button icon={faMotorcycle}  style={{width: '20px' , height: '20px' }} class="d-flex justify-content-start" type= 'button' onClick={ () => this.FontAwesomeIcon}  >
              <i class="fas fa-edit fa-sm" aria-hidden="true "></i>
              </button>
            {/* <div className="d-flex justify-content-center mb-2"> */}
              {/* <Link to='/updateRiderProfile'>
              <MDBBtn className="updatebutton">Update</MDBBtn>
              </Link> */}
              <div className="d-flex justify-content-center mb-2">
                  <MDBBtn className="updatebutton" onClick={CheckInput}>Confirm</MDBBtn>
                  {/* <ToastContainer/> */}
                </div>
            {/* </div> */}
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
    </MDBRow>

        <MDBRow >
        <MDBCol lg="4">
        <MDBCard className="col-xl-10 col-sm-20 col-20 mb-20" style={{marginRight : 50  ,maxWidth : 350}}>
          <MDBCardBody >
            
                <div className="d-flex justify-content-between px-md-4">
                <div className="align-self-center">
                <FontAwesomeIcon className="deliveryicon" icon={faThumbsUp} shake size='5x'/>
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
        <MDBCard className="col-xl-10 col-sm-20 col-20 mb-20" style={{marginRight : 20  ,maxWidth : 350 , background: 'cyan'}}>
          <MDBCardBody>
            <div className="d-flex justify-content-between px-md-4">
                <div className="align-self-center">
                <FontAwesomeIcon className="ratingicon" icon={faStar} beat size='5x'/>
                </div>
                    <MDBCardText className="text-end">
                        <h3>4.7</h3>
                        <h5>Rating</h5>
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
           <MDBCard  className="col-xl-10 col-sm-20 col-20 mb-20" style={{maxWidth : 350 , background: 'yellow'}}  onClick={ {background: 'black' }} >  
          <MDBCardBody  >
            <div className="d-flex justify-content-between px-md-4"   >
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

                <Link  to='/ValidateOrders' >
              <MDBBtn className="updatebutton">View</MDBBtn>
              </Link>
                
                {/* <button icon={faMotorcycle}  style={{width: '20px' , height: '20px' }} class="d-flex justify-content-start" type= 'button' OnClick={() => setShow(true)}  >
              <i class="fas fa-edit fa-sm" aria-hidden="true "></i>
              </button> */}

            </MDBCardBody>
        </MDBCard>
        </MDBCol>
    </MDBRow>
    </MDBContainer>
</section>
    );

    }
// export default UpdateRestaurantProfile;