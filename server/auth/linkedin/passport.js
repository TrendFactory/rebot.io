var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

exports.setup = function (User, config) {
  passport.use(new LinkedInStrategy({
    clientID: config.linkedin.clientID,
    clientSecret: config.linkedin.clientSecret,
    callbackURL: config.linkedin.callbackURL,
    scope: ['r_network', 'r_fullprofile', 'r_emailaddress', 'r_contactinfo']
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({
      'linkedin.id': profile.id
    },
    function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'user',
          username: profile.username,
          provider: 'linkedin',
          linkedin: profile._json
        });

	// save accessToken, refreshToken
	user.linkedin.accessToken = accessToken;
	user.linkedin.refreshToken = refreshToken;
	
        user.save(function(err) {
          if (err) done(err);
          return done(err, user);
        });
      } else {
        return done(err, user);
      }
    })
  }));
};
