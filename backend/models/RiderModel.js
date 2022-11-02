const mongoose = require('mongoose')

const riderSchema = mongoose.Schema({

    cnic :{
        type: 'string',
        required: true,
        unique: true
    },

    password :{
        type: 'string',
        required: true
    },

    name :{
        type: 'string',
        required: true
    },

    mobilenumber :{
        type: 'string',
        required: true
    },

    email :{
        type: 'string',
        required: true,
        unique: true
    },

    address :{
        type: 'string',
        required: true
    },

    bio :{
        type: 'string'
    },

    deliveries :{
        type: 'number',
    },

    rating :{
        type: 'number',
    },

    wallet :{
        type: 'number',
    }
},{ timestamps:true})

module.exports = mongoose.model('Rider', riderSchema)