'use strict';
var angular = require('angular');
require('angular-router-browserify')(angular);
var app = angular.module('quizMe', ['ngRoute']);
app.config(['$routeProvider', require('./routes')]); 
require('./svg');
//var angular = require('angular');
//var app = angular.module('someModule', []);
//app.controller('SomeController', function($scope) {
//    $scope.greet = "Hello";
//});
module.exports = app;
