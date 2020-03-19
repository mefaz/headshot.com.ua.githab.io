$(function() {

new WOW().init();

$('.mainPopup').each(function() {
  $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled:true
    }
  });
});
  
$(document).ready(function() {$('.owl-carousel-defolt').owlCarousel({autoHeight:true,loop: true,margin: 10,navRewind: false,items: 1})})

});
