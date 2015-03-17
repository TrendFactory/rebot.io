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
      templateUrl: 'app/account/profile/content.template.html',
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
      link: function(scope, element, attrs) {
      }
    };
  }) ;
