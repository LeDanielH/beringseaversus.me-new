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
