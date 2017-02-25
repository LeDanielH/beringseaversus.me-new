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

var Jekyll = {
	bundle: process.platform === "win32" ? "bundle.bat" : "bundle",
	serve: function () {
		gulp.task('jekyll-serve', function (gulpCallBack) {
			var jekyll = spawn(Jekyll.bundle, ['exec', 'jekyll', 'serve'], {stdio: 'inherit'});

			jekyll.on('exit', function(code) {
				gulpCallBack(code === 0 ? null :'ERROR: Jekyll process exited with code: '+ code);
			});
		});
	},
	build: function () {
		gulp.task('jekyll-build', function() {
			var shellCommand = Jekyll.bundle + ' exec jekyll build --watch';

			return gulp.src('')
				.pipe(shell(shellCommand))
				.on('error', gutil.log);
		});
	},
	buildPost: function () {
		gulp.task('jekyll-build-post', function() {
			var shellCommand = Jekyll.bundle + ' exec jekyll build --watch --limit_posts 1';

			return gulp.src('')
				.pipe(shell(shellCommand))
				.on('error', gutil.log);
		});
	},
	init: function () {
		Jekyll.serve();
		Jekyll.build();
		Jekyll.buildPost();
	}
};

Jekyll.init();


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

