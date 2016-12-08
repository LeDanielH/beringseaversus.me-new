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
	gulp.watch(vars.paths.html.src, ['jekyll']);
	gulp.watch(vars.paths.styles.all.src, ['process-styles']);
	gulp.watch(vars.paths.scripts.all.src, ['process-scripts']);
});

gulp.task('watch-modular', function() {
	gulp.watch(vars.paths.html.src);
	gulp.watch(vars.paths.styles.modular.src, ['process-styles-modular']);
	gulp.watch(vars.paths.scripts.modular.src, ['process-scripts-modular']);
});



gulp.task('default', [
	'process-styles',
	'process-scripts',
	'jekyll',
	'localServer',
	'watch'
]);

gulp.task('prepare-assets', [
	'prepare-libs',
	'merge-js-libs'
]);

//gulp.task('banners', [
//	'process-styles-modular',
//	'process-scripts-modular',
//	'merge-js-banners',
//	'watch'
//],{});

