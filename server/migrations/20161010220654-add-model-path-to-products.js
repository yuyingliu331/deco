'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Products', 'modelPath', {
      type: Sequelize.STRING(1000)
    })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Products', 'modelPath');
  }
};
