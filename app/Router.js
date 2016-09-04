'use strict';

const Feed = require('./routes/Feed');
const Home = require('./routes/Home');
const apiFeed = require('./apiRoutes/Feed');
const express = require('express');

const passport = require('passport');

const Routes = [
	{
		path: '/login',
		handler: passport.authenticate('twitter'),
	},
	{
		path: '/login/success',
		middleware: [passport.authenticate('twitter', { failureRedirect: '/login' })],
		handler: (req, res) => {
			// Unable to retrieve token from session
			// Likely due to module error
			// https://github.com/jaredhanson/passport-twitter/issues/81
			console.log(req.session)
		},
	},
	{
		path: '/feed',
		handler: Feed,
	},
	{
		path: '/api/feed',
		handler: apiFeed,
	},
	{
		path: '/',
		middleware: (req, res, next) => {
			if (req.isAuthenticated && req.user) {
				res.redirect('/feed')
				return;
			}
			next();
		},
		handler:  Home,
	},
];

module.exports = Routes;
