$(function() {

// прижимание футера
 		var f = function() {
  	$(".section").height('initial');
    var h1 = $("body").height();
    var h2 = $(window).height();
    var h3 = $("footer").height();
    var h4 = $("header").height();
    if (h1 < h2){
    	var d = h2 - h3 - h4;
    	$(".section").height(d);
    	}
  	};
  	$(window).resize(f);
 		f();
//--
// Пример галереи на magnificPopup
$('.parent-container-mg').magnificPopup({
	image: {
		cursor: 'mfp-zoom-out-cur bodu-container-mgp', // прописываем класс для боди для стилизации отдельной галереи
	},
	delegate: 'a',
	type: 'image',
	gallery:{
				enabled:true,
		    preload: [0,2], // read about this option in next Lazy-loading section
		    navigateByImgClick: true,
  			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
  			tPrev: 'Previous (Left arrow key)', // title for left button
 				tNext: 'Next (Right arrow key)', // title for right button
  			tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
	},
	removalDelay: 300,
  mainClass: 'mfp-fade'
});
//**
// Пример всплывающего окна на magnificPopup
$('.open-popup-link').magnificPopup({
  type:'inline'
});
//**



});

// паралакс эфект для обьектов
$(window).scroll(function() {

	var st = $(this).scrollTop() /10;

	$(".object").css({
		"transform" : "translate3d(0px, " + st  + "%, .01px)",
		"-webkit-transform" : "translate3d(0px, " + st  + "%, .01px)"
	});

});
//--