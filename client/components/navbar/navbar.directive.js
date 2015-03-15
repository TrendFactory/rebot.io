'use strict';

angular.module('buildingApp')
  .directive('navProfileImage', function() {
    return {
      restrict: 'A',
      templateUrl: 'components/navbar/template/profileImage.html',
      replace: true,
      link: function(scope, element, attrs) {
	var url = attrs.imgUrl;
	element.css({
	  'background-image': 'url(' + url + ')'
	});
      }
    };
  });
