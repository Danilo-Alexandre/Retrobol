const database = require("../models")
const Sequelize = require("sequelize")
const Op = Sequelize.Op


const clientes = {
    clienteIndex: async (req, res)=>{
        const {page = 1} = req.query
        const {nome, plano, assinatura} = req.query
        let plan = false



        const {count: total, rows:clientes} = await database.Usuario.findAndCountAll({
            order:[["User_nome","ASC"]],
            include: [{
                model: database.Plano, as: "plano", 
                
            }],
            limit: 5,
            offset: (page - 1) * 5
        })
        let totalPagina = Math.ceil(total/5)
        

        res.render("clientes", {clientes,page,plan, totalPagina,nome,plano,assinatura})

    },
    search: async (req, res)=>{
        const {nome, plano, assinatura} = req.query
        let totalPagina = 1
        const {page = 1} = req.query

        
        if(!plano && !assinatura){
            let plan = false
        const {count: total, rows:clientes} = await database.Usuario.findAndCountAll({
            order:[["User_nome","ASC"]],
            where:{
                User_nome: {[Op.like]: `%${nome}%`}
            },
            include: [{
                model: database.Plano, as: "plano", 
                
            
            }],
            limit: 5,
            offset: (page - 1) * 5
        })
        let totalPagina = Math.ceil(total/5)
    
        console.log(page);
        return res.render('clientes', {clientes,page,plan, totalPagina,nome,plano,assinatura})
    }else{
        let plan = true
        const {count: total, rows:clientes} = await database.Usuario.findAndCountAll({
            include: [{
                model: database.Plano, 
                as: "plano", 
                attributes: ['assinatura', 'plano','valor'], 
                where:{
                    plano: {[Op.like]: `%${plano}%`}, 
                    assinatura: {[Op.like]: `%${assinatura}%`}  
                }
                
            }],
            where: {
                User_nome: {[Op.like]: `%${nome}%`}
            },
            limit: 5,
            offset: (page - 1) * 5
        })
        let totalPagina = Math.ceil(total/5)

        console.log(page);
        return res.render('clientes', {clientes, page,plan, totalPagina,nome,plano,assinatura})

        }


            
             
                
            

    },

    alterarCliente: async (req, res)=>{
        const {id} = req.params
        const trazerCliente = await database.Usuario.findAll({
            include: [{
                model: database.Endereco, as: "endereco" , attributes: ['endereco', 'cep','cidade']

            }],
            where:{
                idUsuario: id
            }
        })
        res.render("editarCliente", {trazerCliente})

    },

    modificarCliente: async (req, res)=>{
       const {id} = req.params
       const {nome, sobrenome, telefone, senha, email, cpf, cep, endereco, cidade} = req.body

        await database.Usuario.update({
            User_nome: nome,
            User_sobrenome: sobrenome,
            User_email: email,
            User_cpf: cpf,
            User_celular: telefone,
            User_senha: senha

        },{
            where:{
                IdUsuario: id
            }
        })
        await database.Endereco.update({
            endereco,
            cep,
            cidade
        },{
            where:{
                fk_user: id
            }
        })

        res.redirect("/clientes")




    },

    deletarCliente: async (req, res)=>{
        const {id} = req.params
        await database.Endereco.destroy({
            where:{
                fk_user: id
            }
        })
        await database.Cartao.destroy({
            where:{
                fk_user: id
            }
        })
        await database.Checkout.destroy({
            where:{
                fk_user: id
            }
        })
        await database.Usuario.destroy({
            where:{
                IdUsuario: id
            }
        })
        res.redirect("/clientes")
    }
    
}


module.exports = clientes