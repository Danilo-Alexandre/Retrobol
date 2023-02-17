// const modelPlanos = require("../model/modelPlanos")
// const modelUsuario = require("../model/modelUsuario")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { jwtKey } = require("../config/secrets")
const database = require("../models")

const homeController = {
    index: async(req, res)=>{
        let planos = await database.Plano.findAll()
        let sended
        console.log({planos});
        res.render("home", {planos, sended})
    },
    viewCadastro: (req, res)=>{
        res.render("cadastro")
    },
    viewLogin: (req, res)=>{
        
        res.render("login", {data: {}})
    },
    registroUsuario:async (req,res)=>{
        const {email} = req.body
      
        const dataUsuarios = {
            ...req.body,
            senha: bcrypt.hashSync(req.body.senha, 10),
            confirmar: bcrypt.hashSync(req.body.confirmar, 10)
            
        }
        const errorEmail = {
            email:{
                msg: "Email já cadastrado"
            }   
        }

        const buscaUsuario = await database.Usuario.findOne({
            where:{
                User_email:email
            }
        })

        if(!buscaUsuario){
            await database.Usuario.create({
                User_nome: dataUsuarios.nome,
                User_sobrenome: dataUsuarios.sobrenome,
                User_email: dataUsuarios.email,
                User_cpf: dataUsuarios.cpf,
                User_celular: dataUsuarios.celular,
                User_senha: dataUsuarios.senha
            })
            return res.redirect("/login")

        }else{
            res.render("cadastro", {errorEmail})
        }
    },
    processLogin: async (req,res)=>{
        const {email, senha} = req.body

        const usuarioCadastro = await database.Usuario.findOne({
            where:{
                User_email:email
            }
        })

        const usuarioAdmin = await database.Administrador.findOne({
            where:{
                Admin_email:email
            }
        })




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
      console.log(usuarioAdmin)
        if(!usuarioCadastro && !usuarioAdmin){

            return res.render("login", {errorsEmail, data: {email: req.body.email}})
        
        }
        if(usuarioCadastro){
            if (bcrypt.compareSync(senha, usuarioCadastro.User_senha )){
            res.cookie("token", token)
            res.redirect(`/users/${usuarioCadastro.idUsuario}` )
            }else{
                res.render("login", {errorsSenha, data: {email: req.body.email}})
            }
        }
        if(usuarioAdmin){
            if(senha == usuarioAdmin.Admin_senha){
                res.cookie("token", token)
                res.redirect(`/clientes` )
            }else{
                res.render("login", {errorsSenha, data: {email: req.body.email}})
            }
        }

    },
    newsletter: async (req, res) =>{
        const {email} = req.body

        let planos = await database.Plano.findAll()

        await database.Newsletter.create({
            email_newsletter: email
        })

        
        console.log(email);

        
        
        res.render("home", { planos})


    }

}


module.exports = homeController