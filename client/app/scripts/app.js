'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function (
    $routeProvider,
    RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/device', {
        templateUrl: 'views/device.html',
        controller: 'DeviceCtrl',
      })
      .when('/create/device', {
        templateUrl: 'views/device-add.html',
        controller: 'DeviceAddCtrl'
      })
      .when('/device/:id', {
        templateUrl: 'views/device-view.html',
        controller: 'DeviceViewCtrl'
      })
      .when('/device/:id/delete', {
        templateUrl: 'views/device-delete.html',
        controller: 'DeviceDeleteCtrl'
      })
      .when('/device/:id/edit', {
        templateUrl: 'views/device-edit.html',
        controller: 'DeviceEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('DeviceRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  }).factory('Device', function(DeviceRestangular) {
  return DeviceRestangular.service('device');
});
