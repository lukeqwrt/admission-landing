const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('node-sass')); // Specify the Sass compiler

function compileSass() {
  return src('your-source-sass-files/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('your-destination-css-folder'));
}

function watchSass() {
  watch('your-source-sass-files/**/*.scss', compileSass);
}

exports.compileSass = compileSass;
exports.watchSass = watchSass;