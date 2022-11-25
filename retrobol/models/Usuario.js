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
    return Usuario
}