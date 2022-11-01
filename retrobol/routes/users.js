var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/* GET users listing. */
router.get('/', usersController.userHome );
router.get('/assinatura', usersController.userAssinatura );
router.get('/configuracoes', usersController.userConfiguracoes );
router.get('/pedidos', usersController.userPedidos );
router.get('/colecionador', usersController.userPerfilColecionador );

module.exports = router;
