'use strict';

angular.module('buildingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('setting', {
        url: '/setting',
        templateUrl: 'app/account/setting/setting.html',
        controller: 'SettingCtrl',
        authenticate: true
      });
  });
