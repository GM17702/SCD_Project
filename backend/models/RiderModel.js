const mongoose = require('mongoose')

const riderSchema = mongoose.Schema({

    cnic :{
        type: 'string',
        required: true,
        unique: true
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
        required: true
    },

    address :{
        type: 'string',
        required: true
    },

    bio :{
        type: 'string'
    },

    deliveries :{
        type: 'integer',
    },

    rating :{
        type: 'integer',
    },

    wallet :{
        type: 'integer',
    }
},{ timestamps:true})

module.exports = mongoose.model('Rider', riderSchema)