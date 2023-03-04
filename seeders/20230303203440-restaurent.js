'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Restaurents', [
      {
        id: 1,
        restaurantName: 'radhe radhe',
        address: 'mulund',
        vegOnly: true,
        cost: 'Low',
        cuisineTypes: ['indian', 'french'],
        isOpen: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        restaurantName: 'mika',
        address: 'bhandup',
        vegOnly: true,
        cost: 'High',
        cuisineTypes: ['italian', 'indian'],
        isOpen: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        restaurantName: 'Royal food',
        address: 'ghatkoper',
        vegOnly: true,
        cost: 'High',
        cuisineTypes: ['italian', 'french'],
        isOpen: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        restaurantName: 'ram shayam',
        address: 'vidyavihar',
        vegOnly: true,
        cost: 'Low',
        cuisineTypes: ['indian', 'North indian'],
        isOpen: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        restaurantName: 'bansuri',
        address: 'mulund',
        vegOnly: true,
        cost: 'Low',
        cuisineTypes: ['indian', 'french', 'italian'],
        isOpen: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        restaurantName: 'starter',
        address: 'thane',
        vegOnly: true,
        cost: 'High',
        cuisineTypes: ['indian', 'north indian', 'south indian'],
        isOpen: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Restaurents', null, {});

  }
};
