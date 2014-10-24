'use strict';
require('./controllers')
require('./services')

module.exports = function($routeProvider){
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
