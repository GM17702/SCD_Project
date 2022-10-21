import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    name: {type: String },
    prices: {type: Number},
    category : {type: String},
    description : {type: String}
},
{
    timestamps: true
})


const MenuModel = mongoose.model('menu', menuSchema)

export default MenuModel;