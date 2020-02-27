document.addEventListener("DOMContentLoaded", function() {

$( ".box-2 .item .box-btn span" ).on( "click", function() {
  $(this).parent().toggleClass('non-box').find('.box-none').css({'opacity':'1'});
  $(this).parent().find('.caunt').html('<i class="fa fa-refresh fa-spin"></i>').find('.fa').css({'display':'block'});
  setTimeout(function () {
  	var caunt = $( ".heder .box-corzina .caunt-tovar" ).html();
  	$(".box-2 .item .box-btn .box-none .caunt .fa").css({'display':'none'});
  	$(".box-2 .item .box-btn .box-none .caunt").html(caunt);
	}, 3000);
});

$( ".box-2 .item .box-btn .box-none .row .del-box" ).on( "click", function() {
  	$( ".heder .box-corzina .caunt-tovar" ).html("0");
  	$(".box-2 .item .box-btn .box-none .caunt").html('0');
  	$(".heder .box-corzina .cena").html('0');
});
$( ".box-2 .item .box-btn .box-none .row .add-more" ).on( "click", function() {
	var cena = Number($(".heder .box-corzina .cena").html()),
		thisCena = cena + Number($(this).parents('.item').find('.row-info .activ').html());
  	$(".heder .box-corzina .cena").html(thisCena);
  	$(".box-2 .item .box-btn .box-none .caunt").html('<i class="fa fa-refresh fa-spin"></i>').find('.fa').css({'display':'block'});
  	setTimeout(function () {
	  	var cautTovar = Number($( ".heder .box-corzina .caunt-tovar" ).html());
	  	$( ".heder .box-corzina .caunt-tovar" ).html(cautTovar+1);
			$(".box-2 .item .box-btn .box-none .caunt").html(cautTovar+1);
  	}, 3000);
});

$( ".box-2 .item .box-img .img-nav li" ).on( "click", function() {
	var itemImg = $(this).attr('dataImg');
	$(this).parents('.box-img').find('.img-prew .item-img').removeClass('activ');
	$(this).parents('.box-img').find('.img-nav li').removeClass('activ');
	$(this).addClass('activ');
	$(this).parents('.box-img').find('.img-prew .item-img img[src^="'+itemImg+'"]').parent().addClass('activ');
	$(this).parents('.box-img').find('.img-item img').attr('src', itemImg).attr('srcset', itemImg);
});

$( ".box-2 .item .box-img .img-prew .item-img" ).on( "click", function() {
	var itemImg = $(this).find('img').attr('src');
	$(this).parents('.box-img').find('.img-prew .item-img').removeClass('activ');
	$(this).parents('.box-img').find('.img-nav li').removeClass('activ');
	$(this).addClass('activ');
	$(this).parents('.box-img').find('.img-nav li[dataImg^="'+itemImg+'"]').addClass('activ');
	$(this).parents('.box-img').find('.img-item img').attr('src', itemImg).attr('srcset', itemImg);
});




});
