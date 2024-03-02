'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'usuarios',
      'senha',
      Sequelize.STRING,
      {
        before: 'email' // after option is only supported by MySQL
      }
    ); 
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'usuarios',
      'senha',
      Sequelize.STRING,
    );
  },
};
