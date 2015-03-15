'use strict';

angular.module('buildingApp')
  .controller('LoginCtrl', function ($scope, Auth, $state, $window) {


    Auth.isLoggedInAsync(function(loggedin) {
      if (loggedin) {
	$state.go('main.loggedin');
      }
    });
    
    // TODO: login error page
    
    $scope.loginWith = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
