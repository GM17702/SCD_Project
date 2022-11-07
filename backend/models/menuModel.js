import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    food_id: {type: 'string', unique: true},
    name: {type: 'string'},
    varient: {type: 'string'},
    price: {type: 'number'},
    quantity: {type: 'number'},
},
{
    timestamps: true
})


const MenuModel = mongoose.model('menus', menuSchema)

export default MenuModel;