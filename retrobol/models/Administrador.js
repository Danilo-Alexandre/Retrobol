module.exports = (sequelize, DataType)=>{
    const Administrador = sequelize.define("Administrador", {
        idAdministradores:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        Admin_email:DataType.STRING,
        Admin_senha:DataType.STRING,
        
    },{
        tableName:"administradores",
        timestamps:false
    })
    return Administrador
}