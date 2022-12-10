const express = require('express');
const router = express.Router();
const handler = require('../handlers');

router.get('/', (req, res) => {
    return res.render('index');
});

module.exports = router;