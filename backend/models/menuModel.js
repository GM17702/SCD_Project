import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    name: {type: String },
    varients: [],
    prices: [],
    category : {type: String},
    description : {type: String}
},
{
    timestamps: true
})


const MenuModel = mongoose.model('menus', menuSchema)

export default MenuModel;