const axios = require('axios');
const querystring = require('query-string');
const moment = require('moment');

module.exports = {
    updateSchedule: async () => {
        const date = moment().add(14, 'days').format('YYYY-MM-DD');

        const params = querystring.stringify({
            access_key: process.env.GOFLIGHT_ACCESS_KEY,
            date: date,
            iataCode: 'CGK',
            type: 'departure'
        });

        const { data } = await axios.get(`https://app.goflightlabs.com/advanced-future-flights?${params}`);

        data.data.forEach(el => {
            console.log(el.flight.number);
        });

        return 'ok';
    }
};