import $ from "jquery";
import "slick-slider";

$('.slider').slick(
  {
      arrows:false,
    dots: true,
    slidesToShow: 4,
  autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1340,
      settings: {
        slidesToShow: 3
      }
      },
       {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2
      }
      },
        {
      breakpoint: 620,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  }
  
);



$('.new-slick-slider').slick(
  {
      arrows:false,
    dots: true,
    slidesToShow: 3,
  autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    useCSS:true,
    responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      }
      },
       {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1
      }
      },
        {
      breakpoint: 710,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  }
  
);

$('.sale-slick-slider').slick(
  {
      arrows:false,
    dots: true,
    slidesToShow: 4,
  autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 2,
    useCSS:true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
      },
       {
      breakpoint: 965,
      settings: {
        slidesToShow: 2
      }
      },
        {
      breakpoint: 620,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  }
  
);

$('.sale__body').slick(
  {
      arrows:false,
    dots: true,
    slidesToShow: 1,
  autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
    rows: 3,
     responsive: [
       {
      breakpoint: 965,
      settings: {
        rows: 2,
      }
      },
        {
      breakpoint: 640,
      settings: {
        rows:1,
      }
    }
  ]
  }
  
);


