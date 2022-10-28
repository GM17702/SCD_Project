// console.log('hello world')

const express = require('express')
const app = express()

//================================================================
//==========================================================================

// const colors = reqiure('colors')

const dotenv = require('dotenv').config()

const {errorHandler} = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')
const port = process.env.PORT || 5002 

//  connectDB(
//     "mongodb+srv://GhazanfarJezzi:Tannaj2..@firstcluster0.ee9dyiz.mongodb.net/Restaurant_Data?retryWrites=true&w=majority"
// );


// this is removed after new video

app.use(express.json())
app.use(express.urlencoded( {extended: false}))

app.use('/api/goals', require('./goalRoutes'));

app.use(errorHandler)

app.listen(port , () => console.log(`server started on port ${port}`))



//========================================================================
//====================================================================




//===========================================new yt video//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// const mongoose = require('mongoose')
// const UserModel = require('./models/goals')



// // mongoose.connect("mongodb+srv://GhazanfarJezzi:Tannaj2..@firstcluster0.ee9dyiz.mongodb.net/test")
// mongoose.connect("mongodb+srv://GhazanfarJezzi:Tannaj2..@firstcluster0.ee9dyiz.mongodb.net/test")




// app.get("/getUsers" , (req , res) =>{

//     UserModel.find({} , (err , result) => {
        
//         if(err) {

//             res.json(err);

//         } else{

//             res.json(result);  

//         }
//     })

// })

// app.post()

// app.listen(5002, () =>{
// console.log("server runs on port")

// });

//====================/////////////////////////////////////////////////////////////////////////////



// app.get('/api/goals' , (req , res) =>{

//     // res.send('get goals')
//     res.json({message: 'get goals'})
// })





//==================================================================





// import { application } from "express";


// const express = require("express");
// // const mongoose = require("mongoose");
// // const config = require("config");

// const app = express();

// app.use(express.json());

// // const db = config.get("mongoURI");

// // mongoose
// // .connect(db)
// // .then(() => console.log("mongo connected"))
// // .catch(err=> console.error(err));

// app.get("/" , (req, res) => {

//     res.send("server working");
// });

// const port = process.env.PORT || 5000;

// application.listen(port, ()=> 'server running on port ');