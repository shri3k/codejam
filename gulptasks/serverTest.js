var gulp = require("gulp"),
	mocha = require("gulp-spawn-mocha");
module.exports = function(){
	return gulp.src(['../test/server/**'])
		.pipe(mocha());	
};