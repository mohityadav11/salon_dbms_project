const express = require ('express');
const salonCtrl = require ('../controllers/salon.controller');
const authCtrl = require ('../controllers/auth.controller');

const router = express.Router ();

router
  .route ('/api/salon')
  .post (authCtrl.requireSignin, salonCtrl.create)
  .get (authCtrl.requireSignin, salonCtrl.list);

router
  .route ('/api/salon/:salonId')
  .get (authCtrl.requireSignin, salonCtrl.read)
  .post (authCtrl.requireSignin, salonCtrl.update);

module.exports = router;
