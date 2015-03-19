'use strict';

angular.module('buildingApp')
  .controller('NavbarCtrl', function ($state, $scope, $location, Auth) {
    $scope.menu = [{
      'title': 'PEOPLE',
      'link': '/people'
    }, {
      'title': 'LANGUAGE',
      'link': '/language'
    }, {
      'title': 'COURSE',
      'link': '/course'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $state.go('main.public');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
