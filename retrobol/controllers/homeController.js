const modelPlanos = require("../model/modelPlanos")
const modelUsuario = require("../model/modelUsuario")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { jwtKey } = require("../config/secrets")


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
    },
    registroUsuario: (req,res)=>{
        const {email} = req.body
        // const error = {
        //     msg: "Email já cadastrado"
        // }
        const dataUsuarios = {
            ...req.body,
            senha: bcrypt.hashSync(req.body.senha, 10),
            confirmar: bcrypt.hashSync(req.body.confirmar, 10)
            
        }
        const todosUsuarios = modelUsuario.buscaEmailUsuario(email)
        if(!todosUsuarios){
            const novoUsuario = modelUsuario.salvaUsuario(dataUsuarios)
           return  res.redirect("/login")
        }else{
            res.redirect("/cadastro")
        }
        console.log(dataUsuarios);
    },
    processLogin: (req,res)=>{
        const {email, senha} = req.body
        const usuario = modelUsuario.buscaEmailUsuario(email)
        const token = jwt.sign({email}, jwtKey)
        const errorsEmail = {
            email:{
                msg: "Email não encontrado"
            }   
        }
        const errorsSenha = {
            senha:{
                msg: "Senha incorreta"
            }   
        }
      
        if(!usuario){

            return res.render("login", {errorsEmail})
        
        }else{
            if(bcrypt.compareSync(senha, usuario.senha )){
                res.cookie("token", token)
                res.redirect("/users")

            }else{
                res.render("login", {errorsSenha})
            }

        }
        console.log(usuario);

    }
}

module.exports = homeController