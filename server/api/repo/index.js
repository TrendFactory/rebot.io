'use strict';

var express = require('express');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/:lang', function(req, res) {
  var lang = req.params.lang;
  
  res.json({
    language: lang,
    url: "http://github.com/asdasd/asdasd"
  });
});

module.exports = router;
