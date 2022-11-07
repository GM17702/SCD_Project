import React from 'react';

import './RestaurantMenus.css';
import RestaurantMenuFoodList from '../Components/RestaurantMenuFoodList'
import foodData from "../Data/foodData"
export default function RestaurantMenu() {
    
    return(

       
    <section style={{ backgroundColor: '#eee' }}>
{/* 
      {foodData.RestaurantName} */}
FOOD ITEMS
 <div class="container">
 <br/> 

  <div className="row" >
  
 

  {/* {foodData.map((item) => ( <RestaurantMenuFoodList item={item} key={item.id} /> ))} 

   */}


   
   {/* changes===========================

   {foodData.map(foodData=>(
     
      <RestaurantMenuFoodList foodData={foodData} />
   
   )
    
    )} */}

<RestaurantMenuFoodList/>


  
    
    {/* <div class="col-md">
      One of three columns
    </div>

    <div class="col-md">
      One of three columns
    </div> */}

    
 </div>

 <br/>
 


</div>

    </section>    
       

         );



 }