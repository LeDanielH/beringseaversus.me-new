var vars = require('./vars');
var gulp = require('gulp');
var duplicate = require('gulp-rename');
var gzip = require('gulp-gzip');
var localServer = require('gulp-connect');
var processSass = require('gulp-sass');
var nanofyCss = require('gulp-cssnano');
var purgeCss = require('gulp-css-purge');
var stripCssComments = require('gulp-strip-css-comments');
var uncss = require('gulp-uncss');

gulp.task('process-styles', [], function() {
	return gulp.src([vars.paths.styles.src])
		.pipe(processSass({
			outputStyle: 'expanded'
		}).on('error', processSass.logError))
		.pipe(purgeCss())
		.pipe(stripCssComments())
		.pipe(gulp.dest(vars.paths.styles.dest))
		.pipe(duplicate({suffix: '.min'}))
		.pipe(nanofyCss())
		.pipe(gulp.dest(vars.paths.styles.dest))
		.pipe(gzip())
		.pipe(gulp.dest(vars.paths.styles.dest))
		.pipe(localServer.reload());
});

gulp.task('process-fonts', function() {
	return gulp.src([vars.paths.fonts.src])
		.pipe(gulp.dest(vars.paths.fonts.dest));
});
