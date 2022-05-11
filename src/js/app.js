
// import Swiper, { Navigator, Paginator } from 'swiper';

// const swiper = new Swiper();
/*(i) Код попадает в итоговый файл, только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл например импорт "files/script.js";
Неуспользуемый (не вызванный код) в итоговый файл не попадает.

Если требуется добавить модуль - следует его расскоментировать
*/

//Подключение основного файла стилей
// import "../scss/global-style/style.scss";

//Основные модули================================================================================================================================================
import * as flsFunction from "./modules/function.js";

//Проверка поддежки webp,добавление класса webp или др
flsFunction.isWebp();
flsFunction.menuInit();
flsFunction.spollers();
flsFunction.popup();
flsFunction.spollers_footer();
flsFunction.choiseAbout();
flsFunction.choiseProductt();
flsFunction.choise3();
flsFunction.choise4();


//Подключение разного функционала(под требования макета)
import "./dynamic-adaptive.js";
import "./tippy.js";
import "./spoller-about-filter.js";
// import "./sliders.js"; @TODO ошибка не давала пройти дальше по скрипту
import "./slick-slider-product-list.js";
import "./rating.js";
import "./script.js";
import "./slick-slider.js";
import "./form-valid.js";
import "./range.js";
import "./quantity.js";
import "./sliders.js";
import "./tabs.js";