var vars = require('./vars'),
	gulp = require('gulp'),
	gzip = require('gulp-gzip'),
	concat = require('gulp-concat'),
	uglifyJs = require('gulp-uglify');

gulp.task('merge-js-all', function() {
	console.log(vars.paths.libs.jquery.src, vars.paths.libs.semantic.src);
	console.log(vars.paths.merged.dest);
	return gulp.src([
		vars.paths.libs.jquery.src,
		vars.paths.libs.semantic.js
	])
	.pipe(concat(vars.renderedNames.javascript.all))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.merged.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.merged.dest));
});

gulp.task('merge-js-libs', [
	'merge-js-all'
]);

