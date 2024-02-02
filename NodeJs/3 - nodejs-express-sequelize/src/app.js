const express = require('express');
const sequelize = require('./config/config-db.js')
const app = express();

app.use(express.json());

app.get('/teste', (req, res) => {
  res.status(200).send({ mensagem: 'boas-vindas à API' });
});


sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });


module.exports = app;


//2083 