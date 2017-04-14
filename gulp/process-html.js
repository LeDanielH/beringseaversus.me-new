import {paths} from './vars';
import gulp from 'gulp';
import localServer from 'gulp-connect';
import nanofyHtml from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import stripHtmlComments from 'gulp-strip-comments';


const processHtml = gulp.task('processHtml', [], () => {
	return gulp.src(paths.html.src)
		.pipe(plumber())
		.pipe(stripHtmlComments())
		.pipe(nanofyHtml({collapseWhitespace: true}))
		.pipe(gulp.dest(paths.html.dest))
});

export {processHtml};
