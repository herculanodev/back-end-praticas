const request = require('supertest');
const app = require('./index'); 



describe('GET /', () => {
  it('responde com a mensagem "Você fez uma requisição GET"', done => {
    request(app)
      .get('/')
      .expect(200, 'Você fez uma requisição GET', done);
  });
});
describe('POST /', function() {
  it('returns status 201', function(done) {
    request(app)
      .post('/')
      .send({ key: 'value' }) // Envie algum dado se necessário para sua aplicação
      .expect(201, done);
  });
});
describe('PUT /', function() {
  it('returns status 200', function(done) {
    request(app)
      .put('/')
      .send({ key: 'value' }) // Envie algum dado se necessário para sua aplicação
      .expect(200, done);
  });
});
describe('DELETE /', function() {
  it('returns status 204', function(done) {
    request(app)
      .delete('/')
      .expect(204, done);
  });
});

