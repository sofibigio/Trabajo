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
 