const express = require('express');
const app = express();
const produtoRoutes = require('./router'); // Ajuste o caminho conforme necessário e corrigido com aspas fechando a string

app.use(express.json()); // Middleware para parsear JSON
app.use('/produtos', produtoRoutes); // Monta as rotas de produto no caminho '/produtos'

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

module.exports = app;
