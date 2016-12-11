var vars = require('./vars');
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
	return del([
		'devel/sass/_generated/**/*',
		'!devel/sass/_generated/'
	], {
		force: true
	});
});
