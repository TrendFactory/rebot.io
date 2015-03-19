'use strict';

angular.module('buildingApp')
  .controller('LanguageCtrl', function($scope,
				       $log,
				       LanguageService,
				       RepoService) {

    
    
    // get languages
    $scope.langs = LanguageService.getLanguages();
    $scope.selected = $scope.langs[0];
    $scope.stat = {};
    $scope.totalUsers = 256;

    $scope.$watch('selected', function() {
      // bind lang stat; 
      var stat = LanguageService.getStat($scope.selected);
      $scope.stat.rank = stat.rank; 
      $scope.stat.userCount = stat.DAU;
      $scope.stat.repoCount = stat.repos_count;
      $scope.stat.starCount = stat.stargazers_count;
      $scope.stat.watchCount = stat.watchers_count;
      $scope.stat.forkCount = stat.forks_count;

      // RepoService
      $scope.repos = RepoService.getRepos($scope.lang);
    });

  });
