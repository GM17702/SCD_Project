const mongoose = require('mongoose')

const orderitemSchema = mongoose.Schema({

    orderid :{
        type: 'string',
        required: true,
        unique: true
    },

    itemid :{
        type: 'string',
        required: true,
        unique: true
    },

    itemname :{
        type: 'string',
        required: true,
    },

    itemquantity :{
        type: 'number',
        required: true,
    },

    itemprice :{
        type: 'number',
        required: true
    },

    
},{ timestamps:true})

module.exports = mongoose.model('OrderItem', orderitemSchema)