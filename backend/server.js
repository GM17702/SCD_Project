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
//         cnic: '61101-1234579-9',
//         name: 'Ghulam Muhammad',
//         mobilenumber: '03328553987',
//         email: 'gm17703@gmail.com',
//         address: ' Bahria Enclave, Islamabad',
//         bio : 'Living to the Fullest',
//         deliveries: 25,
//         rating: 4.2,
//         wallet: 450
// });

// creatRider.save(function (err, rider) {
//     if (err)
//     {
//         console.log(err);
//     } 
//     else{
//         console.log(rider.name + " saved to Rider collection.");

//     }
    
//   });

// var createorder = new order({
//         orderid: 'ORD1001',
//         customerid:'5321',
//         restaurantid:'321',
//         orderpickup: 'KFC',
//         orderdestination: 'H#38, Sector B, Bahria Enclave',
//         orderprice: 1500,
//         customerConfirmed: true,
//         restaurantConfirmed: true,
//         riderConfirmed: false,
// });

// createorder.save(function (err, order) {
//     if (err)
//     {
//         return console.error(err);
//     } 
//     else{
//         console.log(order.orderid + " saved to Order collection.");

//     }
    
//   });

// var createorderitem1 = new orderitem({
//     orderid: 'ORD1001',
//     itemid:'12',
//     itemname:'Zinger Burger',
//     itemquantity: 3,
//     itemprice: 200,
// });

// var createorderitem2 = new orderitem({
// orderid: 'ORD1001',
// itemid:'13',
// itemname:'Pizza',
// itemquantity: 2,
// itemprice: 450,
// });

// createorderitem1.save(function (err, orderitem) {
// if (err)
// {
//     return console.error(err);
// } 
// else{
//     console.log(order.orderid + " saved to OrderItem collection.");

// }

// });

// createorderitem2.save(function (err, orderitem) {
// if (err)
// {
//     return console.error(err);
// } 
// else{
//     console.log(order.orderid + " saved to OrderItem collection.");

// }

// });

app.use('/',require('./routes/routing'))


app.listen(port);