const data = require("../bd/data");
const productos = data.productos;
const controller = {
    index: function(req, res){
        res.render("index", {productos: productos})
    },
    buscar: function(req, res){
        res.render("search-results", {producto: productos[0]});
    },
    
};



module.exports = controller;