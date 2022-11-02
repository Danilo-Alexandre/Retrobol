var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")
const middlewares = require("../middlewares/loginToken")

/* GET users listing. */
router.get('/', 
            middlewares.authLogin, 
            usersController.userHome
);

router.get('/assinatura',
            middlewares.authLogin, 
            usersController.userAssinatura 
);

router.get('/configuracoes', 
            middlewares.authLogin, 
            usersController.userConfiguracoes
);

router.get('/pedidos', 
            middlewares.authLogin, 
            usersController.userPedidos 
);

router.get('/colecionador', 
            middlewares.authLogin, 
            usersController.userPerfilColecionador 
);

module.exports = router;
