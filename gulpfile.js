var vars = require('./gulp/vars'),
	gulp = require('gulp');

// require('./gulp/process-data');
// require('./gulp/process-html');
require('./gulp/process-styles');
require('./gulp/process-scripts');
require('./gulp/prepare-libs');
require('./gulp/merge-js-libs');
require('./gulp/deployment');

gulp.task('watch', function() {
	gulp.watch(vars.paths.html.src);
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
	'watch'
	 //'localServer'
]);

gulp.task('prepare-assets', [
	'merge-js-libs',
	'transfer-all-libs'
]);

gulp.task('initial', [
	'prepare-libs',
	'merge-js-libs'
]);
//gulp.task('banners', [
//	'process-styles-modular',
//	'process-scripts-modular',
//	'merge-js-banners',
//	'watch'
//],{});

