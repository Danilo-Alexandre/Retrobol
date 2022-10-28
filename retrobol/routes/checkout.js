const express = require("express")
const router = express.Router()
const checkoutController = require("../controllers/checkoutController")
const validacaoCartao = require("../middlewares/autenticacaoCartao")





router.get("/", checkoutController.indexCheckout )
router.post("/", validacaoCartao, checkoutController.guardarPlano)

router.get("/lista/planos/:id", checkoutController.listaPlanos )


module.exports = router