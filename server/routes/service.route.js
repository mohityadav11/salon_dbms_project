const express = require ('express');
const authCtrl = require ('../controllers/auth.controller');
const serviceCtrl = require ('../controllers/service.controller.js');

const router = express.Router ();

router
  .route ('/api/service')
  .post (authCtrl.requireSignin, serviceCtrl.create)
  .get (authCtrl.requireSignin, serviceCtrl.list);

module.exports = router;
