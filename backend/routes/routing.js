const express = require('express');
const router = express.Router();
const {getAllOrders} = require('../controller/handleRiderOrders')
const {getOrderItems} = require('../controller/handleRiderOrderItems')
const {getProfile , updateProfile, makeProfile, RiderLoginAuthentication} = require('../controller/handleRiderProfile')

router.get('/orders', getAllOrders)
router.get('/orderitems/:orderid', getOrderItems)
router.get('/profile/:email', getProfile)
router.put('/update/:cnic', updateProfile )
router.post('/newRiderSignup', makeProfile)
router.post('/RiderLoginAuthenticate', RiderLoginAuthentication)



 module.exports = router;