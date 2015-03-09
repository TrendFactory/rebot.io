'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
var config = require('../../config/environment');

var router = express.Router();

router
  .get('/', passport.authenticate('linkedin', {
    state: config.linkedin.state,
    failureRedirect: '/signup',
    session: false
  }))

  .get('/callback', passport.authenticate('linkedin', {
    failureRedirect: '/signup',
    session: false
  }), auth.setTokenCookie);

module.exports = router;
