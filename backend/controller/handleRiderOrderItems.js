const OrderItem = require('../models/OrderItemModel')


const getOrderItems = async (req, res) =>{

    const orderitem = await OrderItem.find({orderid: req.params.orderid})

    if (orderitem == null ){
        console.log("No relevant order items found")
    }
    else{
        console.log("Order items found")
        res.json({orderitem})
    }

    
}

// const updateProfile = async (req, res) =>{

//     const rider = await Rider.updateOne(
//         {cnic:req.params.cnic},
//         {$set:{
//             name: req.body.name,
//             bio: req.body.bio,
//             address: req.body.address,
//             email: req.body.email,
//             mobilenumber: req.body.mobilenumber
//         }})

//     res.send({rider})
//     console.log('Updated profile');
// }

module.exports = {getOrderItems} 