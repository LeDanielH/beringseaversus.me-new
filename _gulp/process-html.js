var vars = require('./vars'),
	gulp = require('gulp'),
	localServer = require('gulp-connect'),
	nanofyHtml = require('gulp-htmlmin'),
	stripHtmlComments = require('gulp-strip-comments');


gulp.task('process-html', [], function() {
	return gulp.src(vars.paths.html.src)
		.pipe(stripHtmlComments())
		.pipe(nanofyHtml({collapseWhitespace: true}))
		.pipe(gulp.dest(vars.paths.html.dest))
		.pipe(localServer.reload());
});