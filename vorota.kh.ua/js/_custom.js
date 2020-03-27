document.addEventListener("DOMContentLoaded", function() {

	$('.owl-carousel-banner').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		items:1,
		dots: false,
		nav: false
	});
	$('.owl-carousel-prise').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:3,
		nav: false
	});
	$('.owl-carousel-otziv').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:2,
		nav:false
	});
	$('.owl-carousel-galeri').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		items:3,
		nav:false
	});
	$('.ovelnavbox .right').click(function() {
		$('.owl-carousel-banner').trigger('next.owl.carousel');
	});
	$('.ovelnavbox .left').click(function() {
		$('.owl-carousel-banner').trigger('prev.owl.carousel');
	});

	$('.box-3 .item .action-ferst').click(function(item) {
		item.preventDefault();
		$(this).parents('.item').addClass('clic');
	});
	$('.box-3 .item .action-two').click(function(item) {
		item.preventDefault();
		$(this).parents('.item').removeClass('clic');
	});

	$('.box-10 .box a').click(function(item) {
		item.preventDefault();
		$('.box-10 .box').removeClass('activ');
		$(this).parents('.box').addClass('activ');
	});


});
