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

function process_pdf(html_filename, pdf_filename, done) {
  let pwd = process.cwd();
  let path = "${pwd}/pdf/${pdf_filename}";
  let command = `touch "${path}";rm -f "${path}"; osascript ./scripts/save-pdf-file.scpt "${pwd}/${html_filename}" "${pwd}/pdf" "${pdf_filename}"`;
  // console.log(command);
  cp.exec(command, done);
}

function pdf_resume(done) {
  process_pdf("resume.html", "stephen-bannasch-resume.pdf", done);
}
pdf_resume.description = 'Generate a PDF of the resume page using applescript and Safari';

function pdf_resume_long(done) {
  process_pdf("resume-long.html", "stephen-bannasch-resume-long.pdf", done);
}
pdf_resume_long.description = 'Generate a PDF of the long resume page using applescript and Safari';

function pdf_imaginationandlogic(done) {
  process_pdf("imaginationandlogic.html", "stephen-bannasch-imaginationandlogic.pdf", done);
}
pdf_imaginationandlogic.description = 'Generate a PDF of the imaginationandlogic page using applescript and Safari';

const watch = () => gulp.watch(["*.html", "*.css"], reload);

const dev = gulp.series(serve, watch);
dev.description = 'Start server and use browsersync to watch files and update pages.';

exports.default = dev;
exports.pdf_resume = pdf_resume;
exports.pdf_resume_long = pdf_resume_long;
exports.pdf_imaginationandlogic = pdf_imaginationandlogic;
