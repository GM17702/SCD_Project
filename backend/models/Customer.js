import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    customer_id: {type: 'string',  unique: true},
    name: {type: 'string'},
    email: {type: 'string'},
    phone: {type: 'string'},
    address: {type: 'string'},
},
{
    timestamps: true
})


const CustomerModel = mongoose.model('customers', customerSchema)

export default CustomerModel;