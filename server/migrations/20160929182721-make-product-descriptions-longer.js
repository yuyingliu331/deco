'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.changeColumn('Products', 'material',
    {
      type: Sequelize.STRING(1000)
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Products', 'material',
    {
      type: Sequelize.STRING
    });
  }
};
