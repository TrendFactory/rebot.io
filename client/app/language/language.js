'use strict';

angular.module('buildingApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('language', {
	url: '/language',
	templateUrl: 'app/language/language.html',
	controller: 'LanguageCtrl',
	authenticate: true
      });
  });
