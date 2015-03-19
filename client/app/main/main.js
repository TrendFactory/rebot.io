'use strict';

angular.module('buildingApp')
  .config(function ($stateProvider) {

    $stateProvider.state('main', {
      url: "/",
      templateUrl: "app/main/main.html",
      controller: 'MainCtrl'
    }).state('main.public', {
      url: '',
      templateUrl: 'app/main/public.html',
      controller: 'PublicCtrl'
    })
      .state('main.loggedin', {
      url: 'people',
      templateUrl: 'app/main/loggedin.html',
      controller: 'LoggedinCtrl',
      authenticate: true
    });
  });
