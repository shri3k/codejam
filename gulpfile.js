var gulp = require("gulp");
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");

gulp.task("lint-js", function(){
	gulp.src(['!./node_modules', '!./node_modules/**', './**.js'])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter(stylish));
});

gulp.task('default', ['lint-js'], function(){}); 	