var gulp = require('gulp');

var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('sass', function () {
    return gulp.src('./static/css/style.scss')
        .pipe(sass())
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./static/dist/css'));
});

gulp.task('script', function() {
    return gulp.src('./static/js/*.js')
        .pipe(concat('all.js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./static/dist/js'));
});

gulp.task('clean', function(callback) {
    del(['./static/dist/css', './static/dist/js'], callback);
});

gulp.task('default', function() {
    gulp.run('sass', 'script', 'clean');

    gulp.watch('./static/css/*.scss', function() {
        gulp.run('sass', 'script', 'clean');
    });

    gulp.watch('./static/js/*.js', function() {
        gulp.run('sass', 'script', 'clean');
    });
});