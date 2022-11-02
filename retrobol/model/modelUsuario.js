const fs = require("fs")

function salvaUsuario(user){
    const dados = user

    const todosUsuarios = JSON.parse(fs.readFileSync("database/usuarios.json", "utf-8"))

    todosUsuarios.push(dados)
    const dadosJson = JSON.stringify(todosUsuarios)
    fs.writeFileSync("database/usuarios.json", dadosJson)

}

function mostraUsuario(){
    const todosClientes = JSON.parse(fs.readFileSync("database/usuarios.json", "utf-8"))
    return todosClientes

}


function buscaEmailUsuario(email){
    const todosClientes = mostraUsuario()
    const buscaCliente = todosClientes.find(cliente => cliente.email == email)
    return buscaCliente

}


module.exports = {
    salvaUsuario,
    buscaEmailUsuario,
    mostraUsuario
}