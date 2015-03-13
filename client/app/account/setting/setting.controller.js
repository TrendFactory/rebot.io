'use strict';

angular.module('buildingApp')
  .controller('SettingCtrl', function ($scope, User, Auth, Setting, $window) {
    $scope.errors = {};
    $scope.user = {};
    $scope.providers = {'github': true, 'linkedin': true};

    User.get().$promise.then(function(user) {
      $scope.user = user;
      
      for(var p in $scope.providers) {
	$scope.providers[p] =
	  user[p] === undefined ? false : true;
      }
    });

    $scope.connected = function (provider) {
      return $scope.providers[provider] ? 'disconnect' : 'connect';
    };

    $scope.connectOAuth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
    
    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
          .then( function() {
            $scope.message = 'Password successfully changed.';
          })
          .catch( function() {
            form.password.$setValidity('mongoose', false);
            $scope.errors.other = 'Incorrect password';
            $scope.message = '';
          });
      }
    };
  });
