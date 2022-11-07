import express  from "express";
const router = express.Router();
import menuModel from './models/menuModel.js'
import Customer from './models/Customer.js'
router.post("/menumanagement/create", async(req, res)=>{
try{
     const menu = await menuModel.create({
     food_id: req.body.food_id,
     name:req.body.name,
     varient:req.body.varient,
     price:req.body.price,
     quantity:req.body.quantity
      
 } )
}catch(err){
     console.log(err)

}

})

router.get('/getcustomerprofile', async (req,res,next)=>{
    
       const cust = await Customer.findOne();
      res.json({cust});
    
   });



export default router