//Код взял с https://github.com/FreelancerLifeStyle/dynamic_adapt


// let originalPositions = [];
// let daElements = document.querySelectorAll('[data-da]');
// let daElementsArray = [];
// let daMatchMedia = [];
// //Заполняем массивы
// if (daElements.length > 0) {
// 	let number = 0;
// 	for (let index = 0; index < daElements.length; index++) {
// 		const daElement = daElements[index];
// 		const daMove = daElement.getAttribute('data-da');
// 		if (daMove != '') {
// 			const daArray = daMove.split(',');
// 			const daPlace = daArray[1] ? daArray[1].trim() : 'last';
// 			const daBreakpoint = daArray[2] ? daArray[2].trim() : '991.98';
// 			const daDestination = document.querySelector('.' + daArray[0].trim())
// 			if (daArray.length > 0 && daDestination) {
// 				daElement.setAttribute('data-da-index', number);
// 				//Заполняем массив первоначальных позиций
// 				originalPositions[number] = {
// 					"parent": daElement.parentNode,
// 					"index": indexInParent(daElement)
// 				};
// 				//Заполняем массив элементов 
// 				daElementsArray[number] = {
// 					"element": daElement,
// 					"destination": document.querySelector('.' + daArray[0].trim()),
// 					"place": daPlace,
// 					"breakpoint": daBreakpoint
// 				}
// 				number++;
// 			}
// 		}
// 	}
// 	dynamicAdaptSort(daElementsArray);

// 	//Создаем события в точке брейкпоинта
// 	for (let index = 0; index < daElementsArray.length; index++) {
// 		const el = daElementsArray[index];
// 		const daBreakpoint = el.breakpoint;
// 		const daType = "min"; //Для MobileFirst поменять на min

// 		daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
// 		daMatchMedia[index].addListener(dynamicAdapt);
// 	}
// }

// //Основная функция
// function dynamicAdapt(e) {
// 	for (let index = 0; index < daElementsArray.length; index++) {
// 		const el = daElementsArray[index];
// 		const daElement = el.element;
// 		const daDestination = el.destination;
// 		const daPlace = el.place;
// 		const daBreakpoint = el.breakpoint;
// 		const daClassname = "_dynamic_adapt_" + daBreakpoint;

// 		if (daMatchMedia[index].matches) {
// 			//Перебрасываем элементы
// 			if (!daElement.classList.contains(daClassname)) {
// 				let actualIndex = indexOfElements(daDestination)[daPlace];
// 				if (daPlace === 'first') {
// 					actualIndex = indexOfElements(daDestination)[0];
// 				} else if (daPlace === 'last') {
// 					actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
// 				}
// 				daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
// 				daElement.classList.add(daClassname);
// 			}
// 		} else {
// 			//Возвращаем на место
// 			if (daElement.classList.contains(daClassname)) {
// 				dynamicAdaptBack(daElement);
// 				daElement.classList.remove(daClassname);
// 			}
// 		}
// 	}
// 	customAdapt();
// }

// //Функция возврата на место
// function dynamicAdaptBack(el) {
// 	const daIndex = el.getAttribute('data-da-index');
// 	const originalPlace = originalPositions[daIndex];
// 	const parentPlace = originalPlace['parent'];
// 	const indexPlace = originalPlace['index'];
// 	const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
// 	parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
// }


// //Сортировка объекта
// 	function dynamicAdaptSort(arr) {
// 		arr.sort(function (a, b) {
// 			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 } //Для MobileFirst поменять
// 		});
// 		arr.sort(function (a, b) {
// 			if (a.place > b.place) { return 1 } else { return -1 }
// 		});
// }
    

// //Функция получения массива индексов элементов внутри родителя 
// function indexOfElements(parent, back) {
// 	const children = parent.children;
// 	const childrenArray = [];
// 	for (let i = 0; i < children.length; i++) {
// 		const childrenElement = children[i];
// 		if (back) {
// 			childrenArray.push(i);
// 		}
// 		else {
// 			//Исключая перенесенный элемент
// 			if (childrenElement.getAttribute('data-da') == null) {
// 				childrenArray.push(i);
// 			}
// 		}
// 	}
// 	return childrenArray;
// }


//Объявляю переменные
const parent_original = document.querySelector('.menu-top-header');
const parent = document.querySelector('.menu__body');
const item = document.querySelector('.menu-top-header__list');


//Смотрю изменение размера экрана
window.addEventListener('resize', move);


//Функция
function move() {
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 992) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[2]);
			item.classList.add('done');
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item, parent_original.children[2]);
			item.classList.remove('done');
		}
	}
}

//Вызываю функцию
move();

//=============================================================2=========================================================================================================

//Объявляю переменные
const parentA = document.querySelector('.actions-header');
const parentB = document.querySelector('.top-header__container');
const itemElement = document.querySelector('.actions-header__phones');


//Смотрю изменение размера экрана
window.addEventListener('resize', movePhone);
//Функция
function movePhone() {
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 992) {
		if (!itemElement.classList.contains('done')) {
			parentB.insertBefore(itemElement, parentB.children[1]);
			itemElement.classList.add('done');
		}
	} else {
		if (itemElement.classList.contains('done')) {
			parentA.insertBefore(itemElement, parentA.children[1]);
			itemElement.classList.remove('done');
		}
	}
}

//Вызываю функцию
movePhone();
//==========================================================3==============================================================================

//Объявляю переменные
const parent3 = document.querySelector('.actions-header');
const parent4 = document.querySelector('.top-header__container');
const itemElement2 = document.querySelector('.actions-header__favorite');


//Смотрю изменение размера экрана
window.addEventListener('resize',Favorite);


//Функция
function Favorite() {
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 992) {
		if (!itemElement2.classList.contains('done')) {
			parent4.insertBefore(itemElement2,parent4.children[4]);
			itemElement2.classList.add('done');
		}
	}
	else {
		
			if (!itemElement.classList.contains('done')) {
				parent3.insertBefore(itemElement2,parent3.children[4]);
				itemElement2.classList.remove('done');
			}
		}
}

//Вызываю функцию
Favorite();

//==========================================================4==============================================================================


//Объявляю переменные
const CartBoss = document.querySelector('.actions-header');
const Copy = document.querySelector('.top-header__container');
const ElementChildren= document.querySelector('.actions-header__cart');


//Смотрю изменение размера экрана
window.addEventListener('resize',Cart);


//Функция
function Cart() {
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 992) {
		if (!ElementChildren.classList.contains('done')) {
			Copy.insertBefore(ElementChildren,Copy.children[5]);
			ElementChildren.classList.add('done');
		}
	} else {
		if (ElementChildren.classList.contains('done')) {
			CartBoss.insertBefore(ElementChildren, CartBoss.children[5]);
			ElementChildren.classList.remove('done');
		}
	}
}

//Вызываю функцию
Cart();


//==========================================================4==============================================================================


//Объявляю переменные
const searchOrigonal = document.querySelector('.body-header__container');
const searchCopy = document.querySelector('.header__catalog');
const searchChildren= document.querySelector('.search-header');


//Смотрю изменение размера экрана
window.addEventListener('resize',Search);


//Функция
function Search() {
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 480) {
		if (!searchChildren.classList.contains('done')) {
			searchCopy.insertBefore(searchChildren,searchCopy.children[1]);
			searchChildren.classList.add('done');
		}
	} else {
		if (searchChildren.classList.contains('done')) {
			searchOrigonal.insertBefore(searchChildren, searchOrigonal.children[1]);
			searchChildren.classList.remove('done');
		}
	}
}

//Вызываю функцию
Search();

















	/*код Серёги( нужно использовать 
		<!-- data-component="dynamic"
                    data-parent="menu__body"
                    data-width="991.98"> -->

		И для чего применить использовать 	[data-key="${parent}"]


		!Минус в том, что слитают стили,нужно создавать ДОП модификатор для элемента,и к нему обращаться по новой в css, а так, все работает
	
	
	)
	*/
	// const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	// document.querySelectorAll('[data-component="dynamic"]').forEach(function (element) {
	// 	const {
	// 		parent,
	// 		width
	// 	} = element.dataset;
	// 	const parentElement = document.querySelector(`[data-key="${parent}"]`);

	// 	if (viewport_width <= +width) {
	// 		if (!parentElement.classList.contains('done')) {
	// 			parentElement.classList.add('done');

	// 			Array.from(element.children).forEach(function (children) {
	// 				parentElement.appendChild(children);
	// 			});
	// 		}
	// 	} else {
	// 		if (parentElement.classList.contains('done')) {
	// 			parentElement.classList.remove('done');
				
	// 			Array.from(parentElement.children).forEach(function (children) {
	// 				element.appendChild(children);
	// 			});
	// 		}
	// 	}
	// });