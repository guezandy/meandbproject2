'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeviceCtrl
 * @description
 * # DeviceCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DeviceCtrl', function ($scope, Device) {
  	$scope.devices = Device.getList().$object;
  });
