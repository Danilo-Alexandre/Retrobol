const database = require("../config/database")

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

    Plano.associate = (models) =>{
        Plano.belongsToMany(models.Usuario,{
            as:"usuarios",
            foreignKey: "fk_plano",
            through: models.Checkout,
        })
    }



    return Plano
}