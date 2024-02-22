import gulp from 'gulp';
import path from '../config/path.js';
import browserSync from 'browser-sync';

// Плагины
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cssImport from 'gulp-cssimport';

const sass = gulpSass(dartSass);

export default () => {
  return (
    gulp
      .src(path.styles.src)
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: 'styles',
            message: error.message,
          })),
        })
      )
      .pipe(concat('styles.scss'))
      .pipe(sass())
      .pipe(cssImport())
      .pipe(
        autoprefixer({
          overrideBrowserslist: ['last 10 versions'],
          grid: true,
        })
      )
      .pipe(groupCssMediaQueries())
      // .pipe(gulp.dest(path.styles.dest))
      .pipe(rename({ suffix: '.min' }))
      .pipe(csso())
      .pipe(gulp.dest(path.styles.dest))
      .pipe(browserSync.stream())
  );
};
