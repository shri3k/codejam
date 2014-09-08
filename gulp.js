var gulp = require('gulp');
module.exports = function(files){
	files.forEach(function(filename){
		gulp.task(filename, require('./gulptasks/' + filename));
	});
	return gulp;
};