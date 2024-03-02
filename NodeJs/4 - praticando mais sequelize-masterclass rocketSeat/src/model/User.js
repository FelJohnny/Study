'use strict';
const { Model, DataTypes } = require('sequelize');

class User extends Model{
    static init(sequelize){
        User.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize,
            modelName: 'User',
            tableName: 'usuario',
        })
    }
}

module.exports = User;