'use strict';

const Home = require('./routes/Home');
const apiFeed = require('./apiRoutes/Feed');
const express = require('express');

const passport = require('passport');

const Routes = [
	{
		path: '/api/feed',
		handler: apiFeed,
	},
	{
		path: '/',
		handler:  Home,
	},
];

module.exports = Routes;
