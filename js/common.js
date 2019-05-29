$(function() {

$('.mainPopup').each(function() {
  $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled:true
    }
  });
});
  
$('.loop').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
});

$('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });

$('.mainPopupModal').each(function() {
      $(this).magnificPopup({
          type: 'inline',
          focus: '.focus',
          closeOnBgClick: true,
          closeBtnInside: true,
          fixedContentPos: true,
          preloader: true,
          callbacks: {
            open: function() {
              console.log('Popup opened');
              $('body').addClass('noscroll');
            },
            close: function() {
              console.log('Popup console');
              $('body').removeClass('noscroll');
            }
          }
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
});
$('.pgwSlideshow').pgwSlideshow();
$(document).ready(function() {$('.owl-carousel-defolt').owlCarousel({autoHeight:true,loop: true,margin: 10,navRewind: false,items: 1})})
});


$(document).on('click', '.target', function (e) {
  e.preventDefault();
  $.magnificPopup.close();
  $.magnificPopup.open({
    items: {
      src: '#tvo-modal',
      type: 'inline'
    },
          
          focus: '.focus',
          closeOnBgClick: true,
          closeBtnInside: true,
          fixedContentPos: true,
          preloader: true,
          callbacks: {
            open: function() {
              console.log('Popup opened');
              $('body').addClass('noscroll');
            },
            close: function() {
              console.log('Popup console');
              $('body').removeClass('noscroll');
            }
          }
        });
});


$(window).scroll(function() {
var scrolMenu = $('.scrolMenu').offset().top;
if ($(this).scrollTop() > scrolMenu) {
    $(".box-menu").show('300');
}else{
    $(".box-menu").hide('300');}   
});