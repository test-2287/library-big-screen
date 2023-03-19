const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const urlAdjuster = require('gulp-css-url-adjuster')

function buildSass() {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(urlAdjuster({
        prepend: '../../assets/'
    }))
    .pipe(gulp.dest('./css/'));
}

exports.buildSass = buildSass
exports.watch = function() {
    gulp.watch('./css/**/*.scss', gulp.series('buildSass'))
};