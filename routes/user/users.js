var express = require('express');
var router = express.Router();
var userController = require('../../controller/user/user');

/* GET users listing. */
router.get('/',userController.loginPage);
router.get('/quiz',userController.quiz);

module.exports = router;
