'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      room: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      size: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
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
        type: Sequelize.ARRAY(Sequelize.INTEGER),
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
      material: Sequelize.STRING,
      price: {
        type: Sequelize.INTEGER,
        validate: {
          min: 1
        }
      },
      photo: {
        type: Sequelize.STRING,
        isUrl: true
      },
      product3dModel: {
        type: Sequelize.STRING,
        isUrl: true
      },
      style: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      classMethods: {
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Products');
  }
};
