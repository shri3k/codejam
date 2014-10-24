'use strict';

module.exports = function($scope) {
	$scope.formObj = {
		user: false,
		pass: false
	};
	$scope.submit = function(isValid) {
		if (isValid) alert('yo yo yo ');
	};
	$scope.blurCheck = function(data) {
		if (!data.$pristine && data.$invalid) {
			$scope.formObj[data.$name] = true;
		} else {
			$scope.formObj[data.$name] = false;
		}
	}.bind($scope);
	$scope.testLength = [0,1,2];
};
