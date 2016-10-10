'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Likes',
      'id',
    {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Likes', 'id');
  }
};

