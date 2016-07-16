var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var src = [
	// libraries
	"./node_modules/core-js/client/shim.min.js",
	"./node_modules/zone.js/dist/zone.js",
	"./node_modules/reflect-metadata/Reflect.js",
	"./node_modules/systemjs/dist/system.src.js"
];

gulp.task('default', ["compress", "copy"], function() {
	// place code for your default task here
});

gulp.task('compress', function() {
	return gulp.src(src)
		.pipe(concat('lib.vendor.js'))
		.pipe(uglify())
		.pipe(gulp.dest(""));
});

gulp.task('copy', function() {
	gulp.src(['node_modules/@angular/common/bundles/common.umd.js'])
		.pipe(gulp.dest('lib_modules/@angular/common/bundles/'))
	gulp.src(['node_modules/@angular/compiler/bundles/compiler.umd.js'])
		.pipe(gulp.dest('lib_modules/@angular/compiler/bundles/'))
	gulp.src(['node_modules/@angular/core/bundles/core.umd.js'])
		.pipe(gulp.dest('lib_modules/@angular/core/bundles/'))
	gulp.src(['node_modules/@angular/forms/bundles/forms.umd.js'])
		.pipe(gulp.dest('lib_modules/@angular/forms/bundles/'))
	gulp.src(['node_modules/@angular/http/bundles/http.umd.js'])
		.pipe(gulp.dest('lib_modules/@angular/http/bundles/'))
	gulp.src(['node_modules/@angular/platform-browser/bundles/platform-browser.umd.js'])
		.pipe(gulp.dest('lib_modules/@angular/platform-browser/bundles/'))
	gulp.src(['node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js'])
		.pipe(gulp.dest('lib_modules/@angular/platform-browser-dynamic/bundles/'))
	gulp.src(['node_modules/@angular/router/bundles/router.umd.js'])
		.pipe(gulp.dest('lib_modules/@angular/router/bundles/'))
	gulp.src(['node_modules/@angular/router-deprecated/bundles/router-deprecated.umd.js'])
		.pipe(gulp.dest('lib_modules/@angular/router-deprecated/bundles/'))
	gulp.src(['node_modules/@angular/upgrade/bundles/upgrade.umd.js'])
		.pipe(gulp.dest('lib_modules/@angular/upgrade/bundles/'))

	gulp.src(['node_modules/rxjs/**/*.js'])
		.pipe(gulp.dest('lib_modules/rxjs/'))
	// gulp.src(['node_modules/angular2-in-memory-web-api/index.js'])
	// 	.pipe(gulp.dest('lib_modules/angular2-in-memory-web-api/'))
});