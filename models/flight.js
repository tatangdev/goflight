'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flight_number: DataTypes.STRING,
    fight_code: DataTypes.STRING,
    origin_code: DataTypes.STRING,
    destination_code: DataTypes.STRING,
    aircraft_code: DataTypes.STRING,
    airline_code: DataTypes.STRING,
    departure_terminal: DataTypes.STRING,
    departure_gate: DataTypes.STRING,
    departure_scheduled_time: DataTypes.STRING,
    arrival_terminal: DataTypes.STRING,
    arrival_gate: DataTypes.STRING,
    arrival_scheduled_time: DataTypes.STRING,
    aircraft_id: DataTypes.INTEGER,
    airline_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};