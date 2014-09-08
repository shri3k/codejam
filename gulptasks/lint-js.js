var gulp = require("gulp"),
	jshint = require("gulp-jshint"),
	stylish = require("jshint-stylish");

module.exports = function(){
	return gulp.src(['./gulpfile.js','!./node_modules', '!./node_modules/**', './**.js'])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'));
};