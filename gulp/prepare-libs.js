import {paths} from './vars';
import gulp from 'gulp';

/* SASS UTILS */
let prepareLibsTasks = [];
for (let item in paths.sassUtils) {
	if (!paths.sassUtils.hasOwnProperty(item)) continue;
	((item) => {
		gulp.task(`prepareSass-${item}`, () => {
			return gulp.src([
				paths.sassUtils[item].src
			])
			.pipe(gulp.dest(paths.sassUtils[item].dest));
		});
	})(item);
	prepareLibsTasks.push(`prepareSass-${item}`);
}

/* LIBS */
for (let item in paths.libs) {
	if (!paths.libs.hasOwnProperty(item)) continue;
	((item) => {
		gulp.task(`prepareLibs-${item}`, () => {
			return gulp.src([
				paths.libs[item].src
			])
			.pipe(gulp.dest(paths.libs[item].dest));
		});
	})(item);
	prepareLibsTasks.push(`prepareLibs-${item}`);
}

const prepareLibs = gulp.task('prepareLibs', prepareLibsTasks);

export {prepareLibs};

