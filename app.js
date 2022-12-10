require('dotenv').config();
const {
    PORT = 3000
} = process.env;

const cronjob = require('./utils/cronjob/index.js');

const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/api');
const view = require('./routes/view');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(view);
app.use('/api', router);

app.listen(PORT, () => console.log('listening on port', PORT));


// const fs = require('fs');

// const bahan = require('./hasil-bandara.json');
// const kota = require('./bahan-bandara.json');

// async function main() {

//     const data = bahan.map(el => {
//         return {
//             name: typeof el.name == 'string' ? el.name.toLowerCase() : el.name,
//             iata_code: typeof el.iata_code == 'string' ? el.iata_code.toLowerCase() : el.iata_code,
//             city_name: typeof kota[el.iata_code] == 'string' ? kota[el.iata_code].toLowerCase() : kota[el.iata_code],
//             city_code: typeof el.iata_code == 'string' ? el.iata_code.toLowerCase() : el.iata_code,
//             latitude: typeof el.latitude == 'string' ? el.latitude.toLowerCase() : el.latitude,
//             longitude: typeof el.longitude == 'string' ? el.longitude.toLowerCase() : el.longitude,
//             country_iso2: typeof el.country_iso2 == 'string' ? el.country_iso2.toLowerCase() : el.country_iso2,
//             country_name: typeof el.country_name == 'string' ? el.country_name.toLowerCase() : el.country_name,
//             gmt: typeof el.gmt == 'string' ? el.gmt.toLowerCase() : el.gmt,
//         };
//     });

//     await fs.writeFileSync('hasil-bandara.json', JSON.stringify(data));
// }
// main()

