module.exports = (sequelize, DataType)=>{
    const Checkout = sequelize.define("Checkout", {
        idUser_Checkout:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fk_user:DataType.INTEGER,
        fk_plano:DataType.INTEGER,
        
    },{
        tableName:"user_checkout",
        timestamps:false
    })


 

    
    


    return Checkout
}