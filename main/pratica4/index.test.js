const request = require('supertest');
const app = require('./index');  // Verifique o caminho para o seu arquivo de entrada do Express

describe('GET /produtos', () => {
    it('retorna status 200 e um conteúdo do tipo JSON com o array de produtos', async () => {
        const response = await request(app)
            .get('/produtos')
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body).toEqual([
            { id: 1, nome: 'Produto A', preco: 10.00 },
            { id: 2, nome: 'Produto B', preco: 20.00 },
            { id: 3, nome: 'Produto C', preco: 30.00 }
        ]);
    });
});

describe('Teste de rota GET /produtos/1', () => {
    it('Deve retornar status 200 e conteúdo do tipo JSON', async () => {
        const response = await request(app)
            .get('/produtos/1')
            .expect(200)
            .expect('Content-Type', /json/);
    });
});


describe('Teste de rota GET /produtos/100', () => {
    it('Deve retornar status 404 e conteúdo do tipo JSON', async () => {
        const response = await request(app).get('/produtos/100');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });
});

describe('Teste da rota POST /produtos', () => {
    it('Deve retornar status 201 e conteúdo do tipo JSON', async () => {
        const produto = { nome: 'uva', preco: 20.00 };
        const response = await request(app)
            .post('/produtos')
            .send(produto)
            .set('Accept', 'application/json');
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json');
    });
});

describe('Teste da rota POST /produtos sem JSON', () => {
    it('Deve retornar status 422 e conteúdo do tipo JSON', async () => {
        const response = await request(app)
            .post('/produtos')
            .set('Accept', 'application/json');
        expect(response.status).toBe(400);
        expect(response.type).toBe('application/json');
    });
});

describe('Teste da rota PUT /produtos/1', () => {
    it('Deve retornar status 200 e conteúdo do tipo JSON', async () => {
        const produtoAtualizado = { nome: 'uva-verde', preco: 18.00 };
        const response = await request(app)
            .put('/produtos/1') // Mudança para PUT aqui
            .send(produtoAtualizado)
            .set('Accept', 'application/json');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
    });
});

describe('Teste da rota PUT /produtos/100', () => {
    it('Deve retornar status 404 e conteúdo do tipo JSON', async () => {
        const produtoAtualizado = { nome: 'uva-verde', preco: 18.00 };
        const response = await request(app)
            .put('/produtos/100') // Mudança para PUT aqui
            .send(produtoAtualizado)
            .set('Accept', 'application/json');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });
});
describe('Teste de rota DELETE /produtos/1', () => {
    it('Deve retornar o status 204 e sem conteúdo', async () => {
        const response = await request(app).delete('/produtos/1');
        expect(response.status).toBe(204); // Correção para toBe()
        expect(response.body).toEqual({});
    });
});

describe('Teste de rota DELETE /produtos/100', () => {
    it('Deve retornar o status 404 e um conteúdo JSON', async () => {
        const response = await request(app).delete('/produtos/100');
        expect(response.status).toBe(404); // Correção para toBe()
        expect(response.type).toBe('application/json'); // Correção para verificar tipo ao invés do corpo
    });
});
