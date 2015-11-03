'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeviceAddCtrl
 * @description
 * # DeviceAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('DeviceAddCtrl', function ($scope, Device, $location) {
  $scope.device = {};
  $scope.saveDevice = function() {
    Device.post($scope.device).then(function() {
      $location.path('/device');
    });
  };
});

