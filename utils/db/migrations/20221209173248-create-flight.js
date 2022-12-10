'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flight_number: {
        type: Sequelize.STRING
      },
      fight_code: {
        type: Sequelize.STRING
      },
      origin_code: {
        type: Sequelize.STRING
      },
      destination_code: {
        type: Sequelize.STRING
      },
      aircraft_code: {
        type: Sequelize.STRING
      },
      airline_code: {
        type: Sequelize.STRING
      },
      departure_terminal: {
        type: Sequelize.STRING
      },
      departure_gate: {
        type: Sequelize.STRING
      },
      departure_scheduled_time: {
        type: Sequelize.STRING
      },
      arrival_terminal: {
        type: Sequelize.STRING
      },
      arrival_gate: {
        type: Sequelize.STRING
      },
      arrival_scheduled_time: {
        type: Sequelize.STRING
      },
      aircraft_id: {
        type: Sequelize.INTEGER
      },
      airline_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Flights');
  }
};