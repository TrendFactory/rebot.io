'use strict';

angular.module('buildingApp')
  .service('UserActivityChart', function(c3, _) {
    this.draw = function (id) {

      var acts = getDummyActivity(id);
      var parsed = parseActivity(acts);
      var configured = configureActivity(id, parsed);
      c3.generate(configured);
    };

    // should return lastest 5 acts 
    function getDummyActivity() {
      return [
      	{ date: '2015-02-25',
      	  activity: {
      	    issue: 1,
      	    issue_comment: 0,
      	    commit_comment: 0,
      	    push: 0,
      	    pull_request: 3,
	    fork: 1,
	    watch: 5 }
      	},
      	{ date: '2015-03-01',
      	  activity: {
      	    issue: 3,
      	    issue_comment: 5,
      	    commit_comment: 3,
      	    push: 1,
      	    pull_request: 0,
	    fork: 0,
	    watch: 2 }
      	},
      	{ date: '2015-03-06',
      	  activity: {
      	    issue: 0,
      	    issue_comment: 0,
      	    commit_comment: 7,
      	    push: 2,
      	    pull_request: 1,
	    fork: 0,
	    watch: 0 }
      	},
      	{ date: '2015-03-11',
      	  activity: {
      	    issue: 1,
      	    issue_comment: 2,
      	    commit_comment: 0,
      	    push: 0,
      	    pull_request: 0,
	    fork: 3,
	    watch: 5 }
      	},
      	{ date: '2015-03-16',
      	  activity: {
      	    issue: 0,
      	    issue_comment: 0,
      	    commit_comment: 0,
      	    push: 0,
      	    pull_request: 0,
	    fork: 0,
	    watch: 1 }
      	}
      ];
    };


    function parseActivity(acts) {
      /*
       * input:
       
      	[{ date: '2015-03-07',
      	  activity: {
      	    issue: 0,
      	    issue_comment: 2,
      	    commit_comment: 3,
      	    push: 3,
      	    pull_request: 0,
            fork: 3,
            watch: 2}
      	}, ...]
       */

      var parsed = { date: ['x'],
		     issue: ['issue'],
		     code: ['commit'],
		     attention: ['fork, watch'] };
      
      if (acts.length === 0) {
	return parsed;
      }

      for(var i = 0; i < acts.length; i++) {
	var issue = acts[i].activity.issue
	      + acts[i].activity.issue_comment;
	var code = acts[i].activity.commit_comment
	      + acts[i].activity.push
	      + acts[i].activity.pull_request;
	var attention = acts[i].activity.fork
	      + acts[i].activity.watch;
	
	parsed.date.push(acts[i].date);
	parsed.issue.push(issue);
	parsed.code.push(code);
	parsed.attention.push(attention);
      }

      return parsed;
    };
    
    function configureActivity(id, acts) {

      /*
       * input:
       *
       * { date:      ['date', '2015-01-12', '20515-01-13', ...],  
       *   issue:     ['col1', 3, 5, ...], (issue + issue_comment)
       *   code:      ['col2', 7, 11, ...], (commit + push + pull_req)
       *   attention: ['col3', 2, 2, ...] (fork + watch)
       * }
       */
      
      var axis = getAxis();

      return {
	bindto: '#' + id,
	size: {
	  width: 400,
	  height: 220 },
	data: {
	  x: 'x',
	  columns: [
	    acts.date,
	    acts.code,
	    acts.issue,
	    acts.attention ]},
	axis: axis,
	color: {
	  pattern: [
	    '#2196F3', // indigo
	    '#00C853', // green
	    '#FFC107' // pink
	  ]}
      };
    };

    function getAxis() {
      return {
	x: {
	  type: 'timeseries',
          tick: {format: '%m-%d'}
	},
	y: {
	  show: false,
	  padding: {
	    bottom: 0
	  }
	}
      };
    }
    
  })
  .service('UserLangChart', function(d3pie) {

    this.draw = function(id) {
      var header = getLangChartHeader();;
      var footer = undefined;
      var size = getLangChartSize();
      var tooltips = getLangChartTooltips();
      var labels = getLangChartLabels();
      var effect = getLangChartEffect();
      var data = getDummyLangs();
      var top5 = getTop5Langs(data);
      var configured = configureLangs(top5); // parseing, assigning colors
      
      var pie = new d3pie(id, {
	header: header,
	footer: footer,
	size: size,
	data: configured,
	labels: labels,
	tooltips: tooltips,
	effect: effect 
      });
    };

    function getDummyLangs () {
      return [
	{language: "Go", repo_count: 1},
	{language: "Scala", repo_count: 10},
	{language: "Lisp", repo_count: 2},
	{language: "Emacs Lisp", repo_count: 6},
	{language: "Java", repo_count: 6},
	{language: "Python", repo_count: 7},
	{language: "Haskell", repo_count: 3},
	{language: "C", repo_count: 1},
	{language: "C++", repo_count: 2},
	{language: "C#", repo_count: 2},
	{language: "Javascript", repo_count: 15},
	{language: "Erlang", repo_count: 1}
      ];
    };

    function getLangChartTooltips () {
      return {
	"enabled": true,
	"type": "placeholder",
	"string": "{value} Repository",
	"styles": {
	  "fadeInSpeed": 152,
	  "borderRadius": 5,
	  "font": "open sans",
	  "fontSize": 15,
	  "padding": 6
	}
      };
    };

    function getLangChartSize () {
      return {
	"canvasWidth": 500,
	"canvasHeight": 500,
	"pieInnerRadius": "80%",
	"pieOuterRadius": "40%"
      };
    };

    function getLangChartHeader () {
      return  {
	"title": {
	  "text": "Languages",
	  "fontSize": 25,
	  "font": '\'Lato\', sans-serif'
	},
	"subtitle": {
	  "text": "Top 5",
	  "color": "#999999",
	  "fontSize": 17,
	  "font": '\'Lato\', sans-serif'
	},
	"location": "pie-center",
	"titleSubtitlePadding": 10
      };
    };

    function getLangChartEffect () {
      return {
	"pullOutSegmentOnClick": {
	  "effect": "linear",
	  "speed": 400,
	  "size": 8
	}
      };
    };

    function getLangChartLabels () {
      return {
	"outer": {
	  "format": "label-percentage1",
	  "pieDistance": 10
	},
	"inner": {
	  "format": "none"
	},
	"mainLabel": {
	  "font": 'open sans',
	  "fontSize": 12
	},
	"percentage": {
	  "color": "#999999",
	  "fontSize": 11,
	  "decimalPlaces": 0
	},
	"value": {
	  "color": "#cccc43",
	  "fontSize": 11
	},
	"lines": {
	  "enabled": true,
	  "color": "#777777"
	}
      };
    };

    
    function getTop5Langs (langs) {
      /* 
       * input:
       * [ { language: 'GO', repo_count: 2 }, ... ]
       */

      if (langs.length === 0)
	return [];

      langs.sort(function(l1, l2) {
	return l2.repo_count - l1.repo_count;
      });

      var top5 = [];

      for(var i = 0; i < langs.length && i < 5; i++) {
	top5.push(langs[i]);
      }

      return top5;
    };

    function configureLangs (langs) {
      /* 
       * input:
       * [ { language: 'GO', repo_count: 2 }, ... ]
       */
      var colors = [
	'#E040FB',  // purple
	'#00E5FF', // blue
	'#FFFF8D', // yellow
	'#1de9b6', // green
	'#FF4081' // pink
      ];

      if (langs.length === 0)
	return {sortOrder: "label-asc",
		content: [{label: "No Repository", value: 1}]};

      for(var i = 0; i < langs.length; i++) {
	langs[i].label = langs[i].language;
	langs[i].value = langs[i].repo_count;
	langs[i].color = colors[i];
      }
      return {
	sortOrder: "label-asc",
	content: langs
      };
    };
  });
