import {paths} from './vars';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import duplicate from 'gulp-rename';
import localServer from 'gulp-connect';
import processSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import purgeCss from 'gulp-css-purge';
import stripCssComments from 'gulp-strip-css-comments';
import purifyCss from 'gulp-purifycss';

const processStyles = gulp.task('processStyles', [], () => {
	return gulp.src([paths.styles.all.src])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(processSass({
			outputStyle: 'expanded'
		}).on('error', processSass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer({
			cascade: false,
			browsers: ['ie >= 10']
		}))
		.pipe(gulp.dest(paths.styles.all.dest))
		.pipe(localServer.reload());
});

const processStylesProd = gulp.task('processStylesProd', [], () => {
	return gulp.src([paths.styles.all.dest + 'main.css'])
		.pipe(stripCssComments())
		.pipe(purgeCss())
		.pipe(purifyCss([
			`${paths.scripts.all.dest}**/.js`, // todo preprod -> prod
			`${paths.html.dest}**/*.html`
		]))
		.pipe(cleanCss())
		.pipe(duplicate({suffix: '.min'}))
		.pipe(gulp.dest(paths.styles.all.dest))
});

export {processStyles, processStylesProd};


