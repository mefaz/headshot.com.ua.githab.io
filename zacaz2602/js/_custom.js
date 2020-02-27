document.addEventListener("DOMContentLoaded", function() {

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:3,
    nav:false,
    items:3,
    center:true
})
var innerWidthActiv = $('.box-2 .owl-carousel .owl-item.center .item').innerWidth(),
		innerWidth = $('.box-2 .owl-carousel .owl-item .item').innerWidth();
		$('.box-2 .owl-carousel .owl-item .item').innerHeight(innerWidth - 25);
		$('.box-2 .owl-carousel .owl-item.center .item').innerHeight(innerWidthActiv);
		$('.owl-carousel').innerHeight(innerWidthActiv);

		$('.box-2 .owl-carousel .item .box-img img').innerWidth(innerWidth / 3);

$('.owl-carousel').on('drag.owl.carousel', function(event) {
		var innerWidthActiv = $('.box-2 .owl-carousel .owl-item.center .item').innerWidth(),
				innerWidth = $('.box-2 .owl-carousel .owl-item .item').innerWidth();
		console.log(innerWidthActiv);
		console.log(innerWidth);
		$('.box-2 .owl-carousel .owl-item .item').innerHeight(innerWidth-25);
		$('.box-2 .owl-carousel .owl-item.active.center .item').innerHeight(innerWidth);
})

$('.owl-carousel').on('translated.owl.carousel', function(event) {
		var innerWidthActiv = $('.box-2 .owl-carousel .owl-item.center .item').innerWidth(),
				innerWidth = $('.box-2 .owl-carousel .owl-item .item').innerWidth();
		console.log(innerWidthActiv);
		console.log(innerWidth);
		$('.box-2 .owl-carousel .owl-item .item').innerHeight(innerWidth-25);
		$('.box-2 .owl-carousel .owl-item.active.center .item').innerHeight(innerWidth);
})

var itemWidthActiv = $('.box-2 .box-item .item').innerWidth();
		$('.box-2 .box-item .item').innerHeight(itemWidthActiv);
		$('.box-2 .box-item .item .box-img').innerWidth(itemWidthActiv - 50);

var itemWidthActivs = $('.box-2 .left .box').innerWidth();
		$('.box-2 .left .box .box-img').innerWidth(itemWidthActivs);
		$('.box-2 .left .box .box-img img').innerWidth(itemWidthActivs - 70);



});
