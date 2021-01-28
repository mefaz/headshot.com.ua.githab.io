import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)
require('~/app/libs/owl-carousel/owl-carousel.js') // owl-carousel
require('~/app/libs/magnific-popup/magnific-popup.js') // magnific-popup
require('~/app/libs/jquery.inputmask.js') // jquery.inputmask
require('~/app/libs/jquery.inputmask-multi.js') // jquery.inputmask

document.addEventListener('DOMContentLoaded', () => {
	
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

	var Carusels = [];
	$('.caruselDefoltOneslid').each(function (index, elem) {
	    Carusels.push($(elem).owlCarousel({ 
	    	loop:true,
				margin:10,
				nav: false,
				items:1
	    }));     
	});
	
	var CaruselsDor = [];
	$('.caruselDefoltDor').each(function (index, elem) {
		CaruselsDor.push($(elem).owlCarousel({ 
			loop:false, 
			margin:10, 
			lazyLoad:true, 
			merge:true,
			autoplay:true,
			autoplayHoverPause:true,
			autoplayTimeout:3000, 
			center:true, 
			nav:false, 
			items:1, 
			responsive:{  
				0:{merge:false,items:1,margin:0},
				600:{items:2}
			}
		}));
	});

	var CaruselsDorRucki = [];
	$('.caruselDefoltDorRucki').each(function (index, elem) {
		CaruselsDorRucki.push($(elem).owlCarousel({ 
			loop:true, 
			margin:10, 
			lazyLoad:true, 
			merge:true,
			autoplay:true,
			autoplayHoverPause:true,
			autoplayTimeout:3000, 
			center:true, 
			nav:false, 
			items:1, 
			responsive:{  
				0:{merge:false,items:1,margin:0},
				600:{items:4}
						}
		}));
	});

$("input[type='tel']").inputmask({ mask: "+38(099)999-99-99"});

	$("form.mainform").submit(function(elem) {
		elem.preventDefault();
		    if($(this).find("input[type='tel']").inputmask("isComplete")){
		    	var th = $(this);
					var ref = $(this).find("input[type='tel']").val();
					var til = ref.indexOf('_');
				  if ( til == '-1' ){
				  	$.ajax({
							type: "POST",
							url: "mainmail.php",
							data: th.serialize()
							}).done(function() {
								window.location.replace("https://ryterna.com.ua/thank-you-page");
						});return false;
				  }else{
				  	$(this).find("input[type='tel']").focus();
				  	return false;
				  }
        }else{
        	$(this).find("input[type='tel']").focus().css({'border-color' : 'red'});
        }
	});

$('.owl-carousel-zacaz-rascet').owlCarousel({
	loop: true,
	margin: 30,
	nav: true,
	lazyLoad:true,
	dots: false,
	navText: [
		  '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
		  '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
		],
	items:1,
	responsive : {
		0 : {
			items:1,mouseDrag:false,touchDrag:false
		},
		992 : {
			items:2,mouseDrag:true,touchDrag:true
		}
	}
});

$(".box-zacaz-rascet .btn").on( "click", function(item) {
	item.preventDefault();
	var TitleItem = $(this).parents('.item').find('.h3').text();
	var ItemCena = $(this).parents('.item').find('.box-big-cena').text();
	$('#form-popup .inputbox-title').val(TitleItem);
	$('#form-popup .inputbox-cena').val(ItemCena);
$.magnificPopup.open({
  items: {
    src: '#form-popup'
  },
  type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'formSm',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	}, 0);
  console.log( $(this).text() );
});

$(".box-3 .btn").on( "click", function(item) {
	item.preventDefault();
	var TitleItem = $(this).parents('.item').find('.h3').text();
	$('#form-popup .inputbox-title').val(TitleItem);
$.magnificPopup.open({
  items: {
    src: '#form-popup'
  },
  type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'formSm',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	}, 0);
  console.log( $(this).text() );
});


$(".box-vid-vnechka.dizain .item").on( "click", function(item) {
	var acIt = $(this).attr('idBox');
	$(this).parents('.row').find('.activ').removeClass('activ');
	$(this).addClass('activ');
	$(".box-vid-vnechkas .items").removeClass('d-block');
	$(".box-vid-vnechkas .items").addClass('d-none');
	$('.box-vid-vnechkas .items[idBox^="'+acIt+'"]').addClass('d-block');
});	

$(".box-vid-vnechka-title .item").on( "click", function(item) {
	var acIt = $(this).attr('idBox');
	$(this).parents('.row').find('.activ').removeClass('activ');
	$(this).addClass('activ');
	
	if(acIt == "dizDef"){
		$(".box-vid-vnechka.dizain").removeClass('d-none');
		acIt = 'Rib';
		$('.box-vid-vnechka.dizain .item').removeClass('activ');
		$('.box-vid-vnechka.dizain .item[idBox^="'+acIt+'"]').addClass('activ');
		$(".box-vid-vnechkas .items").removeClass('d-block');
		$(".box-vid-vnechkas .items").addClass('d-none');
		$('.box-vid-vnechkas .items[idBox^="'+acIt+'"]').addClass('d-block');
		
	}else{
		$(".box-vid-vnechka.dizain").addClass('d-none');
		$(".box-vid-vnechkas .items").removeClass('d-block');
		$(".box-vid-vnechkas .items").addClass('d-none');
		$('.box-vid-vnechkas .items[idBox^="'+acIt+'"]').addClass('d-block');
	}

});	

$(".btn-open-text").on( "click", function(item) {
	if ($(this).hasClass('activ')){
		$(this).parents().find('.box-txt-aflert-mobile').css({'max-height' : '150px'}).addClass('d-none');
		$(this).removeClass('activ').html('открыть полностью');
	}else{
		$(this).parents().find('.box-txt-aflert-mobile').css({'max-height' : '1000px'}).removeClass('d-none');
		$(this).addClass('activ').html('Свернуть');	
	}
	
});	
$(".btn-open-box").on( "click", function(item) {
	item.preventDefault();
	if ($(this).hasClass('activ')){
		$(this).parents('.row').find('.item-none').css({'max-height' : '50px'}).addClass('d-none');
		$(this).removeClass('activ').html('Подробнее');
	}else{
		$(this).parents('.row').find('.item-none').css({'max-height' : '1000px'}).removeClass('d-none');
		$(this).addClass('activ').html('Свернуть');	
	}
	
});	

$('.galeri-ruca .nav .next .fa').click(function() {
    $('.owl-carousel-galeri-ruca').trigger('next.owl.carousel');
});
$('.galeri-ruca .nav .prev .fa').click(function() {
    $('.owl-carousel-galeri-ruca').trigger('prev.owl.carousel');
});

$('.box-all-box .menu .item').click(function() {
	var atrIdx = $(this).attr('idx');
	$(this).parents('.box-all-box').find('.menu .item').removeClass('activ');
	$(this).addClass('activ');
	$(this).parents('.box-all-box').find('.box-celendg').addClass('d-none');
	$(this).parents('.box-all-box').find('.box-celendg[idx^="'+atrIdx+'"]').removeClass('d-none');
});

$('.pre-futer-new .menu .btn').click(function() {
	var atrIdxs = $(this).attr('idx');
	$(this).parents('.row').find('.btn').removeClass('activ');
	$(this).addClass('activ');
	$(this).parents('.pre-futer-new').find('.box-celendgs').addClass('d-none');
	$(this).parents('.pre-futer-new').find('.box-celendgs[idx^="'+atrIdxs+'"]').removeClass('d-none');
});


})
