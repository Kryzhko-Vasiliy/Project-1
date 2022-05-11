// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
    //Проверка поддержки webp
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}
//===========================Модуль работы с меню(бургер)====================================================================
export function menuInit() {
    document.querySelector(".icon-menu")?.addEventListener("click", function (e) {
        document.documentElement.classList.toggle("menu-open");
        
        if (document.documentElement.classList.contains('catalog-open')) {
            document.documentElement.classList.remove('catalog-open');
        }
        if (document.documentElement.classList.contains('sub-menu-open')) {
            document.documentElement.classList.remove('sub-menu-open');
        }
    });
}

//=============================================================Spollers=================================================
export function spollers() {
    $(document).ready(function () {
        $('.phones-header__arrow').click(function (event) {
            $(this).toggleClass('active').next().slideToggle(300);
        });
    });
}






//---------------------------------popup-for callback--------------------------------------------------------------------
export function popup() {

    const popupLinks = document.querySelectorAll('.popup-link');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll(".lock-padding");

    let unlock = true;
    const timeout = 800;

    popupLinks.forEach(popupLink => {
        popupLink.addEventListener("click", function (event) {
            event.preventDefault();
            const callback = event.target.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(callback);
            popupOpen(curentPopup);
        });
    });

    const popupCloseIcon = document.querySelectorAll('.close-popup');
  
    popupCloseIcon.forEach(element => {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            popupClose(event.target.closest('.popup'));
        });
    });

    function popupOpen(curentPopup) {
        if (curentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
  
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }

            curentPopup.classList.add('open');

            console.log(curentPopup);

            curentPopup.addEventListener("click", function (e) {
                if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }

    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');
            if (doUnlock) {
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }
} 


export function spollers_footer() {
    $('.spoller-item-footer__title').click(function (event) {
        if($(window).width() <= 993) {        
            if ($('.spoller-item-footer__item').hasClass('one')) {
                $('.spoller-item-footer__title').not($(this)).removeClass('active');
                $('.spoller-item-footer__body').not($(this).next()).slideUp(500);
            }
            $(this).toggleClass('active').next().slideToggle(200);
        }
    });           

    $(window).resize(function (event) { 
        if ($(event.target).width() > 993) {
            $('.spoller-item-footer__body').show();
        } else {
            $('.spoller-item-footer__body').hide();
        }
    });
}


//-----------------------------choise-About-----------------------------------------------
export function choiseAbout() {
    const defaultSelect = () => {
    const element = document.querySelector('.form');
    const choices = new Choices(element, {
        searchChoices: false,
        searchEnabled: false,
        itemSelectText: 'Выбрать',
        noChoices: 'has-no-choices',
    });
    };
     defaultSelect();
}


export function choiseProductt() {
    const Select = () => {
    const element = document.querySelector('.formTwo');
    const choicesProd = new Choices(element, {
        searchChoices: false,
        searchEnabled: false,
        itemSelectText: 'Выбрать',
        noChoices: 'has-no-choices',
    });
    };
    Select();
}


export function choise3() {
    const Select3 = () => {
    const element = document.querySelector('.form3');
    const choicesProd = new Choices(element, {
        searchChoices: false,
        searchEnabled: false,
        itemSelectText: 'Выбрать',
        noChoices: 'has-no-choices',
    });
    };
    Select3();
}


export function choise4() {
    const Select4 = () => {
    const element = document.querySelector('.form4');
    const choicesProd = new Choices(element, {
        searchChoices: false,
        searchEnabled: false,
        itemSelectText: 'Выбрать',
        noChoices: 'has-no-choices',
    });
    };
    Select4();
}



