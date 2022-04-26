import dartSaas from 'sass';
import gulpSaas from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';                              // Сжатие CSS файла
import webpcss from 'gulp-webpcss';                                 // Вывод WEBP изображение
import autoPrefixer from 'gulp-autoprefixer';                      // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries';  //Группировка медиа запросов




const sass = gulpSaas(dartSaas);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Ошибка SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        
        .pipe(sass({
            outputStyle: 'expanded'
        }))


        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries())
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
            webpcss(
            {
                webpClass: ".webp",
                noWebpClass: ".no-webp"
           } 
                ))
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
            autoPrefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
            }))
        )
        //Раскомментировать если нужен не сжатый файл дубль файла стилей
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss())
        )

        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}