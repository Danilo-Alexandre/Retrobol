var express = require('express');
var router = express.Router();
const homeController = require("../controllers/homeController")





/* GET home page. */
router.get('/', homeController.index)

router.get('/cadastro', homeController.viewCadastro)
router.post('/cadastro', homeController.registroUsuario)

router.get('/login', homeController.viewLogin)
router.post('/login', homeController.processLogin)

module.exports = router;
