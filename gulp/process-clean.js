var vars = require('./vars');
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
	return del([
		'devel/assets/offline/**/*',
		'devel/assets/_sass/utils/**/*',
		'!devel/assets/_sass/utils/_utils.scss',
		'devel/assets/generated/**/*',
		'deploy/**/*',
		'deploy/.htaccess'
	], {
		force: true
	});
});

gulp.task('clean-dev', function () {
	return del([
		'devel/assets/generated/main.css',
		'devel/assets/generated/scripts.js'
	], {
		force: true
	});
});
