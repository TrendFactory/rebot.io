'use strict';

angular.module('buildingApp')
  .config(function($stateProvider) {

    $stateProvider
      .state('course', {
	url: '/course',
	templateUrl: 'app/course/course.html',
	controller: 'CourseCtrl',
	authenticate: true
      });
  });
