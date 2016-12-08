var vars = require('./vars'),
	gulp = require('gulp'),
	localServer = require('gulp-connect'),
	spawn = require('child_process').spawn,
	gutil = require('gulp-util'),
	browserSync = require('browser-sync').create(),
	deploy = require('gulp-gh-pages');

gulp.task('deploy', function() {
	return gulp.src(vars.paths.deploy)
	.pipe(deploy());
});

// DEFAULT TASKS
//gulp.task('localServer', [], function() {
//	localServer.server({
//		root: vars.paths.html.dest,
//		livereload: true,
//		fallback: vars.paths.html.dest + 'index.html'
//	});
//});

gulp.task('jekyll', function (gulpCallBack) {
	var jekyll = spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'});

	jekyll.on('exit', function(code) {
		gulpCallBack(code === 0 ? null :'ERROR: Jekyll process exited with code: '+ code);
	});
});


gulp.task('localServer', function () {
	browserSync.init({
		files: [vars.paths.html.dest + '/**'],
		port: 9876,
		server: {
			baseDir: vars.paths.html.dest
		}
	});
	// add watch here
});

