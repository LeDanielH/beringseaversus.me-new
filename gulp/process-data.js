import {paths} from './vars';
import gulp from 'gulp';
import localServer from 'gulp-connect';
import minifyImages from 'gulp-imagemin';

const processJson = gulp.task('processJson', () => {
	return gulp.src([paths.json.src])
		.pipe(gulp.dest(paths.json.dest))
		.pipe(localServer.reload());
});

const processImages = gulp.task('processImages', () => {
	return gulp.src([paths.images.src])
		.pipe(minifyImages({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(paths.images.dest));
});

export {processJson, processImages};