const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');
const connectDB = require('./db/db')
const dotenv = require('dotenv').config();
const rider = require('./models/RiderModel');
const order = require('./models/OrderModel');
const orderitem = require('./models/OrderItemModel');
const port = process.env.PORT || 3001

connectDB();

const app = express();

app.use(cors());
app.options('*', cors());

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
//         orderid: 'ORD1002',
//         customerid:'5321',
//         restaurantid:'321',
//         riderid: null,
//         orderpickup: 'Ye Lon Ma Restaurant',
//         orderdestination: 'H#38, Sector C1, Bahria Enclave',
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
//     orderid: 'ORD1002',
//     itemid:'20',
//     itemname:'Omelette Rice',
//     itemquantity: 3,
//     itemprice: 200,
// });

// var createorderitem2 = new orderitem({
// orderid: 'ORD1002',
// itemid:'21',
// itemname:'Chowmen',
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