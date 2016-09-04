'use strict';

/*
 * Feed Route
 * path: /feed
 */

let express = require('express');

let router = express.Router();

router.get('/fake', (req, res, next) => {

});

router.get('/', (req, res, next) => {
	console.log('entered feed')
	res.send('OK')
})

module.exports = router;
