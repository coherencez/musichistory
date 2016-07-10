const gulp = require('gulp');
const jshint = require('gulp-jshint');
const watch = require('gulp-watch');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const watchify = require('watchify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
// const tape = require('gulp-tape');
// const tapSpec = require('tap-spec');



let customOpts = {
  entries: ['./js/main.js'],
  debug: true
};
let opts = Object.assign({}, watchify.args, customOpts);
let bundler = watchify(browserify(opts)); 
bundler.on('update', bundle); // on any dep update, runs the bundler
// bundler.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())
    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'));
}
gulp.task('browserify', bundle);

gulp.task('lint', function() { 
	return gulp.src('./js/**/*.js') 
	.pipe(jshint()) 
	.pipe(jshint.reporter('jshint-stylish')); 
});

// gulp.task('test', function() {
//   return gulp.src('./js/tests/*pec.js')
//     .pipe(tape({
//       reporter: tapSpec()
//     }));
// });

gulp.task('watch', function() { 
	gulp.watch('./js/**/*.js', ['lint' /*,'test'*/]); 
}); 

gulp.task('default', ['lint', /*'test',*/ 'watch'], bundle); 