import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RestaurantNavbar from './Components/RestaurantNavbar';
import UpdateRestaurantProfile from './Components/UpdateRestaurantProfile';
import ValidateOrders from './Components/ValidateOrders';
import RestaurantMenu from './Components/RestaurantMenu';
import RestaurantMenuFoodList from './Components/RestaurantMenuFoodList';

import Menu from './Pages/Menu'
import RestaurantProfileManagement from './Components/RestaurantProfileManagement';
// import UpdateRestaurantProfile from './Components/UpdateRestaurantProfile';
// import ValidateOrders from './Components/ValidateOrders';
import Profile from './Pages/Profile';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router , Routes, Route , } from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  <>
     {/* <React.StrictMode>  */}
    
    
    {/* <RestaurantProfileManagement /> */}
     {/* <Profile/> */}
     {/* <UpdateRestaurantProfile/> */}

     <Router>
     <RestaurantNavbar/>
     {/* <RestaurantProfileManagement />  */}

     <Routes>
  
       <Route path='/' element={<div><Profile /></div>} />
          <Route path='/UpdateRestaurantProfile' element={<div><UpdateRestaurantProfile /></div>} />          
          <Route  path='/ValidateOrders' element={<div> <ValidateOrders/>  </div>} />
        <Route  path='./RestaurantMenuFoodList' element={<div><RestaurantMenuFoodList/></div>} /> 
        <Route  path='/RestaurantMenu' element={<RestaurantMenu/>} /> 

        {/* <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Profile" element={<Profile />} /> */}
      </Routes>
    </Router>

     {/* <RestaurantMenu/>  */}
     {/* <Menu/> */}
     
    {/* <NotificationPop/> */}
    
      {/* <Routes>
          <Route path='/UpdateRestaurantProfile' element={<div><UpdateRestaurantProfile /></div>} />
          <Route path='/' element={<div><RestaurantProfileManagement /></div>} />
          <Route  path='/ValidateOrders' element={<div><ValidateOrders    /></div>} />
      </Routes> */}

      
       {/* </React.StrictMode>  */}
       </>
    // </BrowserRouter>
  
);


reportWebVitals();