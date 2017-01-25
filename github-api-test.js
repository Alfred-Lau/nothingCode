var GitHub = require('github-api');

var MY_OAUTH_TOKEN = '2cd4e94861e81262fd99e82f55226707da5bb86e'
// basic auth
var gh = new GitHub({
   // username: 'FOO',
   // password: 'NotFoo'
      token: MY_OAUTH_TOKEN
    
});

var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided

me.getProfile().then(function (data) {
	console.log(data);
})