const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');
const User = require('../model/User.js')

const connection = new Sequelize(dbConfig);

User.init(connection)

module.exports = connection;