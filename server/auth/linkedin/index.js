'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
var config = require('../../config/environment');
var User = require('../../api/user/user.model');

var router = express.Router();

router
  .get('/', passport.authenticate('linkedin', {
    state: config.linkedin.state,
    failureRedirect: '/profile',
    session: false
  }))

  .get('/callback', passport.authenticate('linkedin', {
    failureRedirect: '/profile',
    session: false
  }), function(req, res) {
    res.redirect('/profile');
  });

module.exports = router;
