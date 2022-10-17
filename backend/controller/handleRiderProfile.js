const getProfile = async (req, res) =>{
    res.json({message: 'GET'})
}

const updateProfile = async (req, res) =>{
    res.json({message: `UPDATE ${req.params.id}`})
}

module.exports = {getProfile,updateProfile} 