import {paths, renderedNames} from './vars';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import duplicate from 'gulp-rename';
import localServer from 'gulp-connect';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import uglifyJs from 'gulp-uglify';
import babel from 'gulp-babel';
import checkJs from 'gulp-jshint';

const processScripts = gulp.task('processScripts', () => {
	return gulp.src([
		`${paths.scripts.all.src}index.js`,
		// paths.scripts.all.src + '**/*.js'
	])
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(concat(renderedNames.javascript.scripts))
	.pipe(checkJs())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(paths.scripts.all.dest))
	// .pipe(localServer.reload());
});

const processScriptsProd = gulp.task('processScriptsProd', () => {
	return gulp.src([`${paths.scripts.all.dest}scripts.js`,])
	.pipe(duplicate({suffix: '.min'}))
	.pipe(uglifyJs())
	.pipe(gulp.dest(paths.scripts.all.dest))
});

export {processScripts, processScriptsProd};