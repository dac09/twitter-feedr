'use strict';
const axios = require('axios');
let err = require('../constants/err.js');
const cheerio = require('cheerio');


let service = {
  feedForUser: (id) => {
		if (id) {
		return axios.get(`https://twitter.com/${id}`)
						.then((res) => {
							let details = service.findUserDetails(res.data);
							let tweets = service.parseTweets(res.data);

							details.tweets = tweets;

						  return details;
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

	findUserDetails: (html) => {
		let $ = cheerio.load(html)
		let profileCard = $('.ProfileCardMini-avatarImage');

		let userDetails = {};

		let profileAttributes = profileCard.attr();
		userDetails.name = profileAttributes.alt;
		userDetails.picture = profileAttributes.src;

		return userDetails;
	}


};

module.exports = service;
