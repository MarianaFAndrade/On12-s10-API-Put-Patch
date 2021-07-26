const controller = require ('../controllers/receitasControllers');
const express = require('express');
const router = express.Router();

router.get('/', controller.getAll);
router.get('/titulo', controller.getByTitle);
router.get('/porcao:id', controller.getByPorcao);

router.post('/cadastrar', controller.novaReceita)

router.put('/substituir:id', controller.substituirInformacoes)

router.patch("/substituir/nome:id", controller.substituirNome);

router.delete("/deletar:id", controller.deletarReceita)

module.exports = router;