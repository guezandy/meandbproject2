'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeviceEditCtrl
 * @description
 * # DeviceEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('DeviceEditCtrl', function (
  $scope,
  $routeParams,
  Device,
  $location
) {
  $scope.editDevice = true;
  $scope.device = {};
  Device.one($routeParams.id).get().then(function(device) {
    $scope.device = device;
    $scope.saveDevice = function() {
      $scope.device.save().then(function() {
        $location.path('/device/' + $routeParams.id);
      });
    };
  });
});
