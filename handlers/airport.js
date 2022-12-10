const { Airport } = require('../models');
const airports = require('../utils/dummy/airports.json');

module.exports = {
    index: async (req, res, next) => {
        try {
            const airports = await Airport.findAll();

            return res.status(200).json({
                status: true,
                data: airports
            });
        } catch (err) {
            next(err);
        }
    },
    create: (req, res, next) => {
        try {
            let arr = [];

            airports.forEach(async airport => {
                const [user, created] = await Airport.findOrCreate({
                    where: { iata_code: airport.iata_code },
                    defaults: {
                        name: airport.name,
                        city_code: airport.city_code,
                        city_name: airport.city_name,
                        latitude: airport.latitude,
                        longitude: airport.longitude,
                        country_iso2: airport.country_iso2,
                        country_name: airport.country_name,
                        gmt: airport.gmt,
                    }
                });

                arr.push(user);


                if (created) {
                    console.log('CREATED');
                } else {
                    console.log('NOTHING');
                }
            });

            return res.status(200).json({
                status: true,
                data: arr
            });
        } catch (err) {

        }
    }
};