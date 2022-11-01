const modelPlanos = require("../model/modelPlanos")

const homeController = {
    index: (req, res)=>{
        const todosPlanos = modelPlanos.todosPlanos()
        console.log(todosPlanos);
        res.render("home", {todosPlanos})
    },
    viewCadastro: (req, res)=>{
        res.render("cadastro")
    },
    viewLogin: (req, res)=>{
        res.render("login")
    }
}

module.exports = homeController