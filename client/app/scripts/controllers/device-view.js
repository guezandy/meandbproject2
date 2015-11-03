'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeviceViewCtrl
 * @description
 * # DeviceViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
	.controller('DeviceViewCtrl', function (
	  $scope,
	  $routeParams,
	  Device
	) {
	  $scope.viewDevice = true;
	  $scope.device = Device.one($routeParams.id).get().$object;
	});
