'use strict';

angular.module('buildingApp')
  .service('LanguageService', function(_, $log, $resource) {

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
	"_id" : "550b066aa826649c39bcf179",
	"Diff" : {
          "estimation" : 119,
          "stargazers_count" : 21,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 21,
          "forks_count" : 7
	},
	"Go" : {
          "estimation" : 43543,
          "stargazers_count" : 8925,
          "repos_count" : 222,
          "DAU" : 53,
          "watchers_count" : 8925,
          "forks_count" : 1540
	},
	"Erlang" : {
          "estimation" : 423,
          "stargazers_count" : 81,
          "repos_count" : 23,
          "DAU" : 10,
          "watchers_count" : 81,
          "forks_count" : 17
	},
	"nesC" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"OCaml" : {
          "estimation" : 11,
          "stargazers_count" : 0,
          "repos_count" : 11,
          "DAU" : 5,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Verilog" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"OpenSCAD" : {
          "estimation" : 2,
          "stargazers_count" : 0,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Bison" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Haskell" : {
          "estimation" : 2071,
          "stargazers_count" : 448,
          "repos_count" : 68,
          "DAU" : 23,
          "watchers_count" : 448,
          "forks_count" : 47
	},
	"Gnuplot" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Pascal" : {
          "estimation" : 33,
          "stargazers_count" : 4,
          "repos_count" : 3,
          "DAU" : 3,
          "watchers_count" : 4,
          "forks_count" : 3
	},
	"Eagle" : {
          "estimation" : 2,
          "stargazers_count" : 0,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Clojure" : {
          "estimation" : 660,
          "stargazers_count" : 135,
          "repos_count" : 115,
          "DAU" : 28,
          "watchers_count" : 135,
          "forks_count" : 10
	},
	"PowerShell" : {
          "estimation" : 12,
          "stargazers_count" : 0,
          "repos_count" : 8,
          "DAU" : 8,
          "watchers_count" : 0,
          "forks_count" : 1
	},
	"Smarty" : {
          "estimation" : 250,
          "stargazers_count" : 25,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 25,
          "forks_count" : 30
	},
	"Rust" : {
          "estimation" : 68,
          "stargazers_count" : 13,
          "repos_count" : 13,
          "DAU" : 6,
          "watchers_count" : 13,
          "forks_count" : 2
	},
	"Objective-C++" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"DOT" : {
          "estimation" : 5,
          "stargazers_count" : 1,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 1,
          "forks_count" : 0
	},
	"Perl" : {
          "estimation" : 490,
          "stargazers_count" : 73,
          "repos_count" : 113,
          "DAU" : 40,
          "watchers_count" : 73,
          "forks_count" : 24
	},
	"Protocol Buffer" : {
          "estimation" : 4,
          "stargazers_count" : 1,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 1,
          "forks_count" : 0
	},
	"FORTRAN" : {
          "estimation" : 24,
          "stargazers_count" : 3,
          "repos_count" : 9,
          "DAU" : 5,
          "watchers_count" : 3,
          "forks_count" : 1
	},
	"Swift" : {
          "estimation" : 89,
          "stargazers_count" : 13,
          "repos_count" : 31,
          "DAU" : 21,
          "watchers_count" : 13,
          "forks_count" : 2
	},
	"Rebol" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Elixir" : {
          "estimation" : 128,
          "stargazers_count" : 27,
          "repos_count" : 8,
          "DAU" : 3,
          "watchers_count" : 27,
          "forks_count" : 3
	},
	"C#" : {
          "estimation" : 3916,
          "stargazers_count" : 592,
          "repos_count" : 325,
          "DAU" : 101,
          "watchers_count" : 592,
          "forks_count" : 269
	},
	"C" : {
          "estimation" : 15973,
          "stargazers_count" : 3151,
          "repos_count" : 525,
          "DAU" : 214,
          "watchers_count" : 3151,
          "forks_count" : 604
	},
	"D" : {
          "estimation" : 67,
          "stargazers_count" : 10,
          "repos_count" : 7,
          "DAU" : 5,
          "watchers_count" : 10,
          "forks_count" : 5
	},
	"Max" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Io" : {
          "estimation" : 25,
          "stargazers_count" : 2,
          "repos_count" : 3,
          "DAU" : 1,
          "watchers_count" : 2,
          "forks_count" : 3
	},
	"Gosu" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"M" : {
          "estimation" : 2,
          "stargazers_count" : 0,
          "repos_count" : 2,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"R" : {
          "estimation" : 791,
          "stargazers_count" : 145,
          "repos_count" : 79,
          "DAU" : 24,
          "watchers_count" : 145,
          "forks_count" : 32
	},
	"AutoHotkey" : {
          "estimation" : 10,
          "stargazers_count" : 1,
          "repos_count" : 7,
          "DAU" : 4,
          "watchers_count" : 1,
          "forks_count" : 0
	},
	"Game Maker Language" : {
          "estimation" : 23,
          "stargazers_count" : 3,
          "repos_count" : 2,
          "DAU" : 1,
          "watchers_count" : 3,
          "forks_count" : 2
	},
	"PHP" : {
          "estimation" : 21676,
          "stargazers_count" : 3927,
          "repos_count" : 734,
          "DAU" : 187,
          "watchers_count" : 3927,
          "forks_count" : 1103
	},
	"Objective-C" : {
          "estimation" : 14755,
          "stargazers_count" : 2833,
          "repos_count" : 217,
          "DAU" : 63,
          "watchers_count" : 2833,
          "forks_count" : 659
	},
	"Gettext Catalog" : {
          "estimation" : 3,
          "stargazers_count" : 0,
          "repos_count" : 3,
          "DAU" : 3,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"ASP" : {
          "estimation" : 343,
          "stargazers_count" : 64,
          "repos_count" : 9,
          "DAU" : 7,
          "watchers_count" : 64,
          "forks_count" : 17
	},
	"Java" : {
          "estimation" : 13093,
          "stargazers_count" : 1974,
          "repos_count" : 1203,
          "DAU" : 299,
          "watchers_count" : 1974,
          "forks_count" : 855
	},
	"Prolog" : {
          "estimation" : 4,
          "stargazers_count" : 0,
          "repos_count" : 4,
          "DAU" : 4,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Logos" : {
          "estimation" : 14,
          "stargazers_count" : 2,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 2,
          "forks_count" : 1
	},
	"Delphi" : {
          "estimation" : 4,
          "stargazers_count" : 1,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 1,
          "forks_count" : 0
	},
	"Kotlin" : {
          "estimation" : 2,
          "stargazers_count" : 0,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Julia" : {
          "estimation" : 213,
          "stargazers_count" : 22,
          "repos_count" : 31,
          "DAU" : 5,
          "watchers_count" : 22,
          "forks_count" : 20
	},
	"SystemVerilog" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Puppet" : {
          "estimation" : 27,
          "stargazers_count" : 0,
          "repos_count" : 19,
          "DAU" : 10,
          "watchers_count" : 0,
          "forks_count" : 2
	},
	"ActionScript" : {
          "estimation" : 1218,
          "stargazers_count" : 241,
          "repos_count" : 15,
          "DAU" : 15,
          "watchers_count" : 241,
          "forks_count" : 49
	},
	"date" : "2015.03.20",
	"Nimrod" : {
          "estimation" : 27,
          "stargazers_count" : 5,
          "repos_count" : 9,
          "DAU" : 2,
          "watchers_count" : 5,
          "forks_count" : 0
	},
	"Scheme" : {
          "estimation" : 385,
          "stargazers_count" : 87,
          "repos_count" : 28,
          "DAU" : 7,
          "watchers_count" : 87,
          "forks_count" : 6
	},
	"Elm" : {
          "estimation" : 14,
          "stargazers_count" : 2,
          "repos_count" : 3,
          "DAU" : 2,
          "watchers_count" : 2,
          "forks_count" : 1
	},
	"Common Lisp" : {
          "estimation" : 44,
          "stargazers_count" : 8,
          "repos_count" : 11,
          "DAU" : 6,
          "watchers_count" : 8,
          "forks_count" : 1
	},
	"DM" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"HTML" : {
          "estimation" : 2092,
          "stargazers_count" : 325,
          "repos_count" : 218,
          "DAU" : 169,
          "watchers_count" : 325,
          "forks_count" : 126
	},
	"Groovy" : {
          "estimation" : 38,
          "stargazers_count" : 6,
          "repos_count" : 17,
          "DAU" : 13,
          "watchers_count" : 6,
          "forks_count" : 0
	},
	"IDL" : {
          "estimation" : 8,
          "stargazers_count" : 1,
          "repos_count" : 5,
          "DAU" : 1,
          "watchers_count" : 1,
          "forks_count" : 0
	},
	"Perl6" : {
          "estimation" : 2,
          "stargazers_count" : 0,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"VHDL" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Racket" : {
          "estimation" : 6,
          "stargazers_count" : 1,
          "repos_count" : 3,
          "DAU" : 3,
          "watchers_count" : 1,
          "forks_count" : 0
	},
	"Brightscript" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Groff" : {
          "estimation" : 6,
          "stargazers_count" : 1,
          "repos_count" : 3,
          "DAU" : 3,
          "watchers_count" : 1,
          "forks_count" : 0
	},
	"SQLPL" : {
          "estimation" : 3,
          "stargazers_count" : 0,
          "repos_count" : 3,
          "DAU" : 2,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"F#" : {
          "estimation" : 212,
          "stargazers_count" : 47,
          "repos_count" : 23,
          "DAU" : 5,
          "watchers_count" : 47,
          "forks_count" : 2
	},
	"Assembly" : {
          "estimation" : 3618,
          "stargazers_count" : 679,
          "repos_count" : 10,
          "DAU" : 9,
          "watchers_count" : 679,
          "forks_count" : 179
	},
	"Python" : {
          "estimation" : 29668,
          "stargazers_count" : 5347,
          "repos_count" : 1046,
          "DAU" : 283,
          "watchers_count" : 5347,
          "forks_count" : 1517
	},
	"Boo" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"PogoScript" : {
          "estimation" : 22,
          "stargazers_count" : 4,
          "repos_count" : 2,
          "DAU" : 1,
          "watchers_count" : 4,
          "forks_count" : 1
	},
	"Vala" : {
          "estimation" : 9,
          "stargazers_count" : 2,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 2,
          "forks_count" : 0
	},
	"ApacheConf" : {
          "estimation" : 128,
          "stargazers_count" : 25,
          "repos_count" : 11,
          "DAU" : 9,
          "watchers_count" : 25,
          "forks_count" : 4
	},
	"Cuda" : {
          "estimation" : 2,
          "stargazers_count" : 0,
          "repos_count" : 2,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"QML" : {
          "estimation" : 75,
          "stargazers_count" : 16,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 16,
          "forks_count" : 2
	},
	"EmberScript" : {
          "estimation" : 5,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 1
	},
	"OpenEdge ABL" : {
          "estimation" : 4,
          "stargazers_count" : 1,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 1,
          "forks_count" : 0
	},
	"GAP" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"VimL" : {
          "estimation" : 10415,
          "stargazers_count" : 2283,
          "repos_count" : 113,
          "DAU" : 66,
          "watchers_count" : 2283,
          "forks_count" : 243
	},
	"Tcl" : {
          "estimation" : 8,
          "stargazers_count" : 2,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 2,
          "forks_count" : 0
	},
	"Arduino" : {
          "estimation" : 23,
          "stargazers_count" : 2,
          "repos_count" : 13,
          "DAU" : 7,
          "watchers_count" : 2,
          "forks_count" : 1
	},
	"Matlab" : {
          "estimation" : 44,
          "stargazers_count" : 5,
          "repos_count" : 17,
          "DAU" : 15,
          "watchers_count" : 5,
          "forks_count" : 2
	},
	"Dart" : {
          "estimation" : 70,
          "stargazers_count" : 10,
          "repos_count" : 25,
          "DAU" : 3,
          "watchers_count" : 10,
          "forks_count" : 2
	},
	"Standard ML" : {
          "estimation" : 5,
          "stargazers_count" : 0,
          "repos_count" : 5,
          "DAU" : 4,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"ColdFusion" : {
          "estimation" : 8,
          "stargazers_count" : 2,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 2,
          "forks_count" : 0
	},
	"Makefile" : {
          "estimation" : 166,
          "stargazers_count" : 19,
          "repos_count" : 22,
          "DAU" : 15,
          "watchers_count" : 19,
          "forks_count" : 15
	},
	"AutoIt" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"PostScript" : {
          "estimation" : 2,
          "stargazers_count" : 0,
          "repos_count" : 2,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Processing" : {
          "estimation" : 3,
          "stargazers_count" : 0,
          "repos_count" : 3,
          "DAU" : 3,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"TypeScript" : {
          "estimation" : 20,
          "stargazers_count" : 2,
          "repos_count" : 14,
          "DAU" : 13,
          "watchers_count" : 2,
          "forks_count" : 0
	},
	"Shell" : {
          "estimation" : 2679,
          "stargazers_count" : 445,
          "repos_count" : 381,
          "DAU" : 192,
          "watchers_count" : 445,
          "forks_count" : 129
	},
	"Visual Basic" : {
          "estimation" : 6,
          "stargazers_count" : 1,
          "repos_count" : 3,
          "DAU" : 3,
          "watchers_count" : 1,
          "forks_count" : 0
	},
	"Awk" : {
          "estimation" : 2,
          "stargazers_count" : 0,
          "repos_count" : 2,
          "DAU" : 2,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"JavaScript" : {
          "estimation" : 41226,
          "stargazers_count" : 7543,
          "repos_count" : 2287,
          "DAU" : 491,
          "watchers_count" : 7543,
          "forks_count" : 1875
	},
	"Mathematica" : {
          "estimation" : 3,
          "stargazers_count" : 0,
          "repos_count" : 3,
          "DAU" : 2,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"Lua" : {
          "estimation" : 638,
          "stargazers_count" : 123,
          "repos_count" : 58,
          "DAU" : 27,
          "watchers_count" : 123,
          "forks_count" : 21
	},
	"Ruby" : {
          "estimation" : 9223,
          "stargazers_count" : 1724,
          "repos_count" : 713,
          "DAU" : 180,
          "watchers_count" : 1724,
          "forks_count" : 362
	},
	"Emacs Lisp" : {
          "estimation" : 1664,
          "stargazers_count" : 309,
          "repos_count" : 125,
          "DAU" : 31,
          "watchers_count" : 309,
          "forks_count" : 67
	},
	"CSS" : {
          "estimation" : 33837,
          "stargazers_count" : 7033,
          "repos_count" : 516,
          "DAU" : 268,
          "watchers_count" : 7033,
          "forks_count" : 1055
	},
	"C++" : {
          "estimation" : 8539,
          "stargazers_count" : 1473,
          "repos_count" : 453,
          "DAU" : 193,
          "watchers_count" : 1473,
          "forks_count" : 462
	},
	"Haxe" : {
          "estimation" : 694,
          "stargazers_count" : 127,
          "repos_count" : 16,
          "DAU" : 4,
          "watchers_count" : 127,
          "forks_count" : 36
	},
	"Scala" : {
          "estimation" : 466,
          "stargazers_count" : 82,
          "repos_count" : 82,
          "DAU" : 29,
          "watchers_count" : 82,
          "forks_count" : 17
	},
	"TeX" : {
          "estimation" : 154,
          "stargazers_count" : 14,
          "repos_count" : 46,
          "DAU" : 30,
          "watchers_count" : 14,
          "forks_count" : 12
	},
	"XSLT" : {
          "estimation" : 139,
          "stargazers_count" : 23,
          "repos_count" : 11,
          "DAU" : 4,
          "watchers_count" : 23,
          "forks_count" : 8
	},
	"Liquid" : {
          "estimation" : 1,
          "stargazers_count" : 0,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 0,
          "forks_count" : 0
	},
	"CoffeeScript" : {
          "estimation" : 4401,
          "stargazers_count" : 841,
          "repos_count" : 121,
          "DAU" : 57,
          "watchers_count" : 841,
          "forks_count" : 193
	},
	"Nemerle" : {
          "estimation" : 13,
          "stargazers_count" : 2,
          "repos_count" : 1,
          "DAU" : 1,
          "watchers_count" : 2,
          "forks_count" : 1
	},
	"XML" : {
          "estimation" : 18,
          "stargazers_count" : 2,
          "repos_count" : 6,
          "DAU" : 6,
          "watchers_count" : 2,
          "forks_count" : 1
	},
	"Nix" : {
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
  .service('RepoService', function($log, _, $resource) {

    this.Repos = $resource('/api/repos/:language', {});

    this.getRepos = function(lang) {
      // TODO: get repos by lang
      var repos = getDummy();
      // sort by estimation
      var parsed = this.parseRepo(repos);
      return parsed;
    };

    // return most 30 trending repos;
    this.parseRepo = function (repos) {
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
