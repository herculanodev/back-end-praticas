const express = require('express');
const router = express.Router();

let produtos = [
    { id: 1, nome: 'Produto A', preco: 10.00 },
    { id: 2, nome: 'Produto B', preco: 20.00 },
    { id: 3, nome: 'Produto C', preco: 30.00 }
];

// Rota GET para listar todos os produtos
router.get('/', (req, res) => {
    res.json(produtos);
});

// Rota GET para buscar um produto específico pelo ID
router.get('/:produtoId', (req, res) => {
    const id = parseInt(req.params.produtoId);
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
});

// Rota POST para adicionar um novo produto
router.post('/', (req, res) => {
    const { nome, preco } = req.body;
    if (!nome || preco === undefined) {
        return res.status(400).json({ error: "Nome e preço são obrigatórios" });
    }
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

// Rota PUT para atualizar um produto existente
router.put('/:produtoId', (req, res) => {
    const id = parseInt(req.params.produtoId);
    const { nome, preco } = req.body;
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }

    produto.nome = nome || produto.nome;
    produto.preco = preco || produto.preco;

    res.json(produto);
});

router.delete('/:produtoId', (req, res) => {
    const id = parseInt(req.params.produtoId);
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        // Produto não encontrado
        res.status(404).json({ msg: 'Produto não encontrado' });
    } else {
        // Remove o produto do array
        produtos.splice(index, 1);
        // Retorna o status 204 No Content
        res.status(204).send();
    }
});

module.exports = router;
