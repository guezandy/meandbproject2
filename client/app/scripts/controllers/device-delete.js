'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeviceDeleteCtrl
 * @description
 * # DeviceDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('DeviceDeleteCtrl', function (
  $scope,
  $routeParams,
  Device,
  $location
) {
  $scope.device = Device.one($routeParams.id).get().$object;
  $scope.deleteDevice = function() {
    $scope.device.remove().then(function() {
      $location.path('/device');
    });
  };
  $scope.back = function() {
    $location.path('/device/' + $routeParams.id);
  };
});
