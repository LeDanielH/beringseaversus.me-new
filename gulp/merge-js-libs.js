import {paths, renderedNames} from './vars';
import gulp from 'gulp';
import gzip from 'gulp-gzip';
import concat from 'gulp-concat';
import uglifyJs from 'gulp-uglify';

gulp.task('mergeJsAll', () => {
	return gulp.src([
		paths.libs.jquery.src,
		paths.libs.semantic.js
	])
	.pipe(concat(renderedNames.javascript.all))
	.pipe(uglifyJs())
	.pipe(gulp.dest(paths.merged.dest))
	.pipe(gzip())
	.pipe(gulp.dest(paths.merged.dest));
});

const mergeJsLibs = gulp.task('mergeJsLibs', ['mergeJsAll']);

export {mergeJsLibs};