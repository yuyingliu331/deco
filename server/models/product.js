'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    room: {
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
    color: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      validate: {
        isRGB: function(value) {
          for (var i = 0; i < value.length; i++) {
            if (value[i].length !== 9) {
              throw new Error('not a valid rgb');
            }
          }
        }
      }
    },
    material: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      }
    },
    photo: {
      type: DataTypes.STRING,
      isUrl: true
    },
    product3dModel: {
      type: DataTypes.STRING,
      isUrl: true
    },
    style: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
    }
  });
  return Product;
};
