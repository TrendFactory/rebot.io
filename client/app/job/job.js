'use strict';

angular.module('buildingApp')
  .config(function($stateProvider) {

    $stateProvider
      .state('job', {
	url: '/job',
	templateUrl: 'app/job/job.html',
	controller: 'JobCtrl',
	authenticate: true
      });
  });
