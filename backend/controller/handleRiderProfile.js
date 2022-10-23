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


    try
    {
        let newdelivery = 0;
        let newrating = 0.0;
        let newwallet = 0;

        const newrider = await Rider.create({
            name: req.body.name,
            bio: req.body.bio,
            address: req.body.address,
            email: req.body.email,
            mobilenumber: req.body.mobilenumber,
            password: req.body.password,
            cnic: req.body.cnic,
            deliveries: newdelivery,
            rating: newrating,
            wallet: newwallet
    })
    res.status(201).send("Success");
    console.log(newrider.name + " saved to Rider collection.");

    }
    catch(err)
    {
        if (err.code === 11000)
        {
            res.status(300).send("Duplicated error");
        }
       else 
        {
            console.log("Failed fo create rider "+err.code);
        }
    }

}

const updateProfile = async (req, res) =>{

    const rider = await Rider.updateOne(
        {cnic:req.params.cnic},
        {$set:{
            name: req.body.name,
            bio: req.body.bio,
            address: req.body.address,
            email: req.body.email,
            mobilenumber: req.body.mobilenumber
        }})

    res.send({rider})
    console.log('Updated profile');
}

module.exports = {getProfile,updateProfile,makeProfile} 
