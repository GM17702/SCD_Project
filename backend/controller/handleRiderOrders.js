const Order = require('../models/OrderModel')
const Rider = require('../models/RiderModel')


const getAllOrders = async (req, res) =>{

    const order = await Order.find({riderid: ""})

    if (order == null ){
        console.log("No order found")
    }
    else{
        console.log("Orders found")
        res.json({order})
    }

    
}

const getDeliveries = async (req, res) =>{

    const rider = await Rider.findOne({email: req.params.email})
    const order = await Order.find({riderid: rider.cnic, riderConfirmed: false})

    if (order == null ){
        res.send('No Delivery found')
    }
    else{
        res.json({order})
    }

    
}

const confirmDelivery = async (req, res) =>{
    
    await Order.updateOne(
        {orderid:req.body.orderid},
        {$set:{
            riderConfirmed : true,
        }})

    res.send("Delivery Completed Succesfully")

}

const acceptOrder = async (req, res) =>{

    const rider = await Rider.findOne({email: req.body.rideremail})

    if(rider!=null)
    {
        await Order.updateOne(
            {orderid:req.params.orderid},
            {$set:{
                riderid : rider.cnic,
            }})
    
        console.log('Order Accepted');
        res.send('Order Accepted');
    }

    
}

module.exports = {getAllOrders, acceptOrder, getDeliveries, confirmDelivery} 