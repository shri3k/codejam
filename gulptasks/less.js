var gulp = require('gulp'),
	less = require('gulp-less');
module.exports = function(){
	gulp.src('../public/style/less/index.less')
		.pipe(less())
		.pipe(gulp.dest('../public/style/style.css'));
};