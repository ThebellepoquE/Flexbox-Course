var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('serve', function(done) {
browserSync.init({
  server: {
    baseDir: "./",
    directory: true,
    serveStaticOptions: {
      extensions: ['html']  // Añade esta línea para mostrar directorio
   }
  },
  port: 3001,
  open: true,
  notify: false,
  files: ['./**/*.html']
});

gulp.watch(['./**/*.html']).on("change", reload);
  done();
});

