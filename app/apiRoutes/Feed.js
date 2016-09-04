'use strict';

/*
 * Todos Route
 * path: /todos
 */

let express = require('express');
let twitterFeedCtrl = autoload('./app/controllers/twitterFeedCtrl');

let router = express.Router();

router.get('/', twitterFeedCtrl.current);

module.exports = router;
