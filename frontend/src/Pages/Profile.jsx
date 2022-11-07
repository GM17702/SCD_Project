import React from 'react';
// import RestaurantNavbar from './Components/RestaurantNavbar';
import RestaurantProfileManagement from '../Components/RestaurantProfileManagement';
import UpdateRestaurantProfile from '../Components/UpdateRestaurantProfile';
import ValidateOrders from '../Components/ValidateOrders';
import ValidateOrdersList from '../Components/ValidateOrdersList';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import orderData from "../Data/orderData"
export default function Profile() {

    

          
  return (
    <>
    {/* <React.StrictMode> */}
     {/* <BrowserRouter> */}
     {/* <UpdateRestaurantProfile />
     <ValidateOrders/> */}
     {/* <ValidateOrders/> */}
<RestaurantProfileManagement />
       {/* <Routes>
          <Route path='/UpdateRestaurantProfile' element={<div><UpdateRestaurantProfile /></div>} />
          <Route path='/' element={<div><RestaurantProfileManagement /></div>} />
          <Route  path='/ValidateOrders' element={<div> <ValidateOrders/>  </div>} />
      </Routes> */}
      {/* </BrowserRouter> */}
      {/* </React.StrictMode> */}
      </>
  );
}