const {check} = require("express-validator")

const validacaoCartao = [
    check("numeroCartao").isCreditCard().withMessage("Cartão de crédito inválido")
]

module.exports = validacaoCartao