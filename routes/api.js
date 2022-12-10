const express = require('express');
const router = express.Router();
const handler = require('../handlers');

router.get('/airports', handler.airport.index);
router.get('/airport', handler.airport.create);

module.exports = router;