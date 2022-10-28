const modelPlanos = require("../model/modelPlanos")
const {validationResult} = require("express-validator")


const checkout ={

indexCheckout: (req, res) => {
    const listaPlanos = modelPlanos.todosPlanos()
    res.render("checkout", {listaPlanos})
},

listaPlanos: (req, res)=>{
    const {id} = req.params
    const plano = modelPlanos.planoPorId(id)
    console.log(plano, "oi");
    res.json(plano[0])
},

guardarPlano: (req, res)=>{
    const clientes = req.body
    const errors = validationResult(req)
    const listaPlanos = modelPlanos.todosPlanos()
    if(!errors.isEmpty()){
        return res.render("checkout", {errors: errors.array(), listaPlanos } )
    }

    modelPlanos.salvarCliente(clientes)
    res.send("formulario enviado")
}


}
module.exports = checkout
