const express = require("express")
const router = express.Router()
const clienteController = require("../controllers/clienteController")
const middlewares = require("../middlewares/loginToken")



router.get("/", middlewares.authLogin,  clienteController.clienteIndex )
router.get("/alterar/:id", middlewares.authLogin, clienteController.alterarCliente )
router.get("/search", middlewares.authLogin, clienteController.search )

router.put("/alterar/:id", middlewares.authLogin, clienteController.modificarCliente )



router.delete("/deletar/:id", middlewares.authLogin, clienteController.deletarCliente)

module.exports = router