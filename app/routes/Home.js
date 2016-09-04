'use strict';

/*
 * Feed Route
 * path: /feed
 */

let express = require('express');
const FeedService = require('../services/FeedService');

let router = express.Router();

router.get('/', (req, res, next) => {
	res.render('home');
})


router.get('/:id', (req, res, next) => {
	FeedService.feedForUser(req.params.id)
		.then((data) => {

			const renderData = {
				user: {
					name: data.name,
					picture: data.picture,
				},
				tweets: [],
			};

			// We're likely to change the object tweets
			// from a string, to allow more functionality
			data.tweets.map((tweet) => {
				renderData.tweets.push(
					{
						content: tweet,
					}
				)
			})

			res.render('home', renderData);

		})
		.catch((err) => {
			res.redirect('/');
		})
})

module.exports = router;
