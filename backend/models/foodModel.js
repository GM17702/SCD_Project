const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({


    ID: {type: 'string',  unique: true},
    FoodName: {type: 'string'},
    RestaurantName: {type: 'string'},
    Quantity: {type: 'number'},
    Price: {type: 'number'},
    FoodDetails: {type: 'string'},
    FoodPic: {type: 'string'},

     
},

{
    timestamps: true
})


const foodModel = mongoose.model('food', foodSchema)
module.exports = foodModel 
