## Thoughts

#### Why doesn't it work?
Ran into major issues authenticating with twitter's API.

#### Why API and Renderer in the same server?
Only because its for a demo, definitely worth separating into service and FE.

#### What was the plan if it all worked?
1. Make home page highly cacheable, if you detect a logged in user, redirect to feed
2. Feed should request data from twitter, then render tweets from DB
3. Client renders, makes async calls to /api/feed to update data without a refresh
