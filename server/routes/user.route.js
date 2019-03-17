const express = require ('express');
const userCtrl = require ('../controllers/user.controller');

const router = express.Router ();

router.route ('/api/user').post (userCtrl.create);

module.exports = router;
