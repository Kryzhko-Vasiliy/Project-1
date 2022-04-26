import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';



const ttfToWoff = (init) => init
    .pipe(fonter({
        formats: ['woff']
    }))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));


const ttfToWoff2 = (init) => init
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
    

export const fonts = () => {
    const init = app.gulp
        .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ));
    ttfToWoff(init);
    ttfToWoff2(init);
    return init;
}

// /*ЗАДАЧА 2*/

// export const ttfToWoff = () => {
//     //Ищу файлы шрифтов .ttf
//     return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
//         .pipe(app.plugins.plumber(
//             app.plugins.notify.onError({
//                 title: "FONTS",
//                 message: "Error: <%= error.message %>"
//             }))
//         )
//         //Конвертирую в .woff
//         .pipe(fonter({
//             formats: ['woff']
//         }))
//         //Выгружаю в папку с результатом 
//         .pipe(app.gulp.dest(`${app.path.build.fonts}`))
//         //Ищу файлы шрифтов .ttf
//         .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
//         //Конвертирую в .woff2
//         .pipe(ttf2woff2())
//         //Выгружаю в папку с результатом
//         .pipe(app.gulp.dest(`${app.path.build.fonts}`));
// }

// export const fontsStyle = () => {
//     //Файл стилей подключения шрифтов
//     let fontFile = `${app.path.srcFolder}/scss/fonts.scss`;
//     return fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
//         if (fontsFiles) {
//             if (!fs.existsSync(fontsFiles)) {
//                 //Усли файла нет,создаю его
//                 fs.writeFile(fontsFiles, '', cb)
//                 let newFileOnly;
//                 for (var i = 0; i < fontsFiles.length; i++) {
//                     //Записываю подключение шрифтов в файл стилей
//                     let fontFileName = fontsFiles[i].split('.')[0];
//                     if (newFileOnly != fontsFiles) {
//                         let(fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFile)
//                         let(fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFile)
//                         if (fontWeight.toLowerCase() === 'thin') {
//                             fontWeight = 100;
//                         } else if (fontWeight.toLowerCase() === 'extralight') {
//                             fontWeight = 200;
//                         } else if (fontWeight.toLowerCase() === 'light') {
//                             fontWeight = 300;
//                         } else if (fontWeight.toLowerCase() === 'medium') {
//                             fontWeight = 500;
//                         } else if (fontWeight.toLowerCase() === 'semibold') {
//                             fontWeight = 600;
//                         } else if (fontWeight.toLowerCase() === 'bold') {
//                             fontWeight = 700;
//                         } else if (fontWeight.toLowerCase() === 'extrabold') {
//                             fontWeight = 800;
//                         } else if (fontWeight.toLowerCase() === 'black') {
//                             fontWeight = 900;
//                         } else {
//                             fontWeight = 400;
//                         }
//                         fs.appendFile(fontFile,
//                             @mixin font($font_name, $file_name, $weight, $style) {
//                                     @font-face {
//                                         font-family: $font_name;
//                                         font-display: swap;
//                                         src: url("../fonts/${file_name}.woff") format("woff"), url("../fonts/${fontFileName}.woff2") format("woff2");
//                                         font-weight:${weight};
//                                         font-style:${style}, cb;`
//                     }
//                 }
//             } else {
//                 console.log("Файл не существует");
//             }
//         }
//     });
//     return app.gulp.src(`${app.path.srcFolder}`);
//     function cb() {}
// }
