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
  .directive('rebotProfileGithubTab', function(UserLangChart,
					       UserActivityChart) {
    return {
      templateUrl: 'app/account/profile/github-tab.template.html',
      link: function (scope, element, attrs) {
	scope.rankMeasualment = ['starred', 'watched', 'forked'];
	scope.userStat = {
	  starred: 47,
	  watched: 80,
	  forked: 7,
	  rankPoint: 450,
	  rankIndex: 7
	};

	UserLangChart.draw('lang-chart');
	UserActivityChart.draw('activity-chart');
      }
    };
  })
  .directive('rebotProfileCourseTab', function($timeout,
					       CourseSlideService) {
    return {
      templateUrl: 'app/account/profile/course-tab.template.html',
      link: function(scope, element, attrs) {

	// TODO: slick onAfterChange doesn't provide any args
	scope.current = 1;
	
	$timeout(function() {
	  scope.courses = CourseSlideService.getCourses();
	  scope.currentTitle = scope.courses[scope.current].name;
	}, 100);

	scope.onAfterChange = function() {
	  scope.$apply(function() {
	    scope.current = (scope.current + 1) % scope.courses.length;
	  });
	};

	scope.courseRank = CourseSlideService.getCourseRank();
      }
    };
  });
