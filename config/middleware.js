'use strict';

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const compression = require('compression');
const errorHandler = require('errorhandler');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');


module.exports = function(app, express) {

	const config = app.locals.config;

  let environment = process.env.NODE_ENV || 'development';

  if (environment === 'production') {
    app.use(compression());
  } else if (environment === 'development') {
    app.use(errorHandler());
  }

		
	app.engine('handlebars', exphbs({defaultLayout: 'main'}));
	app.set('view engine', 'handlebars');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(methodOverride());
  app.use(morgan('combined'));

};
