module.exports = (sequelize, DataType)=>{
    const Plano = sequelize.define("Plano", {
        idPlanos:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome_plano:DataType.STRING,
        trimestral:DataType.INTEGER,
        semestral:DataType.INTEGER,
        anual:DataType.INTEGER,
    },{
        tableName:"planos",
        timestamps:false
    })
    return Plano
}