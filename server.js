'use strict';

require('./utils/autoload')();

let express = require('express');
let http = require('http');
let numCPUs = require('os').cpus().length;

let Router = autoload('./app/Router');
let app = express();
var passport = require('passport');


// Read configuration files
const yConfig = require('yaml-config');

const config = yConfig.readConfig(`${__dirname}/config/app.yaml`, process.env.NODE_ENV);
app.locals.config = config;

let PORT = process.env.PORT || config.port || 3000;

let server = http.createServer(app);

/* MIDDLEWARE */
require('./config/middleware')(app, express);

// /* ROUTES */
Router.forEach(route => {
	if (route.middleware) {
		app.use(route.path, route.middleware, route.handler);
	} else {
		app.use(route.path, route.handler)
	}
});

/* ERRORS */
app.use((req, res, next) => {
  res.status(404);

  res.json({
    error: 'Not found'
  });
});


app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    error: err.message
  });
});

/* START SERVER */
server.listen(PORT);
console.log('Server ' + config.name + ' is running in process ' + process.pid + ' started on 127.0.0.1:' + PORT + '\n');
