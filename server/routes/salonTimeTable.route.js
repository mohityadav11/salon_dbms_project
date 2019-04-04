const express = require ('express');
const authCtrl = require ('../controllers/auth.controller');
const salonTimeTableCtrl = require ('../controllers/salonTimeTable.controller');

const router = express.Router ();

router
  .route ('/api/salonTimeTable')
  .post (authCtrl.requireSignin, salonTimeTableCtrl.create)
  .get (authCtrl.requireSignin, salonTimeTableCtrl.list);

module.exports = router;
