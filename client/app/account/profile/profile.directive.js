'use strict';

angular.module('buildingApp')
  .directive('rebotProfileSidebar', function($window, $mdSidenav) {
    return {
      templateUrl: 'app/account/profile/sidebar.template.html',
      link: function(scope, element, attrs) {
	
	scope.connectProvider = function(p) {
	  if (scope.providers[p]) // connected
	    $window.open(scope.profile[p], "_blank");
	  else
	    $window.location.href = '/auth/' + p;
	};

	scope.getLinkedinBtnColor = function(p) {
	  return scope.providers[p] ? 'md-warn' : 'md-default'; 
	};
	
	scope.getTooltipMsg= function (p) {
	  return scope.providers[p] ? 'connected' : 'disconnected';
	};

	
	scope.closeSidenav = function() {
	  $mdSidenav('left').close().then(function() {
	    
	  });
	};

	scope.toggleSidenav = function() {
	  $mdSidenav('left').toggle().then(function() {
	    
	  });
	};
      }
    };
  })
  .directive('rebotProfileContent', function() {
    return {
      templateUrl: 'app/account/profile/tabs.template.html',
      link: function(scope, element, attrs) {
	scope.selectedTabIndex = 0;
	scope.maxTabCount = 2;
	scope.next = function() {
	  scope.selectedTabIndex = Math.min(scope.selectedTabIndex + 1,
					    scope.maxTabCount - 1);
	};
	scope.previous = function() {
	  scope.selectedTabIndex = Math.max(scope.selectedTabIndex - 1, 0);
	};
      }
    };
  })
  .directive('rebotProfileCourseTab', function() {
    return {
      templateUrl: 'app/account/profile/course-tab.template.html',
      link: function(scope, element, attrs) {
	
      }
    };
  })
  .directive('rebotProfileGithubTab', function() {
    return {
      templateUrl: 'app/account/profile/github-tab.template.html',
      link: githubLinkCtrl
    };
  });

function githubLinkCtrl (scope, element, attrs) {
  scope.rankMeasualment = ['starred', 'watched', 'forked'];
  scope.userStat = {
    starred: 47,
    watched: 80,
    forked: 7,
    rankPoint: 450,
    rankIndex: 7
  };

  var id = 'langChart';
  var header = getLangChartHeader();
  var size = getLangChartSize();
  var labels = getLangChartLabels();
  var tooltip = getLangChartTooltip();
  var effect = getLangChartEffect();

  var dummy = getDummyLangs();
  // var langs = getTop5Langs(getUserLangs());
  var langs = getTop5Langs(dummy);
  var colored = configureLangs(langs); // parsing, assigning color

  createLangChart(id, header, undefined, size, colored, labels, tooltip, effect);
};


function createLangChart (id, header, footer, size, data, labels, tooltip, effect) {
  var pie = new d3pie(id, {
    header: header,
    footer: footer,
    size: size,
    data: data,
    labels: labels,
    tooltips: tooltip,
    effect: effect 
  });
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

function getUserLangs () {
  
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

  if (langs.length === 0) return [{none: 0}];

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

function getLangChartSize () {
  return {
    "canvasWidth": 500,
    "canvasHeight": 500,
    "pieInnerRadius": "80%",
    "pieOuterRadius": "40%"
  };
};

function getLangChartTooltip () {
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

function getLangChartEffect () {
  return {
    "pullOutSegmentOnClick": {
      "effect": "linear",
      "speed": 400,
      "size": 8
    }
  };
};

