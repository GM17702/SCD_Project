const express = require('express')
const router = express.Router()
const {getGoals , setGoals , updateGoals , delGoals} = require('./controllers/goalController')

// router.get('/' , async(req , res) =>{
//     await res.status(200).send({message: ' get tyrion'})   
// })

//down again a well structured

// router.get('/' , getGoals)
// router.post('/' , setGoals)
// router.put('/:id' , updateGoals)
// router.delete('/:id' , delGoals)

//now final version clean

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(delGoals).put(updateGoals)


module.exports = router

