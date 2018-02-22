'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten'); // needs this because 'file.path' in 'dest' includes relative path
var original_filepath = '';

// building css folder outside scss folder
gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(function(file) {
    	original_filepath = file.path;
    	return '';
    }))
    .pipe(flatten())
    .pipe(gulp.dest(function(file) {
		var rest = original_filepath.substring(0, original_filepath.lastIndexOf("/") + 1);
		return  rest + '/../css'
    }));
});