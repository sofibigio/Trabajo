const op = db.Sequelize.Op
const db = require("../database/models")
const Products = db.Products

const controller = {
    index: function(req, res){
        res.render("index", {productos: productos})
    },
    buscar: function(req, res){
        let busqueda = req.query.search;
        let error = {};
        Products.FindAll({
            include: [{association: "user"}, {association: "comentarios"}], where:{
                [op.or]:[{nombre_producto:{
                    [op.like]: `%${busqueda}`

                }},
            {descripcion:{ //acordarse de ponerlo en el modelo
                 [op.like]: `%${busqueda}`
            }} 
            ]
            }
        }).then(function(coincidencia){
            if(coincidencia.length==0){error.message= "No hay resultado para tu busqueda";
                res.local.errors = error;
                return res.render("search-results", {productos: coincidencia})
            } else{return res.render("search-results", {productos: coincidencia})}
        })
    },
    
};



module.exports = controller;