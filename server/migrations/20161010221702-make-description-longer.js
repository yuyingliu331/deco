'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Products', 'description', {
      type: Sequelize.STRING(1000)
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('Products', 'description', {
      type: Sequelize.STRING()
    });
  }
};
