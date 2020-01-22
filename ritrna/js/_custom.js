document.addEventListener("DOMContentLoaded", function() {

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav: false,
		items:1
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
