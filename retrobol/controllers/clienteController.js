const modelClientes = require("../model/modelClientes")


const clientes = {
    clienteIndex: (req, res)=>{
        const clientes = modelClientes.mostraClientes()
        res.render("clientes", {clientes})

    },

    alterarCliente: (req, res)=>{
        const {id} = req.params
        const trazerCliente = modelClientes.buscaCliente(id)
        res.render("editarCliente", {trazerCliente})

    },

    modificarCliente: (req, res)=>{
       const {id} = req.params
       const {nome, sobrenome, plano, assinatura, telefone, senha, email, cpf} = req.body
        modelClientes.atualizaCliente(id, nome, sobrenome, plano, assinatura, telefone, senha, email, cpf)
        res.redirect("/clientes")




    },

    deletarCliente: (req, res)=>{
        const {id} = req.params
        modelClientes.deletarCliente(id)
        res.redirect("/clientes")
    }
}


module.exports = clientes