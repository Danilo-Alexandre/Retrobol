module.exports = (sequelize, DataType)=>{
    const Cartao = sequelize.define("Cartao", {
        idUser_Cartao:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fk_user:{
            type:DataType.INTEGER
        },
        numero_cartao:DataType.STRING,
        nome_cartao:DataType.STRING,
        validade_cartao:DataType.STRING,
        cvv:DataType.STRING,
        
    },{
        tableName:"user_cartao",
        timestamps:false
    })

    Cartao.associate = (models) =>{
        Cartao.belongsTo(models.Usuario,{
            foreignKey: "fk_user",
            as:"usuario"
        })
    }



    return Cartao
}