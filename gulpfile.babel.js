import {paths} from './gulp/vars';
import gulp from 'gulp';
import runsequence from 'run-sequence';
const sequence = runsequence.use(gulp);

import {processStyles, processStylesProd} from './gulp/process-styles';
import {processScripts, processScriptsProd} from './gulp/process-scripts';
import {cleanUp} from './gulp/process-clean';
import {localServer, jekyllBuild} from './gulp/deployment';
import {prepareLibs} from './gulp/prepare-libs';
import {mergeJsLibs} from './gulp/merge-js-libs';
import {processData} from './gulp/process-data';

gulp.task('watch', () => {
	gulp.watch(paths.styles.all.watch, ['processStyles']);
	gulp.watch(paths.scripts.all.watch, ['processScripts']);
	gulp.watch(paths.html.src, ['jekyllBuild']);
	gulp.watch(paths.data.yml.watch, ['jekyllBuild']);
});

gulp.task('default', (done) => sequence('jekyllBuild',['processData'], ['processStyles', 'processScripts'], ['watch', 'localServer'], done));
gulp.task('firstTime', (done) => sequence('cleanUp', ['prepareLibs','mergeJsLibs'], done));
gulp.task('prod', (done) => sequence(['processStylesProd','processScriptsProd'], done));
