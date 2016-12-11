var vars = require('./gulp/vars'),
	gulp = require('gulp');
	sequence = require('run-sequence');

// require('./gulp/process-data');
// require('./gulp/process-html');
require('./gulp/process-styles');
require('./gulp/process-scripts');
require('./gulp/prepare-libs');
require('./gulp/merge-js-libs');
require('./gulp/deployment');

gulp.task('watch', function() {
	gulp.watch(vars.paths.styles.all.watch, ['process-styles']);
	gulp.watch(vars.paths.scripts.all.watch, ['process-scripts']);
});

gulp.task('watch-banners', function() {
	gulp.watch(vars.paths.styles.banners.watch, ['process-styles-banners']);
	gulp.watch(vars.paths.scripts.banners.watch, ['process-scripts-banners']);
});

gulp.task('default', [
	'jekyll',
	'localServer',
	'watch'
]);

gulp.task('banners', [
	'jekyll',
	'localServer',
	'watch-banners'
]);

gulp.task('offline-assets', [
	'prepare-libs',
	'merge-js-libs'
]);

//gulp.task('banners', [
//	'process-styles-banners',
//	'process-scripts-banners',
//	'merge-js-banners',
//	'watch'
//],{});

