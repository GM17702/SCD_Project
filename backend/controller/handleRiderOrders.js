const Order = require('../models/OrderModel')


const getAllOrders = async (req, res) =>{

    const order = await Order.find()

    if (order == null ){
        console.log("No order found")
    }
    else{
        console.log("Orders found")
        res.json({order})
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

module.exports = {getAllOrders} 