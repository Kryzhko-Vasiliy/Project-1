$(document).ready(function () {
    $('.slider-product-card').slick({
        arrows: false,
        dots: true,
        Infinity: true,
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        slidesToShow: 4,
        asNavFor: ".slider-big",
         responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3
      }
      },
       {
      breakpoint: 550,
      settings: {
        slidesToShow: 2
      }
      },
        {
      breakpoint: 300,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    });
    $('.slider-big').slick({
          arrows: false,
        dots: false,
        Infinity: true,
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        slidesToShow: 1,
        fade: true,
        asNavFor: ".slider-product-card",
        slidesToScroll: 2,
    });
});