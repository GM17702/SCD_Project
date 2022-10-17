const express = require('express');
const router = express.Router();
const {getProfile , updateProfile} = require('../controller/handleRiderProfile')

router.get('/', getProfile)

router.put('/:id', updateProfile )


 module.exports = router;