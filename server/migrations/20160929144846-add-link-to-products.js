'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Products', 'link', {
      type: Sequelize.STRING,
      isUrl: true
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Products', 'link');
  }
};
