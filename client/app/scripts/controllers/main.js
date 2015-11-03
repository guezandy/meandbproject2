'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, Device) {
  	$scope.active = false;

  	$scope.checkDevice = function(id) {
  		$scope.dev = Device.one('5637e568e9e25b54d773acbb').get('active');
  		console.log($scope.dev);
  	}

  	/*$scope.device = {};
	Device.one($routeParams.id).get().then(function(device) {
	  $scope.device = device;
	  $scope.saveDevice = function() {
	      $scope.device.save().then(function() {
		      $location.path('/device/' + $routeParams.id);
		  });
		};
	});*/

  });
