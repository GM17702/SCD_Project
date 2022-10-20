const express = require('express');
const colors = require('colors');
const connectDB = require('./db/db')
const dotenv = require('dotenv').config();
const rider = require('./models/RiderModel');
const order = require('./models/OrderModel');
const orderitem = require('./models/OrderItemModel');
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

var createorderitem1 = new orderitem({
        orderid: 'ORD1000',
        itemid:'22',
        itemname:'Biryani',
        itemquantity: 3,
        itemprice: 200,
});

var createorderitem2 = new orderitem({
    orderid: 'ORD1000',
    itemid:'23',
    itemname:'Pulao',
    itemquantity: 5,
    itemprice: 155,
});

createorderitem1.save(function (err, orderitem) {
    if (err)
    {
        return console.error(err);
    } 
    else{
        console.log(order.orderid + " saved to Order collection.");

    }
    
  });

  createorderitem2.save(function (err, orderitem) {
    if (err)
    {
        return console.error(err);
    } 
    else{
        console.log(order.orderid + " saved to Order collection.");

    }
    
  });

app.use('/',require('./routes/profile'))

app.listen(port);