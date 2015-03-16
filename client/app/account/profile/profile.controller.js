'use strict';

angular.module('buildingApp')
  .controller('ProfileCtrl', function ($scope, User, Auth, Profile, $window, $mdSidenav) {
    $scope.errors = {};
    $scope.providers = {'github': true, 'linkedin': true};
    $scope.profile = {};

    User.get().$promise.then(function(user) {
      console.log(user);
      $scope.profile = {
	name: user.name,
	email: user.email,
	company: user.github.company,
	location: user.github.location,
	avatarUrl: user.github.avatar_url,
	blog: user.github.blog,
	github: user.github.html_url,
	createdAt: user.github.created_at,
	linkedin: undefined
      };

      if (user.linkedin) {
	$scope.profile.linkedin = user.linkedin.publicProfileUrl;
      }

      // todo `BLOG`
      for(var p in $scope.providers) {
	$scope.providers[p] =
	  user[p] === undefined ? false : true;
      }
    });

    $scope.getLinkedinBtnColor = function(p) {
      return $scope.providers[p] ? 'md-warn' : 'md-default'; 
    };
    
    $scope.getTooltipMsg= function (p) {
      return $scope.providers[p] ? 'connected' : 'disconnected';
    };

    $scope.connectProvider = function(p) {
      if ($scope.providers[p]) // connected
	$window.open($scope.profile[p], "_blank");
      else
	$window.location.href = '/auth/' + p;
    };

    
    $scope.closeSidenav = function() {
      $mdSidenav('left').close().then(function() {
	
      });
    };

    $scope.toggleSidenav = function() {
      $mdSidenav('left').toggle().then(function() {
	
      });
    };
  });
