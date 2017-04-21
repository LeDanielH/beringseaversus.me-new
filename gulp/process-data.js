import {paths} from './vars';
import gulp from 'gulp';

const processJson = gulp.task('processJson', () => {
	return gulp.src([paths.data.json.src]).pipe(gulp.dest(paths.data.json.dest))
});

const processImages = gulp.task('processImages', () => {
	return gulp.src([paths.data.images.src]).pipe(gulp.dest(paths.data.images.dest));
});

const processFonts = gulp.task('processFonts', () => {
	return gulp.src([paths.data.fonts.src]).pipe(gulp.dest(paths.data.fonts.dest));
});

const processData = gulp.task('processData', ['processJson', 'processImages', 'processFonts']);

export {processJson, processImages, processFonts, processData};