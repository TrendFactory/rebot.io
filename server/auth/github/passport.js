var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;

exports.setup = function (User, config) {
  passport.use(new GithubStrategy({
      clientID: config.github.clientID,
      clientSecret: config.github.clientSecret,
      callbackURL: config.github.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      User.findOne({
        'githubUniqId': profile.id
      },
      function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {

          user = new User({
	    githubUniqId: profile.id, 
            name: profile.username,
            email: profile.emails[0].value, // email can be 'undefined'
            role: 'user',
            provider: 'github',
            github: profile._json
          });

	  // save accessToken, refreshToken
	  user.github.accessToken = accessToken;
	  user.github.refreshToken = refreshToken;
	  
          user.save(function(err) {
            if (err) done(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      })
    }
  ));
};
