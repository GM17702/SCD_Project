const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({

    orderid :{
        type: 'string',
        required: true,
        unique: true
    },

    customerid :{
        type: 'string',
        required: true,
    },

    restaurantid :{
        type: 'string',
        required: true,
    },

    riderid :{
        type: 'string',
        required: false
    },

    orderprice :{
        type: 'number',
        required: true,
    },

    orderpickup :{
        type: 'string',
        required: true
    },

    orderdestination :{
        type: 'string',
        required: true
    },

    customerConfirmed :{
        type: 'boolean',
        required: true
    },

    restaurantConfirmed :{
        type: 'boolean',
        required: true
    },

    riderConfirmed :{
        type: 'boolean',
        required: true
    },

},{ timestamps:true})

module.exports = mongoose.model('Order', orderSchema)