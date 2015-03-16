'use strict';

angular.module('buildingApp')
  .directive('rebotProfileSidebar', function() {
    return {
      templateUrl: 'app/account/profile/sidebar.template.html',
      link: function(scope, element, attrs) {
      }
    };
  })
  .directive('rebotProfileContent', function() {
    return {
      templateUrl: 'app/account/profile/content.template.html',
      link: function(scope, element, attrs) {
	
      }
    };
  });
