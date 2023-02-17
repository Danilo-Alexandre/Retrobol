module.exports = (sequelize, DataType)=>{
    const Contato = sequelize.define("Contato", {
        idNewsletter:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        Newsletter_email:DataType.STRING,
        Newsletter_msg:DataType.STRING,
        
    },{
        tableName:"",
        timestamps:false
    })
    return Contato
}