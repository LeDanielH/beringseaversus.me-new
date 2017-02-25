var vars = require('./gulp/vars'),
	gulp = require('gulp');
	sequence = require('run-sequence').use(gulp);

require('./gulp/process-styles');
require('./gulp/process-scripts');
require('./gulp/prepare-libs');
require('./gulp/merge-js-libs');
require('./gulp/process-clean');
require('./gulp/deployment');

gulp.task('watch', function() {
	gulp.watch(vars.paths.styles.all.watch, ['process-styles']);
	gulp.watch(vars.paths.scripts.all.watch, ['process-scripts']);
});

gulp.task('default', function(done) {
	sequence(
		['process-styles', 'process-scripts'],
        ['watch', 'localServer'],
        'jekyll-build', // must be run last because it prevents other tasks from running if it is run before them
		done);
});

gulp.task('first-time', function(done) {
	sequence('clean', ['prepare-libs','merge-js-libs'], done);
});

// run this task only after you switch enviroment in _config.yaml to production
gulp.task('prod', function(done) {
	sequence(['process-styles-prod','process-scripts-prod'], 'clean-dev', done);
});
