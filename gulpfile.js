//Основной модуль
import gulp from "gulp";

//Импорт путей
import { path } from "./gulp/config/path.js";

//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";


//Передаем значение в глобальную переменную

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}
//Импорт задач
import { copy } from "./gulp/task/copy.js";
import { reset } from "./gulp/task/reset.js";
import { html } from "./gulp/task/html.js";
import { server } from "./gulp/task/server.js";
import { scss } from "./gulp/task/scss.js";
import { js } from "./gulp/task/js.js";
import { images } from "./gulp/task/images.js";
import { svgSprive } from "./gulp/task/svgSprive.js";
import { zip } from "./gulp/task/zip.js";
import { ftp } from "./gulp/task/ftp.js";               //НУЖЕН FTP-SERVER ЛОГИН ПАРОЛЬ И ТП НЕ ЗАДАН В CONFIG-FTP.JS
import { fonts } from "./gulp/task/fonts.js";

//Наблюдатель за изменениями в файлах
function watcher(){
    gulp.watch(path.watch.files, copy);// ЗАМЕНИТЬ COPY  НА ---  gulp.series(copy, ftp),ЧТОБЫ ВЫГРУЖАЛОСЬ АВТОМАТИЧЕСКИ
    gulp.watch(path.watch.html, html);//ЗАМЕНИТЬ НА ---  gulp.series(html, ftp),ЧТОБЫ ВЫГРУЖАЛОСЬ АВТОМАТИЧЕСКИ
    gulp.watch(path.watch.scss, scss);//ЗАМЕНИТЬ НА --- gulp.series(scss, ftp),ЧТОБЫ ВЫГРУЖАЛОСЬ АВТОМАТИЧЕСКИ
    gulp.watch(path.watch.js, js);//ЗАМЕНИТЬ НА --- gulp.series(js, ftp),ЧТОБЫ ВЫГРУЖАЛОСЬ АВТОМАТИЧЕСКИ
    gulp.watch(path.watch.images, images);//ЗАМЕНИТЬ НА --- gulp.series(images, ftp),ЧТОБЫ ВЫГРУЖАЛОСЬ АВТОМАТИЧЕСКИ
     gulp.watch(path.watch.fonts, fonts);
}

export { svgSprive }
//Основные задачи
const mainTasks = gulp.parallel(copy, html, scss, js, images, fonts);

//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);                   //НУЖЕН FTP-SERVER ЛОГИН ПАРОЛЬ И ТП НЕ ЗАДАН В CONFIG-FTP.JS


//Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export {deployFTP}          //НУЖЕН FTP-SERVER ЛОГИН ПАРОЛЬ И ТП НЕ ЗАДАН В CONFIG-FTP.JS
//Выполнение сценария по умолчанию
gulp.task('default', dev);