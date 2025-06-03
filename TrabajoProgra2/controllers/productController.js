
const db = require("../database/models");


const controller = {

    detalle: function(req,res){
        db.Products.findByPk(req.params.id, {
            include: [
                {association: "comentarios", include: [{association: "usuarios"}]}
            ]
        })
        .then(function (resultados){

            

            if (resultados) {
            return res.render('product', {
            producto: resultados, 
            comentario: resultados.comentarios
             });
            }
           
           console.log(resultados);
           
            

        })
        
    }, 
    agregar: function(req,res){
        res.render ("product-add", {
            usuario:user,
            user: user
        });
    },
    procesar: function(req,res){
        db.Products.create({
         nombre_imagen: req.body.foto,
         nombre_producto: req.body.texto,
         descripcion: req.body.desc,
         id_usuario: req.session.usuarioLogueado.id_usuario
        })
        .then(function(){
            return res.redirect("/");

        })
        .catch(function(error){
            console.log(error);
        })
    }
    
}; 

module.exports = controller; 