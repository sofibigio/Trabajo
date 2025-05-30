db = require('../db/data');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { DATE } = require('sequelize');
const Users = db.Users;



const usersController = {
    login: function (req, res) {
        res.render('login')
    },
    miPerfil: function (req, res) {
        console.log(db),
        res.render('profile', {user: db.usuario, productos: db.productos}) 
    },
    register: function (req, res) {
        res.render('register')
    },
    procesarRegister: function (req, res) {
        let info = req.body;
        let error = {}; 
        if (info.nameUsuario== ""){
            error.message="Nombre de usuario obligatorio";
            res.locals.errors=error;
            return res.render('register')
        } else if (info.password==""){ 
            error.message="Contraseña obligatoria";
            res.locals.errors=error;
            return res.render('register') 
        
        }
        else if (info.email==""){
             error.message="Email obligatorio";
            res.locals.errors=error;
            return res.render('register') 
        } else if (info.password.length > 3){
             error.message="Debe contar con mas de 3 caracteres";
            res.locals.errors=error;
            return res.render('register') 
        } else{
            let foto = req.file.filename
            let nuevoUsuario = {
                nombre_usuario: info.nameUsuario,
                contrasenia: bcrypt.hashSync(info.password, 12),
                email: info.email,
                fecha: info.fecha,
                dni: info.dni,
                foto_perfil: foto, //preguntar foto
                created_at: new Date().toISOString, //preguntar como cargar fecha
                updated_at: info.updated_at //preguntar como cargar 
            }
            let repetido = {
                where: [{email: req.body.email}]
            }
            Users.findOne(repetido)
            .then(function(resultado){
                if (!resultado){
                    Users.create(nuevoUsuario)
                    .then(function(){
                        res.redirect("/Users/login")
                    }).catch(error)
                    
                }else {
                     error.message="El usuario ya se encuentra registrado";
                     res.locals.errors=error;
                     return res.render('register') 
                }
            })

            
        }
    } 
}; 
module.exports = usersController;