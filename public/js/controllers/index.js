'use strict'
var app = require('angular').module('quizMe');
// app.controller('LoginController', require('./login'));
app.controller('LoginController',function($scope){
		$scope.hey = "there";
})
app.controller('HomePageController', require('./homepage'));
module.exports = app
