var vars = require('./vars');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var duplicate = require('gulp-rename');
var gzip = require('gulp-gzip');
var localServer = require('gulp-connect');
var processSass = require('gulp-sass');
var nanofyCss = require('gulp-cssnano');
var purgeCss = require('gulp-css-purge');
var stripCssComments = require('gulp-strip-css-comments');
var purifyCss = require('gulp-purifycss');

gulp.task('process-styles-allinone', [], function() {
	return gulp.src([vars.paths.styles.src])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(processSass({
			outputStyle: 'expanded'
		}).on('error', processSass.logError))
		.pipe(purgeCss())
		.pipe(stripCssComments())
		.pipe(autoprefixer({
			cascade: false,
			browsers: ['ie >= 10']
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(vars.paths.styles.dest))
		.pipe(duplicate({suffix: '.min'}))
		.pipe(nanofyCss())
		.pipe(gulp.dest(vars.paths.styles.dest))
		.pipe(gzip())
		.pipe(gulp.dest(vars.paths.styles.dest))
		.pipe(localServer.reload());
});

gulp.task('process-styles-modular', [], function() {
	return gulp.src([vars.paths.styles.src])
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(processSass({
		outputStyle: 'expanded'
	}).on('error', processSass.logError))
	.pipe(purgeCss())
	.pipe(stripCssComments())
	.pipe(purifyCss()) // todo dodelat po tom co udelam javascript
	.pipe(autoprefixer({
		cascade: false,
		browsers: ['ie >= 10']
	}))
	.pipe(sourcemaps.write())
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
