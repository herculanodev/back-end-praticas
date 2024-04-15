const express = require('express');
const router = express.Router();

let produtos = [
    { id: 1, nome: 'Produto A', preco: 10.00 },
    { id: 2, nome: 'Produto B', preco: 20.00 },
    { id: 3, nome: 'Produto C', preco: 30.00 }
];
let proximoId = 4;

// Rota POST para criar um novo produto
router.post('/', (req, res) => {
    const { nome, preco } = req.body;
    if (!nome || preco == null) {
        return res.status(400).send({ error: 'Nome e preço são obrigatórios.' });
    }
    const novoProduto = { id: proximoId++, nome, preco };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// Rota GET para buscar um produto por ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ error: 'Produto não encontrado.' });
    }
});
router.put('/:id', (req, res) => {
    const { id } = req.params; // Acessa o ID passado na URL
    const { nome, preco } = req.body; // Acessa os dados enviados no corpo da requisição

    // Encontrar o índice do produto no array de produtos
    const index = produtos.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        // Se não encontrar o produto, retorna um erro 404
        return res.status(404).json({ error: 'Produto não encontrado' });
    } else {
        // Se encontrar, atualiza o produto com os novos valores
        produtos[index] = { id: produtos[index].id, nome, preco };
        // Retorna o produto atualizado com status 200 (implícito aqui)
        res.json(produtos[index]);
    }
});
router.delete('/:id', (req, res) => {
    const { id } = req.params; // Pega o ID do produto a partir dos parâmetros da URL

    // Encontrar o índice do produto no array de produtos
    const index = produtos.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        // Se não encontrar o produto, retorna um erro 404 com uma mensagem específica
        return res.status(404).json({ msg: 'Produto não encontrado' });
    }

    // Remove o produto do array
    produtos.splice(index, 1);

    // Retorna uma resposta sem conteúdo, com status 204
    res.status(204).send();
});

module.exports = router;
