$(function() {
var wow = new WOW(
  {
    boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
    animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
    offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
    mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
    live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
    callback:     function(box) {
    	var attr = box.id;
    	if (attr = "countTo") {
				$('.animated .timer').countTo();
    	}
      // функция срабатывает каждый раз при старте анимации
      // аргумент box — элемент, для которого была запущена анимация
    },
    scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
  }
);
wow.init();

$('.owl-carousel-otziv').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        550:{
            items:2
        },
        768:{
            items:3,
   autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
        },
        1200:{
            items:4,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
        }
    }
});

});
