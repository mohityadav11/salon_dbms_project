const express = require ('express');
const salonCtrl = require ('../controllers/salon.controller');

const router = express.Router ();

router.route ('/api/salon').post (salonCtrl.create);

module.exports = router;
