const express = require('express');
const app = express();
const produtosRouter = require('./router'); // Certifique-se de que este caminho está correto

app.use(express.json());
app.use('/produtos', produtosRouter);

if (require.main === module) {
    const PORT = 3001;
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}

module.exports = app;
