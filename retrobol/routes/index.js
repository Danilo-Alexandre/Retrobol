var express = require('express');
var router = express.Router();
const homeController = require("../controllers/homeController")





/* GET home page. */
router.get('/', homeController.index)
router.get('/cadastro', homeController.viewCadastro)
router.get('/login', homeController.viewLogin)

module.exports = router;
