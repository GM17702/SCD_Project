import React from 'react';
// import RestaurantNavbar from './Components/RestaurantNavbar';

import UpdateRestaurantProfile from '../Components/UpdateRestaurantProfile';
import ValidateOrders from '../Components/ValidateOrders';
import ValidateOrdersList from '../Components/ValidateOrdersList';
import RestaurantMenu from '../Components/RestaurantMenu';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import foodData from "../Data/foodData"

export default function Menu() {

    

          
  return (
    <>
  <RestaurantMenu/>

{/* {foodData.map(foodData=>(
     
     <RestaurantMenu foodData={foodData} />
  
  ))} */}
   

 

     <BrowserRouter>
       <Routes>
        
          {/* <Route path='/RestaurantMenu' element={<div><RestaurantMenu /></div>} /> */}
          {/* <Route path='/' element={<div><RestaurantProfileManagement /></div>} />
          <Route  path='/ValidateOrders' element={<div> <ValidateOrders/>  </div>} /> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}