"use strict"

const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    initRatings();
}

//Основная функция
function initRatings() {
    let ratingActive, ratingValue;
    //Прохожу по всем рейтингам на странице
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRatings(rating);
    }

    //Инициализирую конкретный рейтинг
    function initRatings(rating) {
        initRatingsVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }

    //Инициализирую переменные
    function initRatingsVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }
    //Изменяю ширину активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    // Добавляю возможность указать оценку
    function setRating(rating) {        
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener("mouseenter", function (e) {
                //Обновление переменных
                initRatingsVars(rating);
                //Обновление активных звезд
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener("mouseleave", function (e) {
                //Обновление активных звезд
                setRatingActiveWidth();
            });
            ratingItem.addEventListener("click", function (e) {
                //Снова обновляем переменные(например при работе на touch screnn не будет работать собитие mouse......)
                initRatingsVars(rating);
                
                if (rating.dataset.ajax) {
                    // "Отправить" на сервер 
                setRatingValue(ratingItem.value, rating);
            } else {
                    //Отобразить указанную оценку
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth();
                }
            });
        }
    }
                            // Отправка данных AJAX
    
    async function setRatingValue(value, rating) {
        if (!rating.classList.contains('rating_sending')) {
            rating.classList.add('rating_sending');

            //Отрправка данных (value) на сервер
            let response = await fetch ('http://127.0.0.1:8080/rating.json', {
                method: 'GET',


                // //Отрпавка на сервер(если есть)
                // body: JSON.stringify({
                //     userRating: value
                // }),
                // headers: {
                //     'content-type': 'application/json'
                // }
                
            });
            if (response.ok) {
                const result = await response.json();

                //Получаем новый рейтинг
                const newRating = result.newRating;
                
                //Вывожу новый средний результат
                ratingValue.innerHTML = newRating;

                //Обновляю активные звезды
                setRatingActiveWidth();
                //После того,как все сработало ,удаляю класс rating_sending
                rating.classList.remove('rating_sending');
            }
            else {
                alert("Ошибка");

                rating.classList.remove('rating_sending');
            }
        }
    }
}

