module.exports = (sequelize, DataType)=>{
    const Endereco = sequelize.define("Endereco", {
        idNewsletter:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fk_user:DataType.INTEGER,
        cep:DataType.STRING,
        endereco:DataType.STRING,
        numero:DataType.INTEGER,
        complemento:DataType.STRING,
        bairro:DataType.STRING,
        estado:DataType.STRING,
        cidade:DataType.STRING,
        
    },{
        tableName:"user_endereco",
        timestamps:false
    })
    return Endereco
}