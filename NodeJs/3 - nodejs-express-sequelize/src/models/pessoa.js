'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models){
      // define association here
      
      Pessoa.hasMany(models.Curso,{
        foreignKey: 'pessoa_id'
      });
      Pessoa.hasMany(models.Matricula,{
        foreignKey: 'estudante_id',
        as: 'matriculaEstudante'
      })
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
  });
  return Pessoa;
};