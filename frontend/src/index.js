import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RestaurantNavbar from './Components/RestaurantNavbar';


import Menu from './Pages/Menu'
// import RestaurantProfileManagement from './Components/RestaurantProfileManagement';
// import UpdateRestaurantProfile from './Components/UpdateRestaurantProfile';
// import ValidateOrders from './Components/ValidateOrders';
import Profile from './Pages/Profile';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



// import './RestaurantNav.css';
// import './RestaurantMenuManagement.css';
// import RestaurantNavbar from './Components/RestaurantNavbar';
// import RestaurantMenuManagement from './RestaurantMenuManagement'
// import reportWebVitals from './reportWebVitals';
// import Counter from './components/counter';
// const root = ReactDOM.createRoot(document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
    <React.StrictMode>

    <RestaurantNavbar />
     {/* <Profile/> */}

     {/* <RestaurantMenu/>  */}
     <Menu/>
     
    {/* <NotificationPop/> */}
    
      {/* <Routes>
          <Route path='/UpdateRestaurantProfile' element={<div><UpdateRestaurantProfile /></div>} />
          <Route path='/' element={<div><RestaurantProfileManagement /></div>} />
          <Route  path='/ValidateOrders' element={<div><ValidateOrders    /></div>} />
      </Routes> */}

      
  //   </React.StrictMode>
  //  </BrowserRouter>
  
);


reportWebVitals();