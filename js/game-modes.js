(function ($) {
  "use strict";

  $(".game-gallery-active").slick({
    centerMode: true,
    centerPadding: "350px",
    slidesToShow: 1,
    prevArrow:
      '<span class="slick-prev"><i class="fas fa-caret-left"></i> previous</span>',
    nextArrow:
      '<span class="slick-next">Next <i class="fas fa-caret-right"></i></span>',
    appendArrows: ".slider-nav",
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "220px",
          infinite: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "180px",
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "160px",
          arrows: true,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
          arrows: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
          arrows: true,
        },
      },
    ],
  });

  
})(jQuery);
