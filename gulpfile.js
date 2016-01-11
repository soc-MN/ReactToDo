var gulp       = require('gulp');
var sass       = require('gulp-sass');
var plumber    = require('gulp-plumber');
var notify     = require('gulp-notify');
var react      = require('gulp-react');
var jsx        = require('gulp-jsx');

// SASS
gulp.task('sass', function () {

    gulp.src('assets/styles/sass/*.scss')

        .pipe(plumber(plumberErrorHandler))

        .pipe(sass())

        .pipe(gulp.dest('assets/styles/css'))

});

// WATCH
gulp.task('watch', function() {

    gulp.watch('assets/sass/*.scss', ['sass']);
   
});

// ERROR HANDLING
var plumberErrorHandler = { errorHandler: notify.onError({

    title: 'Gulp',

    message: 'Error: <%= error.message %>'

})

};

// REACT
gulp.task('react', function () {
	return gulp.src('assets/js/main.jsx')
		.pipe(react())
		.pipe(gulp.dest('assets/js'));
});

gulp.task('jsx', function() {
  return gulp.src('assets/js/*.js')
    .pipe(jsx({
      factory: 'React.createClass'
    }))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('default', ['sass', 'watch', 'react', 'jsx']);