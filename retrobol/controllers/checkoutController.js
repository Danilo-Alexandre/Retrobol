const modelPlanos = require("../model/modelPlanos")
const {validationResult} = require("express-validator")
const {Plano} = require("../models")
const {Cartao} = require("../models")
const {Usuario} = require("../models")
const {Endereco} = require("../models")
const {Checkout} = require("../models")
const bcrypt = require("bcrypt")


const checkout ={

indexCheckout: async (req, res) => {
    const listaPlanos = await Plano.findAll()
    const clientes = []
    // console.log(listaPlanos[0].assinatura)
    res.render("checkout", {listaPlanos, clientes} )
},

listaPlanos: async (req, res)=>{
    const {id} = req.params
    const plano = await Plano.findOne({
        where:{
            idPlanos:id
        }
    })
    console.log(plano);
    res.json(plano)
},

guardarPlano: async (req, res)=>{
    const clientes = req.body
    const errors = validationResult(req)
    const listaPlanos = await Plano.findAll()
    console.log(clientes.enderecoEntrega)
    // const listaPlanos = modelPlanos.todosPlanos()
    if(!errors.isEmpty()){
        return res.render("checkout", {errors: errors.array(), listaPlanos, clientes } )
    }else{





        const dataClientes = {
            ...clientes,
            senha: bcrypt.hashSync(req.body.senha, 10),
            confirmar: bcrypt.hashSync(req.body.confirmar, 10)
            
        }
        
        const novoCliente = await Usuario.create({
            User_nome: dataClientes.nome,
            User_sobrenome: dataClientes.sobrenome,
            User_email: dataClientes.emailDados,
            User_cpf: dataClientes.cpf,
            User_celular: dataClientes.celular,
            User_senha: dataClientes.senha
        })

        const novoEndereco = await Endereco.create({
            fk_user: novoCliente.idUsuario,
            cep: dataClientes.cepEntrega,
            endereco: dataClientes.enderecoEntrega,
            numero: dataClientes.numeroEntrega,
            complemento: dataClientes.complementoEntrega,
            bairro: dataClientes.bairroEntrega,
            estado: dataClientes.estadoEntrega,
            cidade: dataClientes.cidadeEntrega
        })
        
        
        
        
        const novoCartao = await Cartao.create({
            
            fk_user: novoCliente.idUsuario,
            numero_cartao: clientes.numeroCartao,
            nome_cartao: clientes.nomeCartao,
            validade_cartao: clientes.validadeCartao,
            cvv: clientes.cvv,
            
        })

        const novoCheckout = await Checkout.create({
            
            fk_user: novoCliente.idUsuario,
            fk_plano: clientes.planos
            
            
        })
    }


   

    // modelPlanos.salvarCliente(clientes)
    res.send("formulario enviado")
}


}
module.exports = checkout
