'use strict';
module.exports = function(sequelize, DataTypes) {
  var Wishlist = sequelize.define('Wishlist', {
    name: {
      type: DataTypes.STRING,
      defaultValue: "Untitled"
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
    }
  });
  return Wishlist;
};
