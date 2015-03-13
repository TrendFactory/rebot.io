'use strict';

angular.module('buildingApp')
  .controller('MainCtrl', function ($scope, $state, Auth) {

    Auth.isLoggedInAsync(function(loggedin) {
      if (loggedin) $state.go('main.loggedin');
      else $state.go('main.public');
    });
  })
  .controller('PublicCtrl', function($scope) {
    $scope.name = 'Public';
  })
  
  .controller('LoggedinCtrl', function($scope) {
    $scope.name = 'Loggedin';
  });

