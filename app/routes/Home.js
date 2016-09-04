'use strict';

/*
 * Feed Route
 * path: /feed
 */

let express = require('express');

let router = express.Router();

router.get('/', (req, res, next) => {
	res.send('Sadly - not enough time, as oAuth isn\'t working currently.')
})

module.exports = router;
