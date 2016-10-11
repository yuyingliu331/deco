'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    size: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
      validate: {
        validDimensions: function(value) {
          if (value.length !== 3) {
            throw new Error('Must have length, width, and height');
          }
        }
      }
    },
    material: DataTypes.STRING,
    photo: {
      type: DataTypes.STRING,
      isUrl: true
    },
    product3dModel: {
      type: DataTypes.STRING,
      isUrl: true
    },
    modelPath: {
      type: DataTypes.STRING
    },
    scale: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
    }
  });
  return Product;
};
