var express = require('express');
var router = express.Router();
const usersController = require ('../controllers/usersController');

/* GET users listing. */
router.get('/profile/:id', usersController.miPerfil);


router.get('/login', usersController.login);
router.post('/login', usersController.procesarLogin);


router.get('/register', usersController.register);
router.post('/register', usersController.procesarRegister);

router.post('/logout', usersController.logout);

module.exports = router;
