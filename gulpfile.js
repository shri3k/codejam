var gulp = require("gulp")
var jshint = require("gulp-jshint");
var mocha = require("gulp-spawn-mocha");
var stylish = require("jshint-stylish");

gulp.task("lint-js", function(){
	return gulp.src(['./gulpfile.js','!./node_modules', '!./node_modules/**', './**.js'])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter(stylish));
});

gulp.task("test", function(){
	return gulp.src(['./test/browser/**', './test/server/**'])
		.pipe(mocha());
});

gulp.task('default', ['lint-js', 'test'], function(){}); 	
