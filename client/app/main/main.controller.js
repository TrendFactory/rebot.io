'use strict';

angular.module('buildingApp')
  .controller('MainCtrl', function ($scope, $state, Auth) {

    Auth.isLoggedInAsync(function(loggedin) {
      if (loggedin) $state.transitionTo('main.loggedin');
      else $state.transitionTo('main.public');
    });
  })
  .controller('PublicCtrl', function($scope) {
  });

