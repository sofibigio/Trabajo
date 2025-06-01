module.exports = function(sequelize, DataTypes) {
    let alias = "Products";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        id_usuario: {
            type: DataTypes.INEGER.UNSIGNED  //como poner la foreign key
        },
        nombre_imagen: {
            type: DataTypes.STRING(100)
        },
        nombre_producto: {
            type: DataTypes.STRING(100)
        },
        descripcion: {
            type: DataTypes.STRING(300)
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
    }
 
 
    let config = {
        tableName: "productos",
        timestamps: false,
    }
    let Products = sequelize.define(alias, cols, config);
    return Products;
 }