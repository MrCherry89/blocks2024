$(document).ready(function () {
  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  $(".popup").magnificPopup({
    type: "inline",
    callbacks: {
      open: function () {
        $("body").addClass("no-scroll");
      },
      close: function () {
        $("body").removeClass("no-scroll");
      },
    },
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-999-9",
  });

  $(".top-buttons button").on("click", function () {
    $(".top-buttons button").removeClass("active");
    $(this).addClass("active");
  });

  $(".cleaning-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    dots: false,
    prevArrow: $(".cleaning-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".cleaning-slider-wrap .slider-navigation .slick-next"),
  });

  function initializeSlider() {
    if ($(window).width() < 768) {
      if (!$(".collections-slider").hasClass("slick-initialized")) {
        $(".collections-slider").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                variableWidth: true,
              },
            },
          ],
        });
      }
    } else {
      if ($(".collections-slider").hasClass("slick-initialized")) {
        $(".collections-slider").slick("unslick");
      }
    }
  }

  // Инициализация слайдера при загрузке страницы
  initializeSlider();

  // Пересоздание слайдера при изменении размера окна
  $(window).resize(function () {
    initializeSlider();
  });
});
