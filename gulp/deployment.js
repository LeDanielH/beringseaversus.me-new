var vars = require('./vars'),
	gulp = require('gulp'),
	localServer = require('gulp-connect'),
	deploy = require('gulp-gh-pages');

gulp.task('deploy', function() {
	return gulp.src(vars.paths.deploy)
	.pipe(deploy());
});

// DEFAULT TASKS
gulp.task('localServer', [], function() {
	localServer.server({
		root: vars.paths.html.dest,
		livereload: true,
		fallback: vars.paths.html.dest + 'index.html'
	});
});