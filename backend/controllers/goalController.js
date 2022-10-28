// const asyncHandler = require('express-async-handler')
// @description it GET goals 
// @route GET /api/goals

const getGoals = async(req, res) => {
    // console.log(req.body)
    await res.status(200).send({message: ' get tyrion'})
}

// @description it SET goals 
// @route GET /api/goals

const setGoals =  async(req, res) => {
    if(!req.body.text){
        // res.status(400).json({message: 'please add a text'})
        res.status(400)
        throw new Error('Please add a text')
    }

    await res.status(200).send({message: ' Set tyrion'})
}

// @description it UPDATE goals 
// @route PUT /api/goals/:id

const updateGoals =  async(req, res) => {

    await res.status(200).send({message: `Update tyrion ${req.params.id}`})
}

// @description it DELETE goals 
// @route DELETE /api/goals/:id

const delGoals = async(req, res) => {

    await res.status(200).send({message: `Delete tyrion ${req.params.id}`})
}

module.exports = {

    getGoals, setGoals , updateGoals , delGoals
}