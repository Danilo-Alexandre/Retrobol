var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")
const middlewares = require("../middlewares/loginToken")

/* GET users listing. */
router.get('/:id', 
            middlewares.authLogin, 
            usersController.userHome
);

router.get('/:id/assinatura',
            middlewares.authLogin, 
            usersController.userAssinatura 
);

router.get('/:id/configuracoes', 
            middlewares.authLogin, 
            usersController.userConfiguracoes
);

router.get('/:id/configuracoes/dados', 
            middlewares.authLogin, 
            usersController.userConfigDados
            
);
            
router.put('/:id/configuracoes/dados',  
    usersController.userAlteraDados
);
            

router.get('/:id/pedidos', 
            middlewares.authLogin, 
            usersController.userPedidos 
);

router.get('/colecionador', 
            middlewares.authLogin, 
            usersController.userPerfilColecionador 
);

module.exports = router;
