'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Restaurents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurantName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      vegOnly: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      cost: {
        type: Sequelize.ENUM('Low', 'Medium', 'High'),
        allowNull: false,
      },
      cuisineTypes: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      isOpen: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Restaurents');
  }
};