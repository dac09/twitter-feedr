'use strict';

let FeedService = autoload('./app/services/FeedService');
let err = require('../constants/err');

let controller = {
  current: (req, res, next) => {
		// Query DB using FeedService
		// then send response

		// I don't actually know what the user object will look like
		// Since I didn't manage to auth with twitter
		// This is just for demo
		let userFeed = FeedService.getLatestForUser(req.user.id);

		if (userFeed) {
			res.json(userFeed);
		} else {
			err.status = 404;
			res.json(err);
		}
  },

};

module.exports = controller;
