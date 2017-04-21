import {paths} from './vars';
import gulp from 'gulp';
import del from 'del';

const cleanUp = gulp.task('cleanUp', () => {
	let itemsToBeDeleted = [];
	paths.delete.development.forEach((item) => itemsToBeDeleted.push(item));
	console.log(`${itemsToBeDeleted} will be deleted`);
	return del(itemsToBeDeleted, { force: true });
});

export default {cleanUp};