const data = require("../bd/data");
const productos = data.productos;
const controller = {
    index: function(req, res){
        res.render("index", {productos: productos})
    }
    
};



module.exports = controller;