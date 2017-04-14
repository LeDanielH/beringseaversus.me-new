import {paths} from './vars';
import gulp from 'gulp';
import del from 'del';

const cleanDevelopment = gulp.task('cleanDevelopment', () => {
	let itemsToBeDeleted = [];
	paths.delete.development.forEach((item) => itemsToBeDeleted.push(item));
	console.log(`${itemsToBeDeleted} will be deleted`);
	return del(itemsToBeDeleted, { force: true });
});

const cleanProduction = gulp.task('cleanProduction', () => {
	let itemsToBeDeleted = [];
	paths.delete.production.forEach((item) => itemsToBeDeleted.push(item));
	console.log(`${itemsToBeDeleted} will be deleted`);
	return del(itemsToBeDeleted, { force: true });
});



export default {cleanDevelopment, cleanProduction};