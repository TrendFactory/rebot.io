'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RepoSchema = new Schema({
  date: String,
  stargazers_count: Number,
  pushed_at: Date,
  created_at: Date,
  language: String,
  estimation: Number,
  fork: Boolean,
  full_name: String,
  updated_at: Date,
  name: String,
  watchers_count: Number,
  forks_count: Number
});

module.exports = mongoose.model('Repo', RepoSchema);
