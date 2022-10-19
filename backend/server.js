const express = require('express');
const colors = require('colors');
const connectDB = require('./db/db')
const dotenv = require('dotenv').config();
const rider = require('./models/RiderModel');
const port = process.env.PORT || 3001

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

// var creatRider = new rider({
//         cnic: '61101-12345678-9',
//         name: 'Ghulam Muhammad',
//         mobilenumber: '03328553987',
//         email: 'gm17702@gmail.com',
//         address: ' Bahria Enclave, Islamabad',
//         bio : 'Living to the Fullest',
//         deliveries: 25,
//         rating: 4.2,
//         wallet: 450
// });

// creatRider.save(function (err, rider) {
//     if (err)
//     {
//         return console.error(err);
//     } 
//     else{
//         console.log(rider.name + " saved to Rider collection.");

//     }
    
//   });

app.use('/',require('./routes/profile'))

app.listen(port);