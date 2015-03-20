'use strict';

angular.module('buildingApp')
  .controller('CourseCtrl', function($scope,
				     $log,
				     LanguageService,
				     RepoService,
				     CourseService) {

    // CourseService
    $scope.categories = CourseService.getCategory();
    $scope.selected = undefined;
    $scope.courses = CourseService.getCourse();
  });
