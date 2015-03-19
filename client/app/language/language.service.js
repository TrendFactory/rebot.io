'use strict';

angular.module('buildingApp')
  .service('LanguageService', function(_, $log) {

    var langs = getDummy();        // object
    var parsed = parseLang(langs); // array

    this.getStat = function(lang) {
      var matched = _.find(parsed, function(l) {
	return l.language === lang;
      });

      return matched;
    };

    this.getLanguages = function() {
      return _.pluck(parsed, 'language');
    };

    function parseLang(langs) {

      var parsed = [];

      // convert to array
      for(var l in langs) {
	if (langs.hasOwnProperty(l)
	    && l !== "_id" && l !== "date") {
	  langs[l].language = l;
	  parsed.push(langs[l]);
	}
      }

      // sort desc
      parsed = _.sortBy(parsed, function(lang) {
	return -lang.estimation;
      });

      // add rank property
      for(var i = 0; i < parsed.length; i++) {
	parsed[i].rank = i + 1;
      }
      
      return parsed;
    };

    function getDummy() {
      return {
	"_id" : "5509569aa826c4d7f5858024",
	"date" : "2015.03.18",
	"Java" : {
          "estimation" : 61,
          "stargazers_count" : 3,
          "repos_count" : 21,
          "DAU" : 9,
          "watchers_count" : 3,
          "forks_count" : 6
	},
	"CSS" : {
          "estimation" : 3,
          "stargazers_count" : 0,
          "repos_count" : 3,
          "DAU" : 2,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"C" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Scala" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Common Lisp" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Prolog" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"HTML" : {
          "estimation" : 16,
          "stargazers_count" : 1,
          "repos_count" : 9,
          "DAU" : 4,
          "watchers_count" : 1,
          "forks_count" : 1
	},
	"CoffeeScript" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Shell" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"JavaScript" : {
          "estimation" : 37,
          "stargazers_count" : 2,
          "repos_count" : 13,
          "DAU" : 3,
          "watchers_count" : 2,
          "forks_count" : 4
	},
	"Haskell" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"PHP" : {
          "estimation" : 5,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 1
	},
	"Python" : {
          "estimation" : 2,
          "stargazers_count" : 0,
          "repos_count" : 2,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Emacs Lisp" : {
          "estimation" : 6,
          "stargazers_count" : 1,
          "repos_count" : 3,
          "DAU" : 1,
          "watchers_count" : 1,
          "forks_count" : 0
	},
	"Matlab" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	}
      };
    }
  })
  .service('RepoService', function($log, _) {


    this.getRepos = function(lang) {
      // TODO: get repos by lang
      var repos = getDummy();
      // sort by estimation
      var parsed = parseRepo(repos);
      return parsed;
    };

    // return most 30 trending repos;
    function parseRepo(repos) {
      var parsed = [];

      
      parsed = _.sortBy(repos, function(item) {
	// sort desc order
	return -(item.estimation);
      });

      for(var i = 0; i < parsed.length; i++) {
	// add last update column
	parsed[i].last_update = parsed[i].updated_at.split('T')[0];
	// add user column
	parsed[i].user = parsed[i].full_name.split('/')[0];
      }

      return parsed;
    }

    function getDummy() {
      return [
	{ "_id" : ("550a81b3a82613fcecbc6d73"),
          "date" : "2015.03.19",
          "stargazers_count" : 0,
          "pushed_at" : "2015-02-27T19:29:59Z",
          "created_at" : "2015-02-28T08:56:59Z",
          "githubUniqId" : "11022708",
          "estimation" : 1,
          "fork" : true,
          "full_name" : "jarangseo/final-test",
          "updated_at" : "2014-12-08T08:54:44Z",
          "html_url" : "https://github.com/jarangseo/final-test",
          "name" : "final-test",
          "watchers_count" : 0,
          "forks_count" : 0 },
	{ "_id" : ("550a81b3a82613fcecbc6d73"),
          "date" : "2015.03.19",
          "stargazers_count" : 0,
          "pushed_at" : "2015-02-27T19:29:59Z",
          "created_at" : "2015-02-28T08:56:59Z",
          "githubUniqId" : "11022708",
          "estimation" : 1,
          "fork" : true,
          "full_name" : "nybby/final-test",
          "updated_at" : "2015-03-09T08:54:44Z",
          "html_url" : "https://github.com/nybby/final-test",
          "name" : "final-test",
          "watchers_count" : 0,
          "forks_count" : 0 },
	{ "_id" : ("550a81b3a82613fcecbc6d73"),
          "date" : "2015.03.19",
          "stargazers_count" : 15,
          "pushed_at" : "2015-02-27T19:29:59Z",
          "created_at" : "2015-02-28T08:56:59Z",
          "githubUniqId" : "11022708",
          "estimation" : 22,
          "fork" : true,
          "full_name" : "ChoDuck/rebot.io",
          "updated_at" : "2015-03-20T08:54:44Z",
          "html_url" : "https://github.com/ChoDuck/rebot.io",
          "name" : "rebot.io",
          "watchers_count" : 3,
          "forks_count" : 2 },
	{ "_id" : ("550a81b3a82613fcecbc6d73"),
          "date" : "2015.03.19",
          "stargazers_count" : 3,
          "pushed_at" : "2015-02-27T19:29:59Z",
          "created_at" : "2009-07-12T08:56:59Z",
          "githubUniqId" : "11022708",
          "estimation" : 20,
          "fork" : false,
          "full_name" : "1ambda/scala-interview-guide",
          "updated_at" : "2015-04-15T08:54:44Z",
          "html_url" : "https://github.com/1ambda/scala-interview-guide",
          "name" : "scala-interview-guide",
          "watchers_count" : 3,
          "forks_count" : 5 },
	{ "_id" : ("550a81b3a82613fcecbc6d73"),
          "date" : "2015.03.19",
          "stargazers_count" : 0,
          "pushed_at" : "2015-02-27T19:29:59Z",
          "created_at" : "2015-02-28T08:56:59Z",
          "githubUniqId" : "11022708",
          "estimation" : 0,
          "fork" : false,
          "full_name" : "jarangseo/make-world-happy",
          "updated_at" : "2015-02-28T08:54:44Z",
          "html_url" : "https://github.com/jarangseo/make-world-happy",
          "name" : "make-world-happy",
          "watchers_count" : 0,
          "forks_count" : 0 },
	{ "_id" : ("550a81b3a82613fcecbc6d73"),
          "date" : "2015.03.19",
          "stargazers_count" : 1,
          "pushed_at" : "2015-02-27T19:29:59Z",
          "created_at" : "2015-02-28T08:56:59Z",
          "githubUniqId" : "11022708",
          "estimation" : 7,
          "fork" : false,
          "full_name" : "ChoDuck/forkcrane",
          "updated_at" : "2015-02-28T08:54:44Z",
          "html_url" : "https://github.com/ChoDuck/forkcrane",
          "name" : "forkcrane",
          "watchers_count" : 1,
          "forks_count" : 1 },
	{ "_id" : ("550a81b3a82613fcecbc6d73"),
          "date" : "2015.03.19",
          "stargazers_count" : 2,
          "pushed_at" : "2015-02-27T19:29:59Z",
          "created_at" : "2015-02-28T08:56:59Z",
          "githubUniqId" : "11022708",
          "estimation" : 7,
          "fork" : false,
          "full_name" : "1ambda/1ambda.github.io",
          "updated_at" : "2015-02-28T08:54:44Z",
          "html_url" : "https://github.com/1ambda/1ambda.github.io",
          "name" : "1ambda.github.io",
          "watchers_count" : 1,
          "forks_count" : 2 }
      ];
    };
  });
