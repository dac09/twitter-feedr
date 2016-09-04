# Silly Mars Rover aka Remote Control Car API

 - **Mocha and Chai** for testing.
 - **Express**
 - **LowDB**

Structure
---------
```json
/app
	/controllers (Controllers of the app)
	/Middlewares (Middlewares for the routes of the app)
	/Routes (Routes for Controllers of the app)
	/Services (Services for using in any Controller)
	Router.js (Config file for Routing)
/config
	db.js (DB configuration for use)
	middleware.js (All middlewares for using in the express server)
  app.yaml (Config file for the app)
/tasks
	migrate.js (Script file for create the table for the test case)
/test (The test files for BDD)
/utils
	autoload.js (Script file for autoload specifics files)
server.js (Main file to start the app)
```

*install*
------------
<code> npm install </code>


*development*
------------

<code>npm run dev</code>

In Development mode the express app is starter with nodemon for automatic refresh when do changes.

*production*
------------

<code>npm start</code>

*testing*
-------
<code>npm start<code>
then ->
<code>npm test</code>

For Testing:

 - Mocha
 - Chai
 - Chai-http
