'use strict';

var express = require('express');
var _ = require('lodash');
var Repo = require('./repo.model');

var router = express.Router();

router.get('/:lang', function(req, res) {
  var lang = req.params.lang;

  Repo.find({language: req.params.lang}).limit(30).exec(function(err, repos) {
    
    if(err) {
      console.log(err);
      return res.render(500);
    }

    if (!repos) return res.send('404');
    return res.json(repos);
  });
});

module.exports = router;
