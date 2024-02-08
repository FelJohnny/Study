require('dotenv/config.js')

module.exports = {
    dialect: process.env.DIALECT_DB,
    host: process.env.HOST_DB,
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    port: process.env.PORT_DB
}

//criado para realizar as migrações, ele nao suporta o que consta no config-db.js por conta de ser um objeto.