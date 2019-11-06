wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       false,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();
$(function() {

$('.box-nahi-client .owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    center:true,
    autoWidth: true,
    //items:4,
    responsive:{
        0:{
          touchDrag:false,
          mouseDrag:false
        },
        768:{
          touchDrag:true,
          mouseDrag:true
        },
        1000:{
          touchDrag:true,
          mouseDrag:true
        }
      }
});

$('.box-otziv .owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    items:3,
    responsive:{
        0:{
          touchDrag:false,items:1,
          mouseDrag:false
        },
        768:{
          touchDrag:true,items:2,
          mouseDrag:true
        },
        1000:{
          touchDrag:true,items:3,
          mouseDrag:true
        }
      }
});

$('.box-blog .owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    items:3,
    responsive:{
        0:{
          touchDrag:false,items:1,
          mouseDrag:false
        },
        768:{
          touchDrag:true,items:3,
          mouseDrag:true
        },
        1000:{
          touchDrag:true,items:3,
          mouseDrag:true
        }
      }
});




});
