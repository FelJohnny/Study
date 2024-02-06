const { Sequelize } = require('sequelize');


const config ={
    "development": {
        "username": process.env.USER_DB,
        "password": process.env.PASSWORD_DB,
        "database": process.env.DATABASE_DB,
        "host": process.env.HOST_DB,
        "port": process.env.PORT_DB,
        "dialect": 'mysql',
      }
}

//instanciando 
const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    port: config.development.port,
    dialect: 'mysql'
  });

module.exports = sequelize;