var vars = require('./vars'),
	gulp = require('gulp'),
	gzip = require('gulp-gzip'),
	concat = require('gulp-concat'),
	uglifyJs = require('gulp-uglify');

gulp.task('prepare-js-jquery', function() {
	return gulp.src([
		vars.paths.libsJS.jquery.src.min,
		vars.paths.libsJS.jquery.src.slim
	])
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.libsJS.jquery.dest));
});

gulp.task('prepare-js-semantic', function() {
	return gulp.src([
		vars.paths.libsJS.semantic.src.modular
	])
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.libsJS.semantic.dest));
});

gulp.task('prepare-js-vue', function() {
	return gulp.src([
		vars.paths.libsJS.vue.src.min,
		vars.paths.libsJS.vueX.src.min,
		vars.paths.libsJS.vueRouter.src.min,
		vars.paths.libsJS.vueResource.src.min
	])
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.libsJS.vue.dest));
});

gulp.task('prepare-js-gsap', function() {
	return gulp.src([
		vars.paths.libsJS.gsap.src.min
	])
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.libsJS.gsap.dest));
});


/* SASS LIBS */
for (var key in vars.paths.libsSass) {
	if (!vars.paths.libsSass.hasOwnProperty(key)) continue;
	(function (key) {
		gulp.task('prepare-sass-'+ key, function() {
			return gulp.src([
				vars.paths.libsSass[key].src
			])
			.pipe(gulp.dest(vars.paths.libsSass[key].dest));
		});
	})(key);
}

/* FONTS LIBS */
for (var key in vars.paths.fonts) {
	if (!vars.paths.fonts.hasOwnProperty(key)) continue;
	(function (key) {
		gulp.task('prepare-fonts-'+ key, function() {
			return gulp.src([
				vars.paths.fonts[key].src
			])
			.pipe(gulp.dest(vars.paths.fonts[key].dest));
		});
	})(key);
}

/* IMAGES LIBS */
for (var key in vars.paths.images) {
	if (!vars.paths.images.hasOwnProperty(key)) continue;
	(function (key) {
		gulp.task('prepare-images-'+ key, function() {
			return gulp.src([
				vars.paths.images[key].src
			])
			.pipe(gulp.dest(vars.paths.images[key].dest));
		});
	})(key);
}



gulp.task('prepare-libs', [
	'prepare-js-jquery',
	'prepare-js-semantic',
	'prepare-js-vue',
	'prepare-js-gsap',
	'prepare-sass-semantic',
	'prepare-sass-bourbon',
	'prepare-sass-normalize',
	'prepare-fonts-semantic',
	'prepare-images-semantic'
]);
