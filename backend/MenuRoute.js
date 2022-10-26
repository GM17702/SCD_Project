import express  from "express";
const router = express.Router();
import menuModel from './models/menuModel.js'

router.get("/getallfoods", async(req, res)=>{

     const menu = await menuModel.find()
      
            res.json({menu})
      
 } )



export default router;