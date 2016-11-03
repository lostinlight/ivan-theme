
var gulp           = require("gulp"),
    sass           = require("gulp-sass"),
    cssnano        = require("gulp-cssnano"),
    htmlmin        = require("gulp-htmlmin"),
    pxtorem        = require("gulp-pxtorem"),
    concat         = require("gulp-concat"),
    uglify         = require("gulp-uglify"),
    rename         = require("gulp-rename"),
    notify         = require("gulp-notify"),
    plumber        = require("gulp-plumber"),
    livereload     = require("gulp-livereload"),
    connect        = require("gulp-connect"),
    autoprefixer   = require("gulp-autoprefixer");

function customPlumber (errTitle) {
  return plumber({
    errorHandler: notify.onError({
      title: errTitle || "Error running Gulp",
      message: "Error: <%= error.message %>"
    })
  });
}

// Livereload Server
gulp.task("connect", function() {
  connect.server({
    root: "site",
    livereload: true
  });
});

gulp.task("html", function () {
  gulp.src("./site/**/**/*")
    .pipe(connect.reload());
});

// Styles
gulp.task("styles", function() {
  return gulp.src("src/scss/main.scss")
            .pipe(customPlumber("Error Running Sass"))
            .pipe(sass({errLogToConsole: true}))
            .pipe(autoprefixer(["last 2 versions", "iOS > 8", "Android 4"]))
            .pipe(pxtorem())
            .pipe(gulp.dest('site/assets/css'))
            .pipe(rename({ suffix: ".min" }))
            .pipe(cssnano())
            .pipe(gulp.dest("site/assets/css"))
            .pipe(notify({ message: "Styles task complete" }))
            .pipe(livereload());
});

// Scripts
gulp.task("scripts", function() {
  return gulp.src("src/scripts/**/*.js")
    .pipe(concat("main.js"))
    .pipe(rename({suffix: ".min"}))
    .pipe(uglify())
    .pipe(gulp.dest("site/assets/scripts"))
    .pipe(notify({ message: "Scripts task complete"}));
});

// Default
gulp.task("default", ["connect", "watch"]);

// Watch
gulp.task("watch", function() {
  gulp.watch(["./site/**/**/*"], ["html"]);
  gulp.watch("src/scss/**/*.scss", ["styles"]);
  gulp.watch("src/scripts/**/*.js", ["scripts"]);
});
