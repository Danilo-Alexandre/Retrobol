

const usersController = {
    userHome: (req, res)=>{
        res.render("users")
    },
    userAssinatura: (req, res)=>{
        res.render("assinatura")
    },
    userConfiguracoes: (req, res)=>{
        res.render("configuracoes")
    },
    userPedidos: (req, res)=>{
        res.render("pedidos")
    },
    userPerfilColecionador: (req, res)=>{
        res.render("colecionador")
    }




}

module.exports = usersController