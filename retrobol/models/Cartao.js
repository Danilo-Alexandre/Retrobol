module.exports = (sequelize, DataType)=>{
    const Cartao = sequelize.define("Cartao", {
        idUser_Cartao:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        numero_cartao:DataType.STRING,
        nome_cartao:DataType.STRING,
        validade_cartao:DataType.STRING,
        cvv:DataType.STRING,
        
    },{
        tableName:"user_cartao",
        timestamps:false
    })
    return Cartao
}