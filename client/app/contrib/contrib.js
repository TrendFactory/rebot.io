'use strict';

angular.module('buildingApp')
  .config(function($stateProvider) {

    $stateProvider
      .state('conttib', {
	url: '/contrib',
	templateUrl: 'app/contrib/contrib.html',
	controller: 'ContribCtrl',
	authenticate: true
      });
  });
