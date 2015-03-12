'use strict';

angular.module('buildingApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
    });
  });

angular.module('buildingApp')
  .factory('Setting', function($resource) {
    return $resource('/api/users/:id/setting/:provider', {
      id: '@_id',
      provider: '@provider'
    }, {
      connect: {
	method: 'POST',
	params: {
	  command: 'connect'
	}
      },

      disconnect: {
	method: 'POST',
	params: {
	  command: 'disconnect'
	}
      } 
    });
  });
