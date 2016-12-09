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

gulp.task('watch-modular', function() {
	gulp.watch(vars.paths.html.src);
	gulp.watch(vars.paths.styles.modular.watch, ['process-styles-modular']);
	gulp.watch(vars.paths.scripts.modular.watch, ['process-scripts-modular']);
});

gulp.task('default', [
	'jekyll',
	'localServer',
	'watch'
]);

gulp.task('offline-assets', [
	'prepare-libs',
	'merge-js-libs'
]);

//gulp.task('banners', [
//	'process-styles-modular',
//	'process-scripts-modular',
//	'merge-js-banners',
//	'watch'
//],{});

