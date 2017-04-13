import {paths, renderedNames} from './vars';
import gulp from 'gulp';
import gzip from 'gulp-gzip';
import concat from 'gulp-concat';
import uglifyJs from 'gulp-uglify';

gulp.task('merge-js-all', () => {
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

export default function () {
	gulp.task('merge-js-libs', [
		'merge-js-all'
	]);
}

