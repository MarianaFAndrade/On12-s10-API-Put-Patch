const express = require('express');
const app = express();

const index = require('./routes/index');
const receitas = require('./routes/receitasRoutes');

app.use(express.json());

app.use('/', index);
app.use('/receitas', receitas);

module.exports = app