var vars = require('./vars'),
	gulp = require('gulp'),
	localServer = require('gulp-connect'),
	spawn = require('child_process').spawn,
	gutil = require('gulp-util'),
	browserSync = require('browser-sync').create(),
	shell = require('gulp-shell'),
	deploy = require('gulp-gh-pages');

gulp.task('deploy', function() {
	return gulp.src(vars.paths.deploy)
	.pipe(deploy());
});

gulp.task('jekyll', function (gulpCallBack) {
	var bundle = process.platform === "win32" ? "bundle.bat" : "bundle";
	var jekyll = spawn(bundle, ['exec', 'jekyll', 'serve'], {stdio: 'inherit'});

	jekyll.on('exit', function(code) {
		gulpCallBack(code === 0 ? null :'ERROR: Jekyll process exited with code: '+ code);
	});
});

gulp.task('jekyll-build-site', function() {
    var bundle = process.platform === "win32" ? "bundle.bat" : "bundle";
    var shellCommand = bundle + ' exec jekyll serve --incremental';

    return gulp.src('')
        .pipe(shell(shellCommand))
		.on('error', gutil.log);
});

gulp.task('jekyll-build-last-post', function() {
    var bundle = process.platform === "win32" ? "bundle.bat" : "bundle";
    var shellCommand = bundle + ' exec jekyll build --watch --limit_posts 1';

    return gulp.src('')
        .pipe(shell(shellCommand))
        .on('error', gutil.log);
});


gulp.task('localServer', function () {
	browserSync.init({
		files: [vars.paths.html.dest + '/**'],
		port: 9876,
        ghostMode: false,
		server: {
			baseDir: vars.paths.html.dest
		}
	});
});

