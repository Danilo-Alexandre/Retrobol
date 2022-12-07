// const modelPlanos = require("../model/modelPlanos")
// const modelUsuario = require("../model/modelUsuario")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { jwtKey } = require("../config/secrets")
const { Usuario } = require("../models")
const { Plano } = require("../models")

const homeController = {
    index: async(req, res)=>{
        let planos = await Plano.findAll()
        res.render("home", {planos})
    },
    viewCadastro: (req, res)=>{
        res.render("cadastro")
    },
    viewLogin: (req, res)=>{
        
        res.render("login", {data: {}})
    },
    registroUsuario: async (req,res)=>{
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

        const buscaUsuario = await Usuario.findOne({
            where:{
                User_email:email
            }
        })

        if(!buscaUsuario){
            const novoUsuario = await Usuario.create({
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

        const usuarioCadastro = await Usuario.findOne({
            where:{
                User_email:email
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
      console.log(usuarioCadastro.idUsuario)
        if(!usuarioCadastro){

            return res.render("login", {errorsEmail, data: {email: req.body.email}})
        
        }else{
            if(bcrypt.compareSync(senha, usuarioCadastro.User_senha )){
                res.cookie("token", token)
                res.redirect(`/users/${usuarioCadastro.idUsuario}`, )

            }else{
                res.render("login", {errorsSenha, data: {email: req.body.email}})
            }

        }

    }
}

module.exports = homeController