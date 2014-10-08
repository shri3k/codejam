'use strict';

module.exports = function() {
	this.formObj = {
		user: false,
		pass: false
	};
	this.submit = function(isValid) {
		if (isValid) alert('yo yo yo ');
	};
	this.blurCheck = function(data) {
		if (!data.$pristine && data.$invalid) {
			this.formObj[data.$name] = true;
		} else {
			this.formObj[data.$name] = false;
		}
	}.bind(this);
	this.testLength = [0,1,2];
};
