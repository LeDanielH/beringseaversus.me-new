import {paths, renderedNames} from './vars';
import gulp from 'gulp';
import localServer from 'gulp-connect';
import * as child from 'child_process';
const spawn = child.spawn;
import gutil from 'gulp-util';
import bs from 'browser-sync';
const browserSync = bs.create();
import shell from 'gulp-shell';
import deploy from 'gulp-gh-pages';

const deploySite = gulp.task('deploy', () => {
	return gulp.src(paths.deploy).pipe(deploy());
});

const Jekyll = {
	bundle: process.platform === "win32" ? "bundle.bat" : "bundle",
	serve: () => {
		gulp.task('jekyll-serve', (gulpCallBack) => {
			const jekyll = spawn(Jekyll.bundle, ['exec', 'jekyll', 'serve'], {stdio: 'inherit'});

			jekyll.on('exit', (code) => {
				gulpCallBack(code === 0 ? null :'ERROR: Jekyll process exited with code: '+ code);
			});
		});
	},
	build: () => {
		gulp.task('jekyll-build', () => {
			const shellCommand = Jekyll.bundle + ' exec jekyll build --watch';

			return gulp.src('')
				.pipe(shell(shellCommand))
				.on('error', gutil.log);
		});
	},
	buildPost: () => {
		gulp.task('jekyll-build-post', () => {
			const shellCommand = Jekyll.bundle + ' exec jekyll build --watch --limit_posts 1';

			return gulp.src('')
				.pipe(shell(shellCommand))
				.on('error', gutil.log);
		});
	},
	init: () => {
		Jekyll.serve();
		Jekyll.build();
		Jekyll.buildPost();
	}
};

Jekyll.init();


gulp.task('localServer', () => {
	browserSync.init({
		files: [paths.html.dest + '/**'],
		port: 9876,
        ghostMode: false,
		server: {
			baseDir: paths.html.dest
		}
	});
});

