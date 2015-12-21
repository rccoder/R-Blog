var gulp = require('gulp');

var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('sass-style', function () {
    return gulp.src('./static/css/style/style.scss')
        .pipe(sass())
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./static/dist/css/'));
});

gulp.task('sass-third', function() {
    return gulp.src('./static/css/third/*.scss')
        .pipe(sass())
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./static/dist/css/'))
})

gulp.task('script-style', function() {
    return gulp.src('./static/js/style/*.js')
        .pipe(concat('all.js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./static/dist/js/'));
});

gulp.task('script-third', function() {
    return gulp.src('./static/js/third/*.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./static/dist/js/'))
});

gulp.task('clean', function(callback) {
    del(['./static/dist/css', './static/dist/js'], callback);
});

gulp.task('default', function() {
    gulp.run( 'clean', 'sass-style', 'sass-third', 'script-style', 'script-third');

    gulp.watch('./static/css/**', function() {
        gulp.run( 'clean', 'sass-style', 'sass-third', 'script-style', 'script-third');
    });

    gulp.watch('./static/js/**', function() {
        gulp.run( 'clean', 'sass-style', 'sass-third', 'script-style', 'script-third');
    });
});