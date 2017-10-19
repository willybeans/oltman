const gulp = require('gulp'),
      babel = require('gulp-babel'),
      browserify = require('gulp-browserify'),
    //  babelify = require('babelify'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      htmlreplace = require('gulp-html-replace'),
      webserver = require('gulp-webserver');

var src = './src',
    app = './builds/app';

gulp.task('js', () => {
  return gulp.src(src + '/index.js')
    .pipe(babel({
      compact: true,
      presets: ['es2015', 'react','stage-2']
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(browserify({
      transform: 'babelify',
      debug: true
    }))
    .pipe(gulp.dest('./builds/app/js'));
});
//
// gulp.task('html', () => {
//   gulp.src( app + '/**/*.html');
// });
//
// gulp.task('css', () => {
//   gulp.src( app + '/css/*.css');
// });
//
// gulp.task('react', () => {
//   return gulp.src( src + '/*.js')
//     .pipe(require('gulp-reactify')({
//       reactTools: require('reactTools')
//     }));
//
 gulp.task('watch', () => {
   gulp.watch( src + '/*.js', ['js']); //fix this
   gulp.watch( src + '/Components/*.js' ['comp']);
//   gulp.watch( app + '/css/**/*.css', ['css']);
//   gulp.watch([ app + '/**/*.html'], ['html']);
 });
//
gulp.task('webserver', () => {
  gulp.src( app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});
//
// gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
gulp.task('default', ['watch', 'webserver', 'js']);




//doesnt work...? from that website
// gulp.task('test', () => {
//   var bundler = browserify('src/app.js');
//   bundle.transform(babelify);
//     bundler.bundle()
//     .on('error', function (err) { console.error(err); })
//     .pipe(source('app.js'))
//   //  .pipe(buffer())
//     .pipe(gulp.dest(app + '/js'))
// });


// gulp.task('js', () => {
//   return gulp.src( src + '/App.js' )
//     .pipe(browserify({
//       transform: 'babelify',
//       debug: true
//     }))
//     .on('error', function (err) {
//       console.error('Error!', err.message);
//     })
//     .pipe(gulp.dest(app + '/js'));
// });
