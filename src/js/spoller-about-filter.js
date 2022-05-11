
    $(document).ready(function () {
        $('.filter-catalog__title, .price-filter__title, .item-filter-catalog__title').click(function (event) {
            if ($('.catalog__filter').hasClass('one-filter')) {
                $('.price-filter__title').not($(this)).removeClass('active');
                $('.price-filter__body').not($(this).next()).slideUp(500);
            }
            $(this).toggleClass('active').next().slideToggle(300);
        });
    });
