
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { DATE } = require('sequelize');
const Users = db.Users;



const usersController = {
    login: function (req, res) {
        res.render('login')
    },

    procesarLogin: function(req, res){
        let error = {};
        if (req.body.email == " ") {
            error.message = "El email está vacío";
            res.locals.errors = error;
            return res.render("login")
        }
        else if (req.body.password == " ") {
            error.message = "La contraseña está vacía";
            res.locals.errors = error;
            return res.render("login")
        }
        else (Users.findOne ({where: [{email: req.body.email}]})
        .then(function (resultado) {
            if (resultado != null) {
                let contraseña = bcrypt.compareSync(req.body.password, resultado.contrasenia)
                if (contraseña) {
                    req.session.User = resultado.dataValues; // preguntar
                    req.session.User_id = resultado.dataValues.id;
                    if (req.body.recordar != undefined) {
                        res.cookie("id", resultado.dataValues.id) 
                    } return res.redirect("/")
                } else {error.message = "Contraseña incorrecta";
                    res.locals.errors = error;
                    return res.render ("login")
                }
            } else {
                error.message = "Email no registrado";
                res.locals.errors = error;
                return res.render ("login")
             }
        })
    )
    },

    logout: function (req, res){
        req.session.destroy();
        res.clearCookie("id");
        return res.redirect("/");
    },

    miPerfil: function (req, res) {
        // console.log(db),
        db.Products.findByPk(req.params.id, {
            include: [
                {association: "comentarios", include: [{association: "usuarios"}]}
            ]
        })
        .then(function(resultados) {
            res.send(resultados)
            
            res.render('profile', {user: resultados}) 
        })
    },
    register: function (req, res) {
        res.render('register')
    },
    procesarRegister: function (req, res) {
        let contrasenia = bcrypt.hashSync(req.body.password, 10)
        let nombre_usuario = req.body.nameUsuario
        let email = req.body.email
        let fecha = req.body.fecha_nacimiento
        let dni = req.body.dni
        let foto_perfil = req.body.img_perfil

        console.log(`password: ${contrasenia}`);
        console.log(`nombre: ${nombre_usuario}`);
        console.log(`email: ${email}`);
        console.log(`fecha: ${fecha}`);
        console.log(`dni: ${dni}`);
        console.log(`foto_perfil: ${foto_perfil}`);

        

        if (req.body.password == ""){
            return res.send("la contraseña esta vacia")
        }
        if (req.body.password.length < 3){
            return res.send("la contraseña debe tener al menos tres caracteres")
        }
        Users.findOne({where: {email: email}})
            .then(function(resultado){
                if (resultado) {
                    return res.send("El email ya esta registrado")
                }
            })

        Users.create( {
            nombre_usuario: nombre_usuario,
            email: email, 
            contrasenia: contrasenia,
            fecha: fecha,
            dni: dni,
            foto_perfil: foto_perfil,
           
        })
        .then(function(resultado){
            return res.redirect("/");
        })
        .catch(function(error){
            return res.send(error);
        });

   
            
        }
    } 
; 
module.exports = usersController;