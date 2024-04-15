const request = require('supertest');
const app = require('./index'); // Certifique-se de que o caminho até o arquivo principal está correto

describe('POST /produtos', () => {
    it('deve criar um produto e retorná-lo com o id correto', async () => {
        const dadosProduto = { nome: 'produto1', preco: 20.00 };
        const resposta = await request(app)
            .post('/produtos')
            .send(dadosProduto)
            .expect('Content-Type', /json/)
            .expect(201);

        // Verifica se o id retornado é 4, considerando os dados iniciais
        expect(resposta.body).toHaveProperty('id', 4);
        expect(resposta.body).toHaveProperty('nome', dadosProduto.nome);
        expect(resposta.body).toHaveProperty('preco', dadosProduto.preco);
    });
});

describe('GET /produtos/:id', () => {
    it('deve retornar um produto com id, nome e preço especificados', async () => {
        const id = 1;
        const resposta = await request(app)
            .get(`/produtos/${id}`)
            .expect('Content-Type', /json/)
            .expect(200);

        expect(resposta.body).toHaveProperty('id', id);
        expect(resposta.body).toHaveProperty('nome', 'Produto A');
        expect(resposta.body).toHaveProperty('preco', 10.00);
    });

    it('deve retornar status 404 e mensagem "Produto não encontrado"', async () => {
        const id = 100;
        const response = await request(app)
            .get(`/produtos/${id}`)
            .expect('Content-Type', /json/)
            .expect(404);

            expect(response.body).toHaveProperty('error', 'Produto não encontrado.');

    });
});
describe('POST /produtos sem JSON', () => {
    it('deve retornar status 400 e uma mensagem de erro', async () => {
        const response = await request(app)
            .post('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toHaveProperty('error', 'Nome e preço são obrigatórios.');
    });
});

describe('PUT /produtos/:id', () => {
    it('deve atualizar o produto e retornar o produto atualizado com status 200', async() => {
      const produtoId = 1;
      const dadosAtualizados = {
        nome: 'uva-verde',
        preco: 12.11
      };
  
      const response = await request(app)
        .put(`/produtos/${produtoId}`)
        .send(dadosAtualizados)
        .expect('Content-Type', /json/)
        .expect(200);
  
      expect(response.body).toHaveProperty('id', produtoId);
      expect(response.body).toHaveProperty('nome', dadosAtualizados.nome);
      expect(response.body).toHaveProperty('preco', dadosAtualizados.preco);
    });
  });
  
  describe('PUT /produtos/:id', () => {
    it('deve retornar o status 404 e mensagem de erro quando o produto não for encontrado', async()=>{
        const produtoId= 100;
        const dadosAtualizados = {
            nome:'NoExistence',
            preco: 55.00
        };
        const response = await request(app)
        .put(`/produtos/${produtoId}`)
        .send(dadosAtualizados)
        .expect('Content-Type', /json/)
        .expect(404)

        expect(response.body).toHaveProperty('error', 'Produto não encontrado');
});
  });
  describe('DELETE /produtos/:id', () => {
    it('deve retornar status 204 e sem conteúdo', async() => {
        const produtoId = 1;

        const response = await request(app)
        .delete(`/produtos/${produtoId}`)
        .expect(204)

        expect(response.text).toEqual('')
    });
  });
  describe('DELETE /produtos/:id', () => {
    it('deve retornar status 404 e mensagem de erro quando o produto não é encontrado', async () => {
        const produtoId = 100; // Um ID que se presume não existir

        const response = await request(app)
            .delete(`/produtos/${produtoId}`)
            .expect('Content-Type', /json/)
            .expect(404); // Espera-se que a resposta seja 404

        expect(response.body).toHaveProperty('msg', 'Produto não encontrado');
    });
});