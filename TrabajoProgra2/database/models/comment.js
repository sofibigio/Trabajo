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
        texto: {
            type: DataTypes.STRING(200)
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        //pregunatr si va deleted_at
    }
 
 
    let config = {
        tableName: "comentarios",
        timestamps: false,
    }
    let Comment = sequelize.define(alias, cols, config);
    Comment.associate = function(models){
        Comment.belongsTo(models.Products, {
            as: "comentarios",
            foreignKey: "id_post"
        });
        Comment.belongsTo(models.Users, {
            as: "usuarios",
            foreignKey: "id_usuario"
        })

    }
    return Comment;
 }