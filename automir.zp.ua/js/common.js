$(function() {

$('.owl-carousel-banner').owlCarousel({
    loop:true,
    margin:10,
    nav:0,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    onInitialized: carouselInitialized,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

function carouselInitialized(event){
   var prev = $('.owl-carousel .owl-item.active').prev().find(".item").css("background-image");
   var next = $('.owl-carousel .owl-item.active').next().find(".item").css("background-image");
		console.log(prev);
		console.log(next);
		$('<style>.customNextBtn:before{background-image: '+next+'}</style>').appendTo('head');
		$('<style>.customNextPrevBtn:before{background-image: '+prev+'}</style>').appendTo('head');
}
$('.owl-carousel-banner').on('changed.owl.carousel', function(event) {
   var prev = $('.owl-carousel .owl-item.active').prev().find(".item").css("background-image");
   var next = $('.owl-carousel .owl-item.active').next().find(".item").css("background-image");
		console.log(prev);
		console.log(next);
		$('<style>.customNextBtn:before{background-image: '+next+'}</style>').appendTo('head');
		$('<style>.customNextPrevBtn:before{background-image: '+prev+'}</style>').appendTo('head');
})

$('.owl-carousel-banner').owlCarousel({
    onChange: callback
});
function callback(event) {
    var element   = event.target;
    console.log(element);
}


$('.customNextBtn').click(function() {
    $('.owl-carousel-banner').trigger('next.owl.carousel');
})
$('.customPrevBtn').click(function() {
    $('.owl-carousel-banner').trigger('prev.owl.carousel', [300]);
})


$('.owl-action').on('refreshed.owl.carousel', function(event) {
    console.log('123');
})

	/*$(window).on("load",function(){
		$(".mCustomScrollbarCol").mCustomScrollbar();
	});

	$(window).on("load",function(){
		$(".mCustomScrollbarCol1").mCustomScrollbar();
	});*/


	$('.owl-action').owlCarousel({
		/*loop:true,*/
		nav:true,
		items:1,
		/*autoplay: true,*/
    autoplayTimeout: 5000,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    dots: false,
		margin: 10
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

$("#menu").mmenu({
		extensions 	: [ "position-bottom", "fullscreen", "theme-dark", "listview-50", "fx-panels-slide-up", "fx-listitems-drop", "border-offset" ],
		navbar 		: {title: '<p>Меню</p>'},
		navbars		: [{content : ['<a href="#page" class="logo text-center">АвтоМир</a>','close']}, {content : ["prev","title"]} ],
		});

function windowSize(){
    if ($(window).width() <= '767'){
        console.log($(window).width());
        console.log($(window).height());
        $('.footer').append( $('.row-footer') );
    } else {

    }
}

$(window).on('load resize',windowSize);

});