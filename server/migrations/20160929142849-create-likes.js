'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Likes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
     productId: {
      type: Sequelize.INTEGER,
      references: {
          model: 'Products',
          key: 'id'
      }
    },
    userId:{
     type: Sequelize.INTEGER,
      references: {
          model: 'Users',
          key: 'id'
      }
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Likes');
  }
};
