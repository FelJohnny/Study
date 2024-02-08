const express = require('express');
const sequelize = require('./config/config-db.js')
const routes = require('./routes/index.js')//ou /routes

const app = express();

routes(app)


sequelize.authenticate()
.then(() => {
  console.log('Conexão estabelecida com sucesso.');
})
.catch((err) => {
  console.error('Não foi possível conectar ao banco de dados:', err);
});


module.exports = app;


//2083 