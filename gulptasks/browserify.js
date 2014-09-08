var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream');
module.exports = function() {
	var bundleStream = browserify('../public/js/index.js').bundle().pipe(source('../public/js/index.js'));
	return bundleStream.pipe(gulp.dest('../public/js'));
};