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

gulp.task('jekyll', function (gulpCallBack) {
	var bundle = process.platform === "win32" ? "bundle.bat" : "bundle";
	console.log('jekyll runs 1')
	var jekyll = spawn(bundle, ['exec', 'jekyll', 'serve'], {stdio: 'inherit'});

	jekyll.on('exit', function(code) {
		gulpCallBack(code === 0 ? null :'ERROR: Jekyll process exited with code: '+ code);
	});
	console.log('jekyll runs 2')
});


gulp.task('localServer', function () {
	browserSync.init({
		files: [vars.paths.html.dest + '/**'],
		port: 9876,
		server: {
			baseDir: vars.paths.html.dest
		}
	});
});

