## Thoughts

##Update!
Switched to scraping, for demonstration purposes. Obviously properly accessing the API is the best idea.

#### Why API and Renderer in the same server?
Only because its for a demo, definitely worth separating into service and FE.

#### What was the plan if it all worked?
1. Make home page highly cacheable, if you detect a logged in user, redirect to feed
2. Feed should request data from twitter, then render tweets from DB
3. Client renders, makes async calls to /api/feed to update data without a refresh

#### Why are the DB / lookup actions not async?
I was planning on using the await keyword: https://github.com/yortus/asyncawait
1. Makes it easier to read the code
2. To limit the time spent on configuration

#### Tests should mock request made to twitter
The unit tests here have been rushed, but in reality it really should mock the request to twitter, to allow testing of the actual api and not external dependencies.

#### Why isn't there AJAX requests being made from the client?
The oAuth foray cost me quite a lot of time, so I had to cut scope, and make sure atleast the server rendered pages work. The client is extremely basic, with the only javascript to redirect the user when they search for a twitter handle.

#### CSS / SASS
Again kept very simple, but should demonstrate BEM + Using responsive grids (although clearly not perfect).

