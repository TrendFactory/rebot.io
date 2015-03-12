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
      'email': profile.emails[0].value
    },
    function(err, user) {
      if (err) return done(err);
      if (!user) return done(err);

      // remove unnecessary fields
      console.log(profile);
      user.linkedin = profile._json;
      user.linkedin.threePastPositions = undefined;
      user.linkedin.threeCurrentPositions = undefined;
      user.linkedin.suggestions = undefined;
      user.linkedin.relatedProfileViews = undefined;
      user.linkedin.relationToViewer = undefined;
      user.linkedin.apiStandardProfileRequest = undefined;
      
      // save accessToken, refreshToken
      user.linkedin.accessToken = accessToken;
      user.linkedin.refreshToken = refreshToken;
	
     user.save(function(err) {
       if (err) done (err);
       return done(err, user);
     });
    })
  }));
};
