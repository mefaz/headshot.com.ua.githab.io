$(function() {

$('.owl-carousel-banner').owlCarousel({
    loop:true,
    margin:10,
    nav:0,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
        0:{
            items:1,
            touchDrag:0,
            mouseDrag:0
        },
        600:{
            items:1,
            touchDrag:0,
            mouseDrag:0
        },
        1000:{
            items:1,
            touchDrag:1,
            mouseDrag:1
        }
    }
})

$('.owl-carousel-ovrace').owlCarousel({
    loop:true,
    margin:10,
    nav:0,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
        0:{
            items:1,
            touchDrag:0,
            mouseDrag:0
        },
        600:{
            items:1,
            touchDrag:0,
            mouseDrag:0
        },
        1000:{
            items:1,
            touchDrag:1,
            mouseDrag:1
        }
    }
})



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



});