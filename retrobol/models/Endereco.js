module.exports = (sequelize, DataType)=>{
    const Endereco = sequelize.define("Endereco", {
        idUser_enderecos:{
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
        tableName:"user_enderecos",
        timestamps:false
    })

    Endereco.associate = (models) =>{
        Endereco.belongsTo(models.Usuario,{
            foreignKey: "fk_user",
            as:"usuario"
        })
    }


    return Endereco
}