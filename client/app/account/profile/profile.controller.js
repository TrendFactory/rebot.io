'use strict';

angular.module('buildingApp')
  .controller('ProfileCtrl', function ($scope, User, Auth, Profile, $window, $mdSidenav) {
    $scope.errors = {};
    $scope.providers = {'github': true, 'linkedin': true};
    $scope.profile = {};

    User.get().$promise.then(function(user) {
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
  });
