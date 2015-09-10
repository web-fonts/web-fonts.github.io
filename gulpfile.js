var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


var js = [
    './bower_components/jquery/dist/jquery.js',
    './bower_components/uikit/js/uikit.js',
    './bower_components/uikit/js/components/grid.js',
    './bower_components/uikit/js/core/switcher.js',
    './bower_components/uikit/js/core/dropdown.js',
    './src/js/jquery.geokbd.js',
    './src/js/script.js'
];

gulp.task('js:merge', function() {
    return gulp.src(js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js/'));
});


gulp.task('js:minify', function() {
    return gulp.src('dist/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['js', 'compress']);