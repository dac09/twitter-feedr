'use strict';

// We don't need a model layer because
// DB is far too simple, especially with no schema

const db = require('../../config/db');

let service = {
  info: () => {
		return db.value();
  },

	position: () => {
		return db.get('position').value();
  },

	gridSize: () => {
		return db.get('gridSize').value();
  },

	otherRovers: () => {
		return db.get('otherRovers').value();
	},

	findRoverAt: (position) => {
		if (position.x && position.y) {
			return db.get(otherRovers)
				.find(position)
				.value();
		}

		return null;
	},



};

module.exports = service;
