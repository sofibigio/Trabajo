
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
        })
    }
    
}; 

module.exports = controller; 