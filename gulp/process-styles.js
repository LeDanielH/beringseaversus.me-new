var vars = require('./vars'),
	gulp = require('gulp'),
	duplicate = require('gulp-rename'),
	gzip = require('gulp-gzip'),
	localServer = require('gulp-connect'),
	processSass = require('gulp-sass'),
	nanofyCss = require('gulp-cssnano'),
	purgeCss = require('gulp-css-purge'),
	stripCssComments = require('gulp-strip-css-comments'),
	uncss = require('gulp-uncss');

gulp.task('process-styles', [], function() {
	return gulp.src([vars.paths.styles.src])
		.pipe(processSass({
			outputStyle: 'expanded'
		}).on('error', processSass.logError))
		.pipe(purgeCss())
		.pipe(stripCssComments())
		.pipe(gulp.dest(vars.paths.styles.dist))
		.pipe(duplicate({suffix: '.min'}))
		.pipe(nanofyCss())
		.pipe(gulp.dest(vars.paths.styles.dist))
		.pipe(gzip())
		.pipe(gulp.dest(vars.paths.styles.dist))
		.pipe(localServer.reload());
});

gulp.task('process-fonts', function() {
	return gulp.src([vars.paths.fonts.src])
	.pipe(gulp.dest(vars.paths.fonts.dist));
});
