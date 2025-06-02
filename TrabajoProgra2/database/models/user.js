const { FOREIGNKEYS } = require("sequelize/lib/query-types");

module.exports = function(sequelize, DataTypes) {
    let alias = "Users";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        nombre_usuario: {
            type: DataTypes.STRING(100)
        },
        email: {
            type: DataTypes.STRING(100)
        },
        contrasenia: {
            type: DataTypes.STRING(255)
        },
        fecha: {
            type: DataTypes.DATE
        },
        dni: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        foto_perfil:{
            type: DataTypes.STRING(255)
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
    }
 
    let config = {
        tableName: "usuarios",
        timestamps: false,
    }
    let Users = sequelize.define(alias, cols, config);
    Users.associate = function(models){
        Users.hasMany(models.Products, {
            as: "productos",
            foreignKey: "id_usuario"
        });
        Users.hasMany(models.Comment, {
            as: "comentarios",
            foreignKey: "id_usuario"
        })
    }
    return Users;
 }
 