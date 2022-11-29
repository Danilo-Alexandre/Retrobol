module.exports = (sequelize, DataType)=>{
    const Checkout = sequelize.define("Checkout", {
        idUser_Checkout:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fk_user:DataType.INTEGER,
        fk_plano:DataType.INTEGER,
        assinatura:DataType.STRING,
        
    },{
        tableName:"user_checkout",
        timestamps:false
    })


    Checkout.associate = (models) =>{
        Checkout.belongsTo(models.Usuario,{
            foreingKey: "fk_user",
            as:"usuario"
        })    
    }

    Checkout.associate = (models) =>{
        Checkout.belongsTo(models.Plano,{
            foreingKey: "fk_plano",
            as:"plano"
        })
    }


    return Checkout
}