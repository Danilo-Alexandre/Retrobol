const modelPlanos = require("../model/modelPlanos")
const {validationResult} = require("express-validator")
const {Plano} = require("../models")

const checkout ={

indexCheckout: async (req, res) => {
    const listaPlanos = await Plano.findAll()
    const clientes = []
    console.log(listaPlanos)
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
    console.log(clientes)
    // const listaPlanos = modelPlanos.todosPlanos()
    if(!errors.isEmpty()){
        return res.render("checkout", {errors: errors.array(), listaPlanos, clientes } )
    }


   

    // modelPlanos.salvarCliente(clientes)
    res.send("formulario enviado")
}


}
module.exports = checkout
