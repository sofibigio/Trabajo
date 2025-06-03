
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { DATE } = require('sequelize');
const Users = db.Users;



const usersController = {
    login: function (req, res) {
        res.render('login')
    },

    procesarLogin: function(req, res){
     let email = req.body.email
     let password = req.body.password

     Users.findOne({
        where: {email: email}
     })
     .then(function(resultado){
        console.log(resultado);
        if(!resultado){
            return res.send("el email no fue encontrado");
        }
        if (bcrypt.compareSync(password, resultado.contrasenia)){
            req.session.resultados = resultado
        }


        if(req.body.recordar){
            res.cookie("datos", resultado, { maxAge: 1000 * 60 * 15 })
        }
        return res.redirect("/")
     })
    
    },

    logout: function (req, res){
        req.session.destroy();
        res.clearCookie("id");
        return res.redirect("/");
    },

    miPerfil: function (req, res) {
        // console.log(db),
        db.Users.findByPk(req.params.id, {
            include: [
                {association: "comentarios", include: [{association: "usuarios"}]}
            ]
        })
        .then(function(resultados) {
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

         return Users.create( {
            nombre_usuario: nombre_usuario,
            email: email, 
            contrasenia: contrasenia,
            fecha: fecha,
            dni: dni,
            foto_perfil: foto_perfil,
           
        })
        .then(function(resultadoCreado){
            if (resultadoCreado){
                return res.redirect("/");
            }
            
        })
        .catch(function(error){
            return res.send(error);
        });

   
            
        }
    } 
; 
module.exports = usersController;