angular.module('buildingApp')
  .controller('LoggedinCtrl', function($scope) {


    $scope.leaders = [
      {ranking: 1, avatarUrl: "https://avatars.githubusercontent.com/u/4968473?v=3", name: "1ambda"},
      {ranking: 2, avatarUrl: "https://avatars.githubusercontent.com/u/4968473?v=3", name: "2ambda"},
      {ranking: 3, avatarUrl: "https://avatars.githubusercontent.com/u/4968473?v=3", name: "3ambda"},
      {ranking: 4, avatarUrl: "https://avatars.githubusercontent.com/u/4968473?v=3", name: "4ambda"},
      {ranking: 5, avatarUrl: "https://avatars.githubusercontent.com/u/4968473?v=3", name: "5ambda"}
    ];
    
    $scope.name = 'Loggedin';
  });
