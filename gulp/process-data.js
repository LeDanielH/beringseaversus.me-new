var vars = require('./vars'),
	gulp = require('gulp'),
	localServer = require('gulp-connect'),
	minifyImages = require('gulp-imagemin');


gulp.task('process-json', function() {
	return gulp.src([vars.paths.json.src])
	.pipe(gulp.dest(vars.paths.json.dest))
	.pipe(localServer.reload());
});

gulp.task('process-images', function() {
	return gulp.src([vars.paths.images.src])
	.pipe(minifyImages({
		optimizationLevel: 3,
		progressive: true,
		interlaced: true
	}))
	.pipe(gulp.dest(vars.paths.images.dest));
});