module.exports = function(sequelize, DataTypes) {
    let alias = "Comment";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        id_post: {
            type: DataTypes.INTEGER.UNSIGNED //foreign key
        },
        id_usuario: {
            type: DataTypes.INTEGER.UNSIGNED //foreign key
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        //pregunatr si va deleted_at
    }
 
 
    let config = {
        tableName: "comentarios",
        timestamps: false,
    }
    let Comment = sequelize.define(alias, cols, config);
    return Comment;
 }