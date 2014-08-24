'use strict';

var app = require('angular').module('quizMe');
require('./controllers')
require('./services')

function routes($routeProvider){
	$routeProvider
		.when('/',{
			controller: 'LoginController',
			templateUrl: '../views/index.html'
		})
		.when('/home', {
			controller: 'HomePageController',
			template: 'I am home'
		})
		.otherwise({
			redirect: '/'
		});
	
}
app.config(routes);
