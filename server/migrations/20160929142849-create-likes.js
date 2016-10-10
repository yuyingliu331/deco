'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Likes', {
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
