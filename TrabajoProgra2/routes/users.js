var express = require('express');
var router = express.Router();
const usersController = require ('../controllers/usersController');

/* GET users listing. */
router.get('/:id', usersController.miPerfil);

router.post('/login', usersController.procesarLogin);
router.get('/login', usersController.login);

router.post('/register', usersController.procesarRegister);
router.get('/register', usersController.register);

router.post('/logout', usersController.logout);

module.exports = router;
