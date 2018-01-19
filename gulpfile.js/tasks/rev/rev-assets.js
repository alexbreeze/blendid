var gulp      = require('gulp')
var path      = require('path')
var rev       = require('gulp-rev')
var revDel    = require('gulp-rev-delete-original');

// 1) Add md5 hashes to assets referenced by CSS and JS files
gulp.task('rev-assets', function() {
  // Ignore files that may reference assets. We'll rev them next.
  var ignoreThese = '!' + path.resolve(process.env.PWD, PATH_CONFIG.dest,'**/*+(css|js|map|json|html)')

  return gulp.src([path.resolve(process.env.PWD, PATH_CONFIG.dest,'**/*'), ignoreThese])
    .pipe(rev())
    .pipe(gulp.dest(PATH_CONFIG.dest))
    .pipe(revDel())
    .pipe(rev.manifest(path.resolve(process.env.PWD, PATH_CONFIG.dest, 'rev-manifest.json'), {merge: true}))
    .pipe(gulp.dest(''))
})
