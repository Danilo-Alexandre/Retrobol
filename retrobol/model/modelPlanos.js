const fs = require("fs")

function ModeloPlanos (id, nome, trimestral, semestral, anual){
    this.id = id
    this.nome = nome
    this.trimestral = trimestral
    this.semestral = semestral
    this.anual = anual
}



// const planoCoracao = new ModeloPlanos("Time do Coração", "199,99", "189,99", "159,99")
// const planoNacional = new ModeloPlanos("Times Nacionais", "209,99", "199,99", "169,99")
// const planoMundial = new ModeloPlanos("Times Mundiais", "219,99", "209,99", "189,99")






function todosPlanos(){
    const planosAssinaturas = JSON.parse(fs.readFileSync("database/planos.json", "utf-8"))
     return planosAssinaturas.map((plano)=>{
        return new ModeloPlanos(plano.id, plano.nome, plano.trimestral, plano.semestral, plano.anual)
     }) 
    
}

function planoPorId(id){
    const planos = todosPlanos()
    return planos.filter(plano=> plano.id === id )
}

function salvarCliente(user){

    const dados = user

    dados["id"] = Math.floor(Math.random() * 100 )
    const todosClientes = JSON.parse(fs.readFileSync("database/clientes.json", "utf-8"))

    todosClientes.push(dados)
    const dadosJson = JSON.stringify(todosClientes)
    fs.writeFileSync("database/clientes.json", dadosJson)

}

module.exports ={
     todosPlanos,
     planoPorId,
     salvarCliente,
}