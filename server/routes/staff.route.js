const express = require ('express');
const authCtrl = require ('../controllers/auth.controller');
const staffCtrl = require ('../controllers/staff.controller');

const router = express.Router ();

router.route ('/api/staff').post (authCtrl.requireSignin, staffCtrl.create);

module.exports = router;
