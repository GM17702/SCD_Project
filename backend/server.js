/*
const express = require('express')
const app = express()

app.get("/api", (req, res) =>{
    res.json({"users":["userone", "usertwo", "userthree"] })
})

app.listen(5000, () => {console.log("server started congrats!")})*/

import express from 'express';
// const db = require("./db")
import MenuRoute from './MenuRoute.js'
import MenuModel from './models/menuModel.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors())

app.get("/",(req, res) => {
    res.send("server working")
});

import mongoose from 'mongoose';
var mongoURL = 'mongodb+srv://Faizan_Javed:f!st2002460@cluster0.c8lvkp8.mongodb.net/FDS'
mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser:true}) 
/*
var createmenu = new MenuModel({
    name: "faizi",
    varients: ["faz", "jez"],
    prices: [100,200],
    category : "small",
    description : "maaf kr"
})


createmenu.save(function(err, menuModel){
    if(err){
        console.log("fail")
    }
    else{
        console.log("success")
    }
})
*/
app.use('/menu' , MenuRoute)

app.listen(port, ()=> console.log('Mongo connected'))