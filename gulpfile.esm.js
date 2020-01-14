/*jshint esversion: 6 */

import gulp from 'gulp';
import browserSync from 'browser-sync';
import cp from 'child_process';

const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({server: {}});
  done();
}

function pdf(done) {
  cp.exec(
    'rm -f "`pwd`/resume.pdf"; osascript ./scripts/save-pdf-file.scpt \"`pwd`/resume.html" "`pwd`\"', done
  );
}
pdf.description = 'Generate a PDF of the resume page using applescript and Safari';

const watch = () => gulp.watch(["*.html", "*.css"], reload);

const dev = gulp.series(serve, watch);
dev.description = 'Start server and use browsersync to watch files and update pages.';

exports.default = dev;
exports.pdf = pdf;
