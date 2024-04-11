const express = require('express');
const app = express();

app.use(express.json());














if(require.main === module){
app.listen(3000, ()=> console.log('servidor rodando na porta 3000'));


}
module.exports = app;

