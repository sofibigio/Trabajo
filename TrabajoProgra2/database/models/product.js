module.exports = function(sequelize, DataTypes) {
    let alias = "Users";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        id_usuarios: {
            type: DataTypes.INEGER.UNSIGNED
        },
        nombre_imagen: {
            type: DataTypes.STRING(100)
        },
        nombe_producto: {
            type: DataTypes.STRING(100)
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
    }
 
 
    let config = {
        tableName: "usuarios",
        timestamps: false,
    }
    let Users = sequelize.define(alias, cols, config);
    return Users;
 }