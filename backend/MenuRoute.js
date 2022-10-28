import express  from "express";
const router = express.Router();
import menuModel from './models/menuModel.js'

router.post("/create", async(req, res)=>{
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
export default router