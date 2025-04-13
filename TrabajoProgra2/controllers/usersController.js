db = require('../bd/data')


const usersController = {
    login: function (req, res) {
        res.render('login')
    },
    miPerfil: function (req, res) {
        console.log(db),
        res.render('profile', {user: db.usuario}) 
    },
    register: function (req, res) {
        res.render('register')
    },

}; 
module.exports = usersController;