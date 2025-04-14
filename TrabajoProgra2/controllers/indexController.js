const data = require("../db/data");
const productos = data.productos;
const controller = {
    index: function(req, res){
        res.render("index", {productos: productos})
    },
    buscar: function(req, res){
        res.render("search-results", {productos: productos});
    },
    
};



module.exports = controller;