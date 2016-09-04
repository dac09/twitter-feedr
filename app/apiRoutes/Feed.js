'use strict';

/*
 * Todos Route
 * path: /todos
 */

let express = require('express');
const FeedService = require('../services/FeedService.js');

let router = express.Router();

router.get('/:id', (req, res, next) => {
	console.log('In Feed route', req.params)
	FeedService.feedForUser(req.params.id)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		})
});

module.exports = router;
