const express = require ('express');
const salonTimeTableCtrl = require ('../controllers/salonTimeTable.controller');

const router = express.Router ();

router.route ('/api/salonTimeTable').post (salonTimeTableCtrl.create);

module.exports = router;
