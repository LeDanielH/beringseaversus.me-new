import {paths} from './vars';
import gulp from 'gulp';

/* SASS UTILS */
let prepareLibsTasks = [];
for (let item in paths.sassUtils) {
	if (!paths.sassUtils.hasOwnProperty(item)) continue;
	((item) => {
		gulp.task(`prepare-sass-${item}`, () => {
			return gulp.src([
				paths.sassUtils[item].src
			])
			.pipe(gulp.dest(paths.sassUtils[item].dest));
		});
	})(item);
	prepareLibsTasks.push(`prepare-sass-${item}`);
}

/* LIBS */
for (let item in paths.libs) {
	if (!paths.libs.hasOwnProperty(item)) continue;
	((item) => {
		gulp.task(`prepare-libs-${item}`, () => {
			return gulp.src([
				paths.libs[item].src
			])
			.pipe(gulp.dest(paths.libs[item].dest));
		});
	})(item);
	prepareLibsTasks.push(`prepare-libs-${item}`);
}

export default function () {
	gulp.task('prepare-libs', prepareLibsTasks);
}

