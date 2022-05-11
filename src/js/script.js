//=====================================Burger======================================================
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        if (menuBody.classList.contains('_active')) {
            Array.from(document.querySelectorAll('[data-hidden-submenu]')).map(function (element) {
                document.documentElement.classList.remove('sub-menu-open');
                element.classList.remove('_sub-menu-active');
                document.querySelector(`[data-submenu="${element.dataset.hiddenSubmenu}"]`).classList.remove('_sub-menu-open');
            });
        }
        
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        
   
    });

    //=================Удаление при нажатии(откритии) класса
    if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock')
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
}


//==================================вЫПАДАЮЩИЙ КАТАЛОГ==================================================================================================
document.addEventListener("click", documentActions);

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
if (menuBlocks.length) {
    menuBlocks.forEach(menuBlocks => {
        const menuBlocksItems = menuBlocks.querySelectorAll('.sub-menu-catalog__category').length;
        menuBlocks.classList.add(`sub-menu-catalog__block_${menuBlocksItems}`);
    });
}

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
        if (subMenu) {
            const activeLink = document.querySelector('._sub-menu-active');
            const activeBlock = document.querySelector('._sub-menu-open');
            
            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('_sub-menu-active');
                activeBlock.classList.remove('_sub-menu-open');
                document.documentElement.classList.remove('sub-menu-open');
            }
            document.documentElement.classList.toggle('sub-menu-open');
            targetElement.classList.toggle('_sub-menu-active');
            subMenu.classList.toggle('_sub-menu-open');
        }
        else {
            console.log('subMenu not found :(');
        }
        e.preventDefault();
    }

    //Открываю выпадающий список(каталог) в Бургер меню -Категории  
    //!!!(Основной модуль бургер меня(так же осуществялет закрытие), находиться в function.js)!!!
    
    if (targetElement.closest('.menu-top-header__link_catalog')) {
        e.preventDefault();
        document.documentElement.classList.add('catalog-open');
    }
    if (targetElement.closest('.menu-catalog__back')) {
        document.documentElement.classList.remove('catalog-open');
        //Проверяю наличие блока по наличию, и только потом убирать у блока класс
        document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('._sub-menu-active') : null;
        document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('._sub-menu-open') : null;
        e.preventDefault();
    }
    if (targetElement.closest('.sub-menu-catalog__back')) {
        let hiddenSubmenu = e.target.dataset.hiddenSubmenu;

        document.documentElement.classList.remove('sub-menu-open');
        targetElement.classList.remove('_sub-menu-active');

        document.querySelector(`[data-submenu="${hiddenSubmenu}"]`).classList.remove('_sub-menu-open');

        e.preventDefault();
    }
}
