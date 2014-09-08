'use strict';
var angular = require('angular');
require('angular-router-browserify')(angular);
var app = angular.module('quizMe', ['ngRoute']);
require('./routes');
require('./svg');
