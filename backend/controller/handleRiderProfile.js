const Rider = require('../models/RiderModel')


const getProfile = async (req, res) =>{

    const rider = await Rider.findOne({cnic:req.params.cnic})

    if (rider == null ){
        console.log("Rider not found")
    }
    else{
        console.log("Rider found")
        res.json({rider})
    }

    
}

const makeProfile = async (req, res) =>{

    // const newrider = await Rider.create({

    //     cnic: '61101-12345678-9',
    //     name: 'Ghulam Muhammad',
    //     mobilenumber: '03328553987',
    //     email: 'gm17702@gmail.com',
    //     address: ' Bahria Enclave, Islamabad',
    //     bio : 'Living to the Fullest',
    //     deliveries: 25,
    //     rating: 4.2,
    //     wallet: 450
    // })
    const rider = await Rider.UpdateOne(
        {cnic:req.params.cnic},
        {$set:req.body})

    res.json({newrider})
}

const updateProfile = async (req, res) =>{

    const rider = await Rider.UpdateOne(
        {cnic:req.params.cnic},
        {$set:req.body})

    res.send({rider})
    console.log('Updated profile');
}

module.exports = {getProfile,updateProfile,makeProfile} 