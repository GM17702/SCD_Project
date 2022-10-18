const express = require('express');
const router = express.Router();
const {getProfile , updateProfile, makeProfile} = require('../controller/handleRiderProfile')

router.get('/:cnic', getProfile)
router.post('/update/:cnic', makeProfile)
//router.put('/:id', updateProfile )


 module.exports = router;