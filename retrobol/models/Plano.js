module.exports = (sequelize, DataType)=>{
    const Plano = sequelize.define("Plano", {
        idPlanos:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        assinatura:DataType.STRING,
        plano:DataType.STRING,
        valor:DataType.INTEGER,
       
    },{
        tableName:"planos",
        timestamps:false
    })





    return Plano
}