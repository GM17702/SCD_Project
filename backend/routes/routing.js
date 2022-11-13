const express = require('express');
const router = express.Router();
const {getAllOrders, acceptOrder, getDeliveries, confirmDelivery} = require('../controller/handleRiderOrders')
const {getOrderItems} = require('../controller/handleRiderOrderItems')
const {getProfile , updateProfile, makeProfile, RiderLoginAuthentication} = require('../controller/handleRiderProfile')

router.get('/orders', getAllOrders)
router.get('/orderitems/:orderid', getOrderItems)
router.get('/profile/:email', getProfile)
router.get('/riderAcceptedDeliveries/:email', getDeliveries)

router.put('/update/:cnic', updateProfile )
router.put('/acceptRiderOrder/:orderid', acceptOrder)
router.put('/confirmRiderDelivery', confirmDelivery)

router.post('/newRiderSignup', makeProfile)
router.post('/RiderLoginAuthenticate', RiderLoginAuthentication)




 module.exports = router;