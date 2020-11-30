document.addEventListener("DOMContentLoaded", function() {

$('.owl-carousel-def').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.owl-carousel-chag').owlCarousel({
    loop:false,
    margin:10,
    nav: false,
    dots: false,
    touchDrag: false,
    responsive:{
        0:{
            items:1
        },
    }
})

$('.owl-carousel-chag .chag').click(function(event) {
  event.preventDefault();
	$('.owl-carousel-chag').trigger('next.owl.carousel');
});
$('.owl-carousel-chag .chag.chag_last').click(function(event) {
  event.preventDefault();
	$('.owl-carousel-chag').trigger('to.owl.carousel', [1]);
});

	$('.gallerymagnificPopup').each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			}
		});
	});

});
