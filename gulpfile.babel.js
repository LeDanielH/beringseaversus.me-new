import {paths} from './gulp/vars';
import gulp from 'gulp';
import runsequence from 'run-sequence';
const sequence = runsequence.use(gulp);

import {processStyles, processStylesProd} from './gulp/process-styles';
import {processScripts, processScriptsProd} from './gulp/process-scripts';
import {cleanDevelopment, cleanProduction} from './gulp/process-clean';
import {localServer, jekyllBuild} from './gulp/deployment';
import {prepareLibs} from './gulp/prepare-libs';
import {mergeJsLibs} from './gulp/merge-js-libs';


gulp.task('watch', () => {
	gulp.watch(paths.styles.all.watch, ['processStyles']);
	gulp.watch(paths.scripts.all.watch, ['processScripts']);
});

gulp.task('default', (done) => {
	sequence(
		['processStyles', 'processScripts'],
        ['watch', 'localServer'],
        'jekyllBuild', // must be run last because it prevents other tasks from running if it is run before them
		done);
});

gulp.task('firstTime', (done) => {
	sequence('cleanDevelopment', ['prepareLibs','mergeJsLibs'], done);
});

// run this task only after you switch enviroment in _config.yaml to production
gulp.task('prod', (done) => {
	sequence(['processStylesProd','processScriptsProd'], 'cleanProduction', done);
});
