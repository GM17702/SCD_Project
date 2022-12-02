import express from 'express';
import MenuRoute from './MenuRoute.js'
import cors from 'cors';
const app = express();
const port  = 5000;
app.use(express.json());
app.use(cors())

app.get("/",(req, res) => {
    res.send("server working")
});

import mongoose from 'mongoose';
var mongoURL = 'mongodb+srv://Faizan_Javed:f!st2002460@cluster0.c8lvkp8.mongodb.net/FDS'
mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser:true}) 

app.use('/' , MenuRoute)


app.listen(port, ()=> console.log('Mongo connected'))