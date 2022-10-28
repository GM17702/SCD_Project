
const express = require('express')
const foodRoute = require('./foodRoute.js')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
const port  = 5000;
app.use(express.json());
app.use(cors())




// var mongoURL = 'mongodb+srv://Faizan_Javed:f!st2002460@cluster0.c8lvkp8.mongodb.net/FDS'
var mongoURL = 'mongodb+srv://GhazanfarJezzi:Tannaj2..@firstcluster0.ee9dyiz.mongodb.net/?retryWrites=true&w=majority'
// var mongoURL = 'mongodb+srv://GhazanfarJezzi:Tannaj2..@firstcluster0.ee9dyiz.mongodb.net/test'


try{
    mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser:true})
    console.log("db connected")

} catch(err){

    console.log("problem occored")
}


app.use('/' , foodRoute)

app.listen(port, ()=> console.log('Mongo connected'))