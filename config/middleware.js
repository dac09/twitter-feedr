'use strict';

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const compression = require('compression');
const errorHandler = require('errorhandler');
const morgan = require('morgan');
const passport = require('passport');

module.exports = function(app, express) {

	const config = app.locals.config;

	var Strategy = require('passport-twitter').Strategy;
	passport.use(new Strategy({
		consumerKey: config.twitter.consumerKey,
		consumerSecret: config.twitter.consumerSecret,
		callbackURL: `${config.host}:${config.port}/feed/fake`
	},
	function(token, tokenSecret, profile, cb) {
		return cb(null, profile);
	}));


	// Configure Passport authenticated session persistence.
	//
	// In order to restore authentication state across HTTP requests, Passport needs
	// to serialize users into and deserialize users out of the session.  In a
	// production-quality application, this would typically be as simple as
	// supplying the user ID when serializing, and querying the user record by ID
	// from the database when deserializing.  However, due to the fact that this
	// example does not have a database, the complete Twitter profile is serialized
	// and deserialized.
	passport.serializeUser((user, cb) => {
		cb(null, user);
	});

	passport.deserializeUser((obj, cb) => {
		cb(null, obj);
	});

  let environment = process.env.NODE_ENV || 'development';

  if (environment === 'production') {
    app.use(compression());
  } else if (environment === 'development') {
    app.use(errorHandler());
  }
	app.use(require('express-session')({ secret: 'example', cookie: {secure: false}, resave: true, saveUninitialized: true }));
	app.use(require('cookie-parser')());
	app.use(passport.initialize());
	app.use(passport.session());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(methodOverride());
  app.use(morgan('combined'));

};
