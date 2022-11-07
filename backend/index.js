import express from 'express'
import cors from 'cors'

const app= express();
import mongoose from 'mongoose'

import userModel from './model/users.js';




app.use(cors());


app.use(express.json());

mongoose.connect("mongodb+srv://ZaryabHasan:zabishahr@fds.iy1rnqv.mongodb.net/FDS?retryWrites=true&w=majority")

app.get("/getusers",  async (req, res) => {

  const user=   await userModel.find()
  res.json({user})
})

app.post("/createuser", async (req, res) => {
  const newuser=await userModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    repPassword: req.body.repPassword
  })

  console.log("New User Created")
    
})
app.listen(3002, () =>{
    console.log("Server running");
})