const { Usuario } = require("../models")

const usersController = {
    userHome: (req, res)=>{
        const {id}= req.params
        console.log(id)
        res.render("users", {id})
    },
    userAssinatura: (req, res)=>{
        const {id}= req.params
        res.render("assinatura", {id})
    },
    userConfiguracoes: (req, res)=>{
        const {id}= req.params
        res.render("configuracoes", {id})
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
        const usuarioCadastro = await Usuario.findOne({
            where:{
                idUsuario: id
            }
        });
        console.log(usuarioCadastro.i);
        res.render("config-dados", {usuarioCadastro})


    },
    userAlteraDados: async (req, res)=>{
        const {id} = req.params
        const {nome, sobrenome, celular} = req.body
       const usuarioAtualizado = Usuario.update({
            User_nome: nome,
            User_sobrenome: sobrenome,
            User_celular: celular,
        },
        {
            where: {
                idUsuario: id
            }
        });
        console.log(nome, sobrenome, celular);
        res.send("ok")

    }




}

module.exports = usersController