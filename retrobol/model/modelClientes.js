const fs = require("fs")

function mostraClientes(){
    const todosClientes = JSON.parse(fs.readFileSync("database/clientes.json", "utf-8"))
    return todosClientes

}

function buscaCliente(id){
    const todosClientes = mostraClientes()
    const buscaCliente = todosClientes.find(cliente => cliente.id == id)
    return buscaCliente

}

function deletarCliente(id){
    const todosClientes = mostraClientes()
    const clienteDeletado = todosClientes.filter(cliente => cliente.id != id)
    const ClientesJson = JSON.stringify(clienteDeletado)
    fs.writeFileSync("database/clientes.json",ClientesJson)
    return ClientesJson
}

function atualizaCliente(id, nome, sobrenome, plano, assinatura, telefone, senha, email, cpf){
    const todosClientes = mostraClientes()

    todosClientes.find(cliente => {
        if(cliente.id == id){
        cliente.nome = nome
        cliente.sobrenome = sobrenome
        cliente.plano = plano
        cliente.assinatura = assinatura
        cliente.telefone = telefone
        cliente.senha = senha
        cliente.email = email
        cliente.cpf = cpf
        }

        console.log(id);

    })


    const clientesJson = JSON.stringify(todosClientes)
    fs.writeFileSync("database/clientes.json", clientesJson)



}


module.exports = {
    mostraClientes,
    buscaCliente,
    deletarCliente,
    atualizaCliente,


}