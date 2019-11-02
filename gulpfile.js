 
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');

const config = {
	src: './src',
	html: {
		src: '/index.html'
    },
    css: {
		watch: '/less/*.less',
        src: '/less/*.less',
        dest: '/css'
	}
};
const jsFiles = [
	'./src/script/map.js',
];

function html(){
	return gulp.src('./src/**/*.html')
			  
			   .pipe(browserSync.reload({
				stream: true
			}));
}

function gless () {
	return gulp.src(config.src + config.css.src)
		.pipe(less())
		.pipe(autoprefixer({
        }))
        .pipe(gulp.dest(config.src + config.css.dest))
		.pipe(browserSync.reload({
			stream: true
		})); 
}

function scripts () {
	return gulp.src(jsFiles)
		.pipe(browserSync.stream());

}

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    gulp.watch('./src/**/*.less', gless);
    gulp.watch('./src/**/*.js', scripts);
    gulp.watch('./src/**/*.html', html);
  });