import React, {useEffect} from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBContainer,  MDBRow,  MDBCard,  MDBCardText,  MDBCardBody,  MDBCardImage,  MDBBtn, MDBInput, } from 'mdb-react-ui-kit';
import logo from "./rider.png";
import './RiderProfileUpdate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faWallet, faMotorcycle} from "@fortawesome/free-solid-svg-icons"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ProfilePage() {

  const location = useLocation();
  const [locationstate, setlocationstate]= React.useState({bio:'cc', name:'', email:'', mobile:'', cnic:'',address:'', deliveries:'', rating:'', wallet:''})

  React.useEffect(() => {

    if (location.state)
    {
      let _state = location.state
      setlocationstate(_state)
    }
  }, [location])



    const navigate = useNavigate();
    const [bioValue,setbioValue] = React.useState(locationstate.bio);
    const [nameValue,setnameValue] = React.useState(location.name);
    const [emailValue,setemailValue] = React.useState(location.email);
    const [mobileValue,setmobileValue] = React.useState(location.mobile);
    const [cnicValue] = React.useState(location.cnic);
    const [addressValue,setaddressValue] = React.useState(location.address);


    const validateInput = async event => {

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

        let updateRider = fetch('/update/61101-12345678-9',{

          method: 'PUT',
          body: JSON.stringify({bioValue , nameValue, emailValue, mobileValue, addressValue}),
          headers: {'Content-Type': 'application/json'}

        });

        updateRider = updateRider.json();
        if (updateRider)
        {
          toast.success('Changes Validated!', {position: toast.POSITION.TOP_RIGHT});

          const delay = (ms) => new Promise(
            resolve => setTimeout(resolve, ms)
          );
         delay(2000);
          navigate('/');
        }

      }
    }





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
                  <MDBInput className="bio-field" label='Bio' id="typebio" value={bioValue} onChange={(e) => setbioValue(e.target.value)} />
                {/* <p className="text-muted mb-1">Full Stack Developer</p> */}
                <p className="text-muted mb-4">{addressValue}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn className="updatebutton" onClick={validateInput}>Confirm</MDBBtn>
                  <ToastContainer/>
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
                    <MDBInput label='Full Name' id='typename' type='name' value={nameValue} onChange={(e) => setnameValue(e.target.value)} />
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
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBInput label='Mobile Number' id='typeMobile' type='Mobile' value={mobileValue} onChange={(e) => setmobileValue(e.target.value)} />
                    {/* <MDBCardText className="text-muted">(097) 234-5678</MDBCardText> */}
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>CNIC</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                  <MDBInput id='typeCNIC' type='CNIC' value={cnicValue} disabled />
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