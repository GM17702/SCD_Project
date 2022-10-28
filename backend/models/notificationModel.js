const mongoose = require('mongoose')

const ValidateOrderSchema = new mongoose.Schema({


    orderID: {type: 'string',  unique: true},
    FoodName: {type: 'string'},
    CustomerName: {type: 'string'},
    Quantity: {type: 'number'},
    CustomerDetails: {type: 'string'},
     
},

{
    timestamps: true
})


const ValidateModel = mongoose.model('orders', ValidateOrderSchema)
module.exports = ValidateModel 
