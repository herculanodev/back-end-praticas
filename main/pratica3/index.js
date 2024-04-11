const express = require('express');
const app = express();

app.use(express.json()); // Permite que o corpo da requisição seja interpretado como JSON

// Método GET
app.get('/', (req, res) => {
    res.send('Você fez uma requisição GET');
});

// Método POST
app.post('/', (req, res) => {
    res.status(201).send('Você fez uma requisição POST');
});

// Método PUT
app.put('/', (req, res) => {
    res.send('Você fez uma requisição PUT');
});

// Método DELETE
app.delete('/', (req, res) => {
    res.status(204).send(); // Status 204 No Content: A resposta bem-sucedida indica que a requisição foi recebida e entendida, mas não há conteúdo para enviar de volta.
});

// Iniciar o servidor apenas se este arquivo for o ponto de entrada do aplicativo
if (require.main === module) {
    app.listen(3000, () => console.log('Servidor executando na porta 3000'));
}

module.exports = app;
