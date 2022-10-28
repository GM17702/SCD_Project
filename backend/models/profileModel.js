const mongoose = require('mongoose')
const ProfileSchema = new mongoose.Schema({


    profileID: {type: 'string',  unique: true},
    Profilename: {type: 'string'},
    Email: {type: 'string'},
    Phone: {type: 'number'},
    Address: {type: 'string'},


     
},

{
    timestamps: true
})


const ProfileModel = mongoose.model('profileData', ProfileSchema)
module.exports = ProfileModel 
