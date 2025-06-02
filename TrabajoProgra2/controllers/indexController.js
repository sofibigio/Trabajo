
const db = require("../database/models")
const op = db.Sequelize.Op
const Products = db.Products

const controller = {
    index: function(req, res){
          Products.findAll({
            include: [{association: "usuarios"}, {association: "comentarios"}],
          }).then(function(resultados){
            
            res.render("index", {productos: resultados})
          });

    },
    buscar: function(req, res){
        let busqueda = req.query.search;
        console.log(busqueda);
        
        Products.findAll({
            include: [{association: "usuarios"}, {association: "comentarios"}], 
            where: [ 
                { nombre_producto: {[op.like]: `%${busqueda}%`}}
            ]
        }).then(function(resultado){
            console.log(resultado[0].id);
            
            res.render("search-results", {productos: resultado} )
            
        }).catch(function (error) {
            console.log(error);
            
        })
    },
    
};



module.exports = controller;