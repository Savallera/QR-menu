import gulp from 'gulp';
import path from '../config/path.js';

// Плагины
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
// import webpHtml from 'gulp-webp-html';

export default () => {
  return gulp
    .src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'HTML',
          message: error.message,
        })),
      })
    )
    .pipe(fileInclude())
    // .pipe(webpHtml())
    // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(path.html.dest));
};
