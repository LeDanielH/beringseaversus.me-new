var vars = require('./vars'),
	gulp = require('gulp'),
	gzip = require('gulp-gzip'),
	concat = require('gulp-concat'),
	uglifyJs = require('gulp-uglify');

gulp.task('process-js-libraries', function() {
	return gulp.src([
		vars.jsLibraries.jquery.min,
		vars.jsLibraries.semanticUI.min
	])
	.pipe(concat(vars.renderedNames.javascript.min))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.scripts.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.scripts.dest));
});

gulp.task('process-js-libraries-modular', function() {
	return gulp.src([
		vars.jsLibraries.jquery.min,
		vars.jsLibraries.semanticUI.modular
	])
	.pipe(concat(vars.renderedNames.javascript.min))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.scripts.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.scripts.dest));
});


gulp.task('process-js-debug-libraries', function() {
	return gulp.src([
		// vars.jsLibraries.jquery.debug,
		vars.jsLibraries.gsap.debug,
		vars.jsLibraries.scrollTo.debug
	])
	.pipe(concat(vars.renderedNames.javascript.debug))
	.pipe(gulp.dest(vars.paths.scripts.dest));
});
