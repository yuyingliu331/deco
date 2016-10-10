'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn('Products', 'room'),
      queryInterface.removeColumn('Products', 'style'),
      queryInterface.removeColumn('Products', 'price'),
      queryInterface.removeColumn('Products', 'color')]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([queryInterface.addColumn('Products', 'room', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Products', 'price', {
        type: Sequelize.INTEGER
      },
      queryInterface.addColumn('Products', 'color', {
        type: Sequelize.ARRAY(Sequelize.STRING)
      }))
    ]);
  }
};
