const data = require("../bd/data");
const user = data.usuario; 
const productos = data.productos; 
const controller = {

    detalle: function(req,res){
        const producto = productos[0]; 
        res.render ('product', {
            producto: producto, 
            comentario: producto.comentarios
        });
    }, 
    agregar: function(req,res){
        res.render ("product-add", {
            usuario:user
        })
    }
    
}; 

module.exports = controller; 