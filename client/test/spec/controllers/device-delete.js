'use strict';

describe('Controller: DeviceDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DeviceDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeviceDeleteCtrl = $controller('DeviceDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeviceDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
