var gulp = require("gulp");
var jshint = require("gulp-jshint");

gulp.task("lint-js", function(){
	gulp.src(['!/node_modules', '!/node_modules/**', '/**'])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['lint-js'], function(){}); 	