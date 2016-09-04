'use strict';

const low = require('lowdb');
const db = low();


// Instantiate LowDB
// Using in memory storage

// Hard coding this for the sake of the test
db.defaults({
	users: [],
	activeUsers: [],
})
.value();

module.exports = db;
