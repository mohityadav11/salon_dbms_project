const express = require ('express');
const salonCtrl = require ('../controllers/salon.controller');
const authCtrl = require ('../controllers/auth.controller');

const router = express.Router ();

router
  .route ('/api/salon')
  .post (authCtrl.requireSignin, salonCtrl.create)
  .get (authCtrl.requireSignin, salonCtrl.list);

module.exports = router;
