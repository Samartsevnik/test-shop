$(document).ready(function () {

  $('.carousel__items').slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ],
    prevArrow: '<button type="button" class="slick-prev"><img src="./icons/back.svg" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./icons/next.svg" alt=""/></button>'
  });

  $('.collection-slider').slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'

  })

  $('.main-slider__items').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,

  })

  $('.nav_toggler').on( 'click' , function () {
    $('.header').toggleClass('nav_open')
  })

  $('.nav_backdrop').on( 'click' , function () {
    $('.header').removeClass('nav_open')
  })
});
