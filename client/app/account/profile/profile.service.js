'use strict';

angular.module('buildingApp')
  .service('UserLangChart', function() {

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
