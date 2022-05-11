import Swiper from "swiper";

// //Инициализирую Swiper
const swiper = new Swiper('.swiper', {
    //Бесконечный слайдер
  loop: true,
  speed: 1400,
  
  //Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   //Навигация
    //Буллеты, текущее положение, прогрессбар
  pagination: {
        el: '.swiper-pagination',

//         //Буллеты
        type: 'bullets',
        clickable: true,
        //Динамические буллеты
        dynamicBullets: true,
        //Кастомные буллеты
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
//         */
      // type: 'fraction',             //Использование фракции в слайдах(1/5 или 1/7 и тд до 1/n...)
      // //Кастомный вывод фракций
      // renderFraction: function (currentClass, totalClass) {
      //     return 'Фото <span class="' + currentClass + '"></span' +
      //         ' из ' +
      //         '<span class="' + totalClass + '"></span>';
      // },
      
      //Прогрессбар
    // type: 'progressbar',
      //Скролл
      scrollbar: {
          el: '.swiper-scrollbar',
          //Возможность перетаскивать скролл
          draggable: true,
      },
    },
   //Включение/отключение , перетаскивение свайпа на ПК
      simulateTouch: true,
      //Чувствительсность свайпа
      touchRatio: 3,               //Значение 0 отключить свайп( и перетаскивание мыщью) от 1 до n увеличивает чувствительность
      //Угол срабатывания свайпа/перетаскивания
      touchAngle: 45,
      //Курсор перетаскивания
      grabCursor:true,

      //Переключение при клике на слайда

  slideToClickedSlide: true,
      
  //Навигация по хешу
  hashNavigation: {
    //Отслеживать состояние
    watchState: true,
  },

  //Упраление клавиатурой
  keyboard: {
    //ВКЛ/ВЫКЛ
    enable: true,
    //ВКЛ/ВЫКЛ
    //только когда слайдер в пределах вьюпорта
    onlyInViewport: true,
    //ВКЛ/ВЫКЛ
    //управление клавишами pageUD и pageDown
    pageUpDown: true,
  },

  //Управление колесом мищи
  // mousewheel: {
    //Чувствительность мыщи
    // sensitivity: 1,
    //Класс обьекта на котором, будет срабатывать прокрутка мышью
    // eventsTarget: ".swiper-slide"       //можно закоментировать если много слайдов с таким классом
  // },

  //Автовысота
//   autoHeight: true,

  //Количество слайдов для показа
  slidesPerView:'auto' ,  //можно укатать 2 или 3.5 'auto' и тд.........

  //Отступ между слайдами
  // spaceBetween: 0,

  //Стратовый слайд
  // initialSlide: 1,

  //Мультирядность
  // slidesPerColumn: 2,

  //Автопрокрутка
  autoplay: {
    //Пауза между прокруткой
    delay: 4000,
    //Закончить на последнем слайде
    stopOnLastSlide:true,
    //Отключить после ручного переключения
    disableOnInteraction: false
  },

  //Вертикальный слайдер
  // direction: 'vertical',

  //Эффекты переключения слайдов
//   effect: 'cube',  //можно 'flip'
  // effect: 'flip',
//   cubeEffect: {
//     slideShadows: true,
//     shadow: true,
//     shadowOffset: 30,
//     shadowScale: 0.84
//   },

  // flipEffect: {
  //   //тень
  //   slideShadows: true,
  //   //показа только активного слайда
  //   limitRotation: true
  // },
  
});


//Многие другие настройки можно посмотреть http/swiper.js.com


//Автопрокрутка--можно ипользовать автопрокрутку(выше-autoplay) от swiper.com
// const sliderBlock = document.querySelector('.swiper-wrapper');


// sliderBlock.addEventListener("mouseenter", function (e) {
//   swiper.params.autoplay.disableOnInteraction = false;
//   swiper.params.autoplay.delay = 1500;
//   swiper.autoplay.start();
// });
// sliderBlock.addEventListener("mouseleave", function (e) {
//   swiper.autoplay.stop();
// });