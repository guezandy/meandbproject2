'use strict';

describe('Controller: DeviceViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DeviceViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeviceViewCtrl = $controller('DeviceViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeviceViewCtrl.awesomeThings.length).toBe(3);
  });
});
