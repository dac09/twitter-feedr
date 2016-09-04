'use strict';
const axios = require('axios');
let err = require('../constants/err.js');
const cheerio = require('cheerio');


let service = {
  feedForUser: (id) => {
		if (id) {
		return axios.get(`https://twitter.com/${id}`)
						.then((res) => {
						  return service.parseTweets(res.data);
						})
						.catch((error) => {
							err.status = 500;
							console.log(error)
							return err;
						})

		} else {
			err.status = 422;
			err.message = 'No user supplied';
			return Promise.reject(err)
		}
  },

	parseTweets: (html) => {
		let $ = cheerio.load(html)
		let profileContainer = $('.ProfileTimeline')
		let tweetsHtml = profileContainer.find('[data-item-type="tweet"] > .tweet > .content > .js-tweet-text-container');
		let tweets = [];

		tweetsHtml.map((i, el) => {
			tweets.push($(el).text().replace(/\n/g, ''))
		})

		return tweets;
	},


};

module.exports = service;
