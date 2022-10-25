const express = require("express")
const router = express.Router()
const clienteController = require("../controllers/clienteController")


router.get("/", clienteController.clienteIndex )
router.get("/alterar/:id", clienteController.alterarCliente )

router.put("/alterar/:id", clienteController.modificarCliente )



router.delete("/deletar/:id", clienteController.deletarCliente)

module.exports = router