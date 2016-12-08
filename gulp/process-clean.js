var vars = require('./vars');
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function () {
	return del([
		vars.BUILD_PATH + '/**/*',
		vars.BUILD_PATH + '/../../templates/**/*',
		//vars.BUILD_PATH + '/../img/minify/**/*',
		//'devel/sass/_generated/**/*'
		'!devel/sass/_generated/',
		'!devel/sass/_generated/svg-icons.scss'
	], {
		force: true
	});
});
