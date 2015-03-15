'use strict';

angular.module('buildingApp')
  .controller('NavbarCtrl', function ($state, $scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Language',
      'link': '/language'
    }, {
      'title': 'Course',
      'link': '/course'
    }, {
      'title': 'Contrib',
      'link': '/contrib'
    }, {
      'title': 'Job',
      'link': '/job'
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
