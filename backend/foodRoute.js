
const express = require('express')
const router = express.Router();
const foodModel = require('./models/foodModel')
const ValidateModel = require('./models/notificationModel')
const ProfileModel = require('./models/profileModel')
// import menuModel from './models/menuModel.js'


router.post("/Foodmanagement/create", async(req, res)=>{
try{
     const foodData = await menuModel.create({

    //  food_id: req.body.food_id,
    //  name:req.body.name,
    //  varient:req.body.varient,
    //  price:req.body.price,
    //  quantity:req.body.quantity
    ID: req.body.ID,
    FoodName: req.body.FoodName,
    RestaurantName: req.body.RestaurantName,
    Quantity: req.body.Quantity,
    Price: req.body.Price,
    FoodDetails: req.body.FoodDetails,
    FoodPic: req.body.FoodPic,
      
 } )
}catch(err){
     console.log(err)

}

})

router.get('/Food', async (req,res,next)=>{
    
       const food = await foodModel.find({});
      res.json({food});
    
   });


   router.get('/ValidateOrders', async (req,res,next)=>{
    
    const order = await ValidateModel.find({});
   res.json({order});
 
});

router.get('/profile', async (req,res,next)=>{
    
    const profile = await ProfileModel.find({});
   res.json({profile});
 
});

module.exports = router 
