import React, { useState } from 'react';



export default function RestaurantMenuFoodList({foodData}) {



    return (
        // <div class="col-md-4" >
        //     <br/>
        // <div class="card" style={{width: 300, height: 400}}>
        //   <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone"/>
        //    <div class="card-body">
        //       <h5 class="card-title">{foodData.FoodName}</h5>
        //       <p class="card-text">{foodData.FoodDetails}</p>
        //       <div className='flex-container'>

        //         <div className='w-100'>
        //                 <p className=''>Price: {foodData.Price} $</p>
        //         </div>

        //         <div className='w-100'>
        //                 <p>Qty: {foodData.Quantity}</p>
        //         </div>

        //       </div>

        //        <a href="#!" class="btn btn-primary">Button</a>
        //    </div>    
        // </div>
        // </div>


        // <div class="row-md-2" >
        //     <br/>

        //     <div class="card" style={{width: 800, height: 210}} >

        //     <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-left" alt="Fissure in Sandstone" style={{width: 300, height: 200}}/>
        //     <div class="card-body" >
                
        //     <h5 className='position-absolute top-0 end-0 '>{foodData.FoodName}</h5> 

        //     <p class="card-text">{foodData.FoodDetails}</p>
            
        //     </div>    
        //     <div>
            
        //     </div>
        //     </div>
        // </div>
        
        // <div class="container h-100 py-5">
        // <div class="row d-flex justify-content-center align-items-center h-100">
        //   <div class="col-10">
    
        //     <div class="d-flex justify-content-between align-items-center mb-4">
        //       <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
        //       <div>
        //         <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
        //               class="fas fa-angle-down mt-1"></i></a></p>
        //       </div>
        //     </div>
    
            <div class="card rounded-3 mb-4">
              <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center">
                  <div class="col-md-2 col-lg-2 col-xl-2">
                    <img src={foodData.FoodPic}
                        class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-3">
                    <p class="lead fw-normal mb-2"><h4>{foodData.FoodName}</h4></p>
                    <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
                    <p class="lead fw-normal mb-2">{foodData.FoodDetails}</p>
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button class="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i class="fas fa-minus"></i>
                    </button>
    
                    <input id="form1" min="0" name="quantity" value="2" type="number"
                      class="form-control form-control-sm" />
    
                    <button class="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 class="mb-0">{foodData.Price}$</h5>
                  </div>
                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
  

    );



}