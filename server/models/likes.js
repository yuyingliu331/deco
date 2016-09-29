'use strict';
module.exports = function(sequelize, DataTypes) {
  var likes = sequelize.define('Likes', {
    productId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Product',
          key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'User',
          key: 'id'
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return likes;
};