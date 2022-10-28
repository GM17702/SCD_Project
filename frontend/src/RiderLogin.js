import React from 'react'
import './RiderLogin/main.css';
import logo from './RiderLogin/riderlogin.png';
import riderlogo from './rider.png';
import './RiderLogin/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './RiderLogin/fonts/iconic/css/material-design-iconic-font.min.css';
import { toast } from 'react-toastify';
import {useNavigate , Link} from 'react-router-dom';


export default function RiderLogin() 
{

  const [emailValue,setemailValue] = React.useState();
  const [passwordValue,setpasswordValue] = React.useState();


  const navigate = useNavigate();


  const AuthenticateLogin = async event => {

    const emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if (!emailValue || !passwordValue)
    {
      toast.error('Empty fields not allowed', {position: toast.POSITION.TOP_RIGHT});
      return false;
    } 
    else if (!(emailcheck.test(emailValue)))
    {
      toast.error('Invalid Email Address', {position: toast.POSITION.TOP_RIGHT});
      return false;
    }
    else
    {
        let email = emailValue;
        let password = passwordValue;

          await fetch(`/RiderLoginAuthenticate`,{

          method: 'post',
          body: JSON.stringify({email, password}),
          headers: {'Content-Type': 'Application/json'}

        }).then ((response) => {

          if (response.status === 200)
          {
            toast.success('Login Authenticated!', {position: toast.POSITION.TOP_RIGHT});
            navigate('/rider/RiderProfile',{state:{email : email}});    
          }
          else
          {
            toast.error('Invalid Credentials', {position: toast.POSITION.TOP_RIGHT});
          }
        
        });
      
    }
   
  }



  return (
 <div className="limiter">
  <div className="container-login100" style={{backgroundImage: `url(${logo})`}}>
    <div className="wrap-login100">
      <div className="login100-form validate-form">
        <span className="login100-form-logo">
        <img className='rounded-circle' src={riderlogo} alt="Rider logo"/>
        </span>
        <span className="login100-form-title p-b-38 p-t-27"><br></br>
          Log in
        </span><br></br>
        <div className="wrap-input100">
          <input className="input100" type="text" placeholder="Email" value={emailValue}  onChange={(e) => setemailValue(e.target.value)} />
          <span className="focus-input100" data-placeholder="" />
        </div>
        <div className="wrap-input100">
          <input className="input100" type="password" placeholder="Password" value={passwordValue}  onChange={(e) => setpasswordValue(e.target.value)} />
          <span className="focus-input100" data-placeholder="" />
        </div>
        <div className="container-login100-form-btn">
          <button className="login100-form-btn" onClick={AuthenticateLogin}>
            Login
          </button>
          <Link to='/rider/RiderSignup' >
          <button className="login100-forma-btn">
            Signup Instead
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>


    
  )
}
