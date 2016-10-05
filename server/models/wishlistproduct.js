'use strict';

module.exports = function(sequelize, DataTypes) {
  var WishlistProduct = sequelize.define('WishlistProduct', {
    wishlistId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Wishlist',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    }
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return WishlistProduct;
};
