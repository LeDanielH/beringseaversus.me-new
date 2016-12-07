var vars = require('./vars'),
	gulp = require('gulp'),
	gzip = require('gulp-gzip'),
	concat = require('gulp-concat'),
	uglifyJs = require('gulp-uglify');

gulp.task('merge-js-semantic', function() {
	return gulp.src([
		vars.paths.libsJS.jquery.src.min,
		vars.paths.libsJS.semantic.src.min
	])
	.pipe(concat(vars.renderedNames.javascript.semantic.min))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.libsJSMerged.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.libsJSMerged.dest));
});

gulp.task('merge-js-vue', function() {
	return gulp.src([
		vars.paths.libsJS.vue.src.min,
		vars.paths.libsJS.vueX.src.min,
		vars.paths.libsJS.vueRouter.src.min,
		vars.paths.libsJS.vueResource.src.min
	])
	.pipe(concat(vars.renderedNames.javascript.vue.min))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.libsJSMerged.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.libsJSMerged.dest));
});

gulp.task('merge-js-all', function() {
	return gulp.src([
		vars.paths.libsJS.jquery.src.min,
		vars.paths.libsJS.semantic.src.min,
		vars.paths.libsJS.vue.src.min,
		vars.paths.libsJS.vueX.src.min,
		vars.paths.libsJS.vueRouter.src.min,
		vars.paths.libsJS.vueResource.src.min
	])
	.pipe(concat(vars.renderedNames.javascript.all.min))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.libsJSMerged.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.libsJSMerged.dest));
});

gulp.task('merge-js-banners', function() {
	return gulp.src([
		vars.paths.libsJS.jquery.src.slim,
	])
	.pipe(concat(vars.renderedNames.javascript.banners.min))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.libsJSMerged.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.libsJSMerged.dest));
});

gulp.task('merge-js-libs', [
	//'merge-js-all',
	'merge-js-semantic',
	'merge-js-vue'
	//'merge-js-banners'
]);

