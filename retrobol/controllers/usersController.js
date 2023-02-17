const database = require("../models")

const usersController = {
    userHome: async (req, res)=>{
        const {id}= req.params
        const user = await database.Usuario.findOne({
            where:{
                idUsuario : id
            }
        })
        
        res.render("users", {id, user})
    },
    logout: async (req, res)=>{
        
        
        res.clearCookie("token")
        res.redirect("http://localhost:3000/login")
        
    },
    userMeuPlano: async (req, res)=>{
        const {id}= req.params
        const user = await database.Usuario.findOne({
            where:{
                idUsuario : id
            },
            include: [{
                model: database.Plano, as: "plano", 
                
            
            }]
        })
        res.render("meu-plano", {id, user})
    },
    userEntrega: async (req,res)=>{
        const {id}= req.params
        const user = await database.Usuario.findOne({
            where:{
                idUsuario : id
            }
        })
        res.render("entrega", {user, id})
    },
    userConfiguracoes: async (req, res)=>{
        const {id}= req.params
        const user = await database.Usuario.findOne({
            where:{
                idUsuario : id
            }
        })
        res.render("configuracoes", {id, user})
    },
    userPedidos: (req, res)=>{
        const {id}= req.params
        res.render("pedidos", {id})
    },
    userPerfilColecionador: (req, res)=>{
        const {id}= req.params
        res.render("colecionador", {id})
    },
    userConfigDados: async (req,res)=>{
        const {id} = req.params
        const user = await database.Usuario.findOne({
            where:{
                idUsuario: id
            }
        });
        res.render("config-dados", {user, id})


    },
    userAlteraDados: async (req, res)=>{
        const {id} = req.params
        const {nome, sobrenome, celular} = req.body
      const user = await database.Usuario.update({
            User_nome: nome,
            User_sobrenome: sobrenome,
            User_celular: celular,
        },
        {
            where: {
                idUsuario: id
            }
        });
        res.redirect(`/users/${id}/configuracoes`)

    },
    userConfigEndereco: async (req, res) =>{
        const {id} = req.params
        const user = await database.Endereco.findOne({
            where:{
                fk_user: id
            },
            include: [{
                model: database.Usuario, as: "usuario", attributes: ["User_nome"]
                
            
            }]
        });
        res.render("config-endereco", {user, id})

    },
    alteraEndereco: async (req, res)=>{
        const {id} = req.params
        const {endereco, cep, cidade, complemento, bairro, estado} = req.body
    
         await database.Endereco.update({
            endereco,
            cep,
            cidade,
            complemento,
            bairro,
            estado,
        },{
            where:{
                fk_user: id
            }
        })
        res.redirect(`/users/${id}/configuracoes`)
    }



}

module.exports = usersController