'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.changeColumn('Products', 'color',
    {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.changeColumn('Products', 'color',
    {
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
    });
  }
};
