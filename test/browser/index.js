var angular2 = require('angular'),
    apps = require('../../public/js');
var inject = angular2.injector(['ng']).invoke;
debugger;
describe("Test for a test", function() {
    var scope,
        $controllerConstructor;
    debugger;
    beforeEach(function() {
        debugger;
        angular2.module('quizMe');
    });
    beforeEach(function() {
        debugger;
        inject(function($controller, $rootScope) {
            $controllerConstructor = $controller;
            scope = $rootScope.$new();
        });
    });
    it("should have some value from the controller", function() {
        debugger;
        var ctrl = $controllerConstructor('LoginController', {
            $scope: scope
        });
        expect(ctrl.testLength.length).toBe(3);
    })
});
