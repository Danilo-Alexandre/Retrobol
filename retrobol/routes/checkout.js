const express = require("express")
const router = express.Router()
const checkoutController = require("../controllers/checkoutController")


router.get("/", checkoutController.indexCheckout )
router.post("/", checkoutController.guardarPlano)

router.get("/lista/planos/:id", checkoutController.listaPlanos )


module.exports = router