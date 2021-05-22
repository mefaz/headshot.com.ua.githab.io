document.addEventListener("DOMContentLoaded", function() {

	$(".calc-box-form .right .form-control-select").on( "click", function(item) {
		$(".calc-box-form .right .select").css({'display' : 'block'});
	});

	$(".calc-box-form .right .select li").on( "click", function(item) {
		var iText = $(this).text();
		$(".calc-box-form .right .form-control-select").text(iText);
		$(".calc-box-form .right .select-taipe").val(iText);
		$(".calc-box-form .right .select").css({'display' : 'none'});
	});

	$(".calc-box-form .right .tip-upr-click").on( "click", function(item) {
		var aText = $(this).text();
		$(".calc-box-form .right .select-upr").val(aText);
		if ($(this).hasClass('activ')){
		}else{
			$(this).parents().find('.tip-upr-click').removeClass('activ');
			$(this).addClass('activ');
		}
	});

	$('.item-masonry').hover(
		function(){
			$(this).find(".color").css({'opacity' : '1'});
		},
		function(){
			$(this).find(".color").css({'opacity' : '0'});
		}
		);

var sizer = '.sizer4';
var container = $('.grid');

$('.grid').imagesLoaded( function() {
  var msnry = new Masonry( '.grid', {
	  columnWidth: sizer,
	  itemSelector: '.item-masonry',
		percentPosition: true
	});
});

	$('.carusel').owlCarousel({
		loop:true,
		//margin:10,
		nav: false,
		dots: true,
		items:1,responsive : {
			0 : {
				items:1,mouseDrag:false,touchDrag:false
			},
			768 : {
				items:1,mouseDrag:true,touchDrag:true
			}
		}
	});
	
	$('.raboti-carusel').owlCarousel({
		loop:true,
		//margin:10,
		nav: false,
		dots: true,
		items:1,responsive : {
			0 : {
				items:1,mouseDrag:false,touchDrag:false
			},
			768 : {
				items:1,mouseDrag:true,touchDrag:true
			}
		}
	});

	$('.govorat-carysel').owlCarousel({
		loop:true,
		//margin:10,
		nav: false,
		dots: true,
		items:1,responsive : {
			0 : {
				items:1,mouseDrag:false,touchDrag:false
			},
			768 : {
				items:1,mouseDrag:true,touchDrag:true
			}
		}
	});

	$(".panel-img .item").on( "click", function(item) {
		var namePanel = $(this).attr('name-panel');
		var colorImgItem = $(this).parents('.right').find('.color-img').find('.activ').attr('color-img-item');
		if ($(this).hasClass('activ')){ }else{
			$(this).parents('.right').find('.panel-img').find(".item").removeClass('activ');
			$(this).addClass('activ');
			$(this).parents('.right').find(".name-panel span").text(namePanel);
			var bigImg = $(this).attr(colorImgItem);
			$(this).parents('.right').find(".big-img img").attr("src", bigImg);
		}
	});

	$(".color-img .item").on( "click", function(item) {
		var colorName = $(this).attr('color-name');
		var colorImgItem = $(this).attr('color-img-item');
		if ($(this).hasClass('activ')){ }else{
			$(this).parents('.right').find('.color-img').find(".item").removeClass('activ');
			$(this).addClass('activ');
			$(this).parents('.right').find(".color-name span").text(colorName);
			var bigImg = $(this).parents('.right').find('.panel-img').find(".activ").attr(colorImgItem);
			$(this).parents('.right').find(".big-img img").attr("src", bigImg);
		}
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
