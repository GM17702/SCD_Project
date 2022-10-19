const express = require('express');
const router = express.Router();
const {getProfile , updateProfile, makeProfile} = require('../controller/handleRiderProfile')

router.get('/:cnic', getProfile)
router.put('/update/:cnic', updateProfile )
//router.post('/update/:cnic', makeProfile)
//router.put('/update/:cnic', updateProfile )


 module.exports = router;