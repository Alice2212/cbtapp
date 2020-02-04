var express = require('express');
var router = express.Router();
var superAdminController = require('../../controller/superadmin/sadmin');

/* GET users listing. */
router.get('/',superAdminController.registerPage);
router.get('/register',superAdminController.registerPage);
router.get("/registeredAdmin",superAdminController.regAdmin);
router.post('/register', superAdminController.register);
router.get('/registeredAdmin/remove/:id', superAdminController.delete);
router.get('/registeredAdmin/edit/:id', superAdminController.update);
router.post('/registeredAdmin/update', superAdminController.updating);


module.exports = router;