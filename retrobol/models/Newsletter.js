module.exports = (sequelize, DataType)=>{
    const Newsletter = sequelize.define("Newsletter", {
        idNewsletter:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        email_newsletter:DataType.INTEGER,
        
    },{
        tableName:"newsletter",
        timestamps:false
    })


 

    
    


    return Newsletter
}