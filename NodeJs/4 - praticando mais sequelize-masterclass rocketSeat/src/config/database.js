require('dotenv/config.js')

module.exports = {
    dialect: process.env.DIALECT_DB,
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE_DB,
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    define:{
        timestamps:true,
        underscored:true,
    },
};