'use strict';
const { Airport } = require('../../../models');
const airports = require('../../dummy/airports.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    airports.forEach(async airport => {
      const [user, created] = await Airport.findOrCreate({
        where: { iata_code: airport.iata_code },
        defaults: {
          name: airport.name,
          city_code: airport.city_code,
          city_name: airport.city_code,
          latitude: airport.latitude,
          longitude: airport.longitude,
          country_iso2: airport.country_iso2,
          country_name: airport.country_name,
          gmt: airport.gmt,
        }
      });

      if (created) {
        console.log('CREATED');
      } else {
        console.log('NOTHING');
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
