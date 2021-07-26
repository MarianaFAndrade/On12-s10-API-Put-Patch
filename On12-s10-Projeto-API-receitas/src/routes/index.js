const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        "title": "API-Receitas Reprograma",
        "version": "1.0.0",
        "message": "Bem-vinde a sua API de receitas, você vai poder incluir, buscar, apagar e ver várias receitas"
    })
})

module.exports = router;