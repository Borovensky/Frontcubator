var gulp = require('gulp');
var gulpJade = require('gulp-jade');
var gulpLess = require('gulp-less');
// var gulpConcat = require('gulp-concat');


gulp.task('default', function(){
	console.log("HYI!");
});

gulp.task('jade', function(){
	gulp.src('index.jade')
	.pipe(gulpJade())
	.pipe(gulp.dest('./build/'))
});

gulp.task('less', function(){
	gulp.src('./less/main.less')
	// .pipe(gulpConcat('buildMain.css'))
	.pipe(gulpLess())
	.pipe(gulp.dest('./build/css'))
});


gulp.task('watch-task', function(){
	gulp.watch('*.jade', function(event){
		gulp.run('jade');
	});
	gulp.watch('./less/**/*.less', function(event){
		gulp.run('less');
	});
});


