module.exports = (sequelize, DataType)=>{
    const Usuario = sequelize.define("Usuario", {
        idUsuario:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        User_nome:DataType.STRING,
        User_sobrenome:DataType.STRING,
        User_email:DataType.STRING,
        User_cpf:DataType.STRING,
        User_celular:DataType.STRING,
        User_senha:DataType.STRING,
    },{
        tableName:"usuarios",
        timestamps:false
    })
    Usuario.associate = (models)=>{
        Usuario.hasMany(models.Cartao,{
            foreignKey: "fk_user",
            as:"cartoes"
        });
        Usuario.hasMany(models.Endereco,{
            foreignKey: "fk_user",
            as:"endereco"
        });
        Usuario.belongsToMany(models.Plano,{
            as:"plano",
            foreignKey: "fk_user",
            through: models.Checkout

            
        })
    };
    
    
    
    

    return Usuario
}