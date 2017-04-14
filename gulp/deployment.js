import {paths} from './vars';
import gulp from 'gulp';
import * as child from 'child_process';
import gutil from 'gulp-util';
import bs from 'browser-sync';
import shell from 'gulp-shell';
import deploy from 'gulp-gh-pages';

const browserSync = bs.create();
const spawn = child.spawn;

const deploySite = gulp.task('deploySite', () => {
	return gulp.src(paths.deploy).pipe(deploy());
});

const localServer = gulp.task('localServer', () => {
	browserSync.init({
		files: [paths.html.bs, paths.styles.bs, paths.scripts.bs],
		port: 9876,
		ghostMode: false,
		server: {
			baseDir: paths.html.dest
		}
	});
});

const jekyllBundle = process.platform === "win32" ? "bundle.bat" : "bundle";

const jekyllServe = gulp.task('jekyllServe', (gulpCallBack) => {
	const jekyll = spawn(jekyllBundle, ['exec', 'jekyll', 'serve'], {stdio: 'inherit'});
	jekyll.on('exit', (code) => gulpCallBack(code === 0 ? null :`ERROR: Jekyll process exited with code: ${code}`));
});

const jekyllBuild = gulp.task('jekyllBuild', () => {
	const shellCommand = `${jekyllBundle} exec jekyll build`;
	return gulp.src('').pipe(shell(shellCommand)).on('error', gutil.log);
});

const jekyllBuildPost = gulp.task('jekyllBuildPost', () => {
	const shellCommand = `${jekyllBundle} exec jekyll build --watch --limit_posts 1`;
	return gulp.src('').pipe(shell(shellCommand)).on('error', gutil.log);
});

export {deploySite, localServer, jekyllServe, jekyllBuild, jekyllBuildPost};