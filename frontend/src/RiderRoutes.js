import React from 'react';
import RiderNavbar from './RiderNavbar/RiderNavbar';
import RiderProfile from './RiderProfile/RiderProfile';
import RiderOrder from './RiderOrders/RiderOrder';
import RiderProfileUpdate from './RiderUpdateProfile/RiderProfileUpdate';
import RiderSignup from './RiderSignup/RiderSignup';
import RiderLogin from './RiderLogin/RiderLogin';
import RiderHome from './RiderHome/RiderHome';
import RiderDeliveries from './RiderDeliveries/RiderDeliveries';
import Footer from './Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RiderRoutes() 
{

//   const [tokenStatus, setTokenStatus] = useState(false);

  const newToken = () => 
  {
    
}


  return (
    <BrowserRouter>

        <Routes>
          
          <Route path='/rider/RiderLogin' element={<div><RiderLogin tokengetter={newToken} /></div>} />

          <Route path='/rider/riderSignup' element={<div><RiderSignup /></div>} />

          <Route path='/rider/updateRiderProfile' element={<div><RiderNavbar /><RiderProfileUpdate /></div>} />

          <Route path='/rider/RiderProfile' element={<div><RiderNavbar /><RiderProfile /></div>} />

          <Route forceRefresh={true} path='/rider/RiderOrders' element={<div><RiderNavbar /><RiderOrder /></div>} />

          <Route forceRefresh={true} path='/rider/RiderDeliveries' element={<div><RiderNavbar /><RiderDeliveries /></div>} />

          <Route path='/rider/RiderHome' element={<div><RiderNavbar /><RiderHome /></div>} />

        </Routes> 
      <Footer />
      <ToastContainer/>

  </BrowserRouter>
)}