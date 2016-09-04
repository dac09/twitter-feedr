'use strict';

let FeedService = autoload('./app/services/FeedService');
let err = require('../constants/err');

let controller = {
  current: (req, res, next) => {
		// Query DB using FeedService
		// then send response
    // res.json();
  },

};

module.exports = controller;
