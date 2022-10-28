const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
},

age: {
    type: Number,
    required: true,
},
username: {
    type: String,
    required: true,

},

});

const UserModel = mongoose.model("goals" , UserSchema)
module.exports = UserModel;
