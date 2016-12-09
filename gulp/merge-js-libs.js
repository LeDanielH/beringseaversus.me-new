var vars = require('./vars'),
	gulp = require('gulp'),
	gzip = require('gulp-gzip'),
	concat = require('gulp-concat'),
	uglifyJs = require('gulp-uglify');

gulp.task('merge-js-semantic', function() {
	return gulp.src([
		vars.paths.libs.jquery.src,
		vars.paths.libs.semantic.js
	])
	.pipe(concat(vars.renderedNames.javascript.semantic))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.merged.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.merged.dest));
});

gulp.task('merge-js-vue', function() {
	return gulp.src([
		vars.paths.libs.vue.src,
		vars.paths.libs.vueX.src,
		vars.paths.libs.vueRouter.src,
		vars.paths.libs.vueResource.src
	])
	.pipe(concat(vars.renderedNames.javascript.vue))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.merged.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.merged.dest));
});

gulp.task('merge-js-all', function() {
	return gulp.src([
		vars.paths.libs.jquery.src,
		vars.paths.libs.semantic.src,
		vars.paths.libs.vue.src,
		vars.paths.libs.vueX.src,
		vars.paths.libs.vueRouter.src,
		vars.paths.libs.vueResource.src
	])
	.pipe(concat(vars.renderedNames.javascript.all))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.merged.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.merged.dest));
});

gulp.task('merge-js-banners', function() {
	return gulp.src([
		vars.paths.libs.jquerySlim.src
	])
	.pipe(concat(vars.renderedNames.javascript.banners))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.merged.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.merged.dest));
});

gulp.task('merge-js-libs', [
	//'merge-js-all',
	'merge-js-semantic',
	'merge-js-vue'
	//'merge-js-banners'
]);

