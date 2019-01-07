(function($){

/* ---------------------------------------------- /*
 * Backstretch
/* ---------------------------------------------- */

$('#intro').backstretch([
  'images/bg7.jpg',
  'images/bg1.jpg',
  'images/bg8.jpg'
  
], {duration: 3000, fade: 750});


$('#coleccion').backstretch([
  'images/bg9.jpg',
  
], {duration: 3000, fade: 750});

$('#catalogo').backstretch([
  'images/catalogotemp/bg1.png'
], {duration: 3000, fade: 750});

$('#contacto').backstretch([
  'images/bg5.jpg'
], {duration: 3000, fade: 750});



/* ---------------------------------------------- /*
 * Rotate
/* ---------------------------------------------- */

$(".rotate").textrotator({
  animation: "dissolve",
  separator: "|",
  speed: 3000
});

   /* ---------------------------------------------- /*
    * TABS
   /* ---------------------------------------------- */

	$('.tabs').tabslet();
  /* ---------------------------------------------- /*
   * active
  /* ---------------------------------------------- */

  $(function(){
    var botones = $(".margen-button-tabs a");
    botones.click(function() {
      botones.removeClass('activo');
      $(this).addClass('activo');
    });
  });

  /* ---------------------------------------------- /*
   * OWL carousel
  /* ---------------------------------------------- */

  $("#owl-products").owlCarousel({
    items : 5,
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: 5000,
    singleItem: false
  });

    $("#owl-quesos").owlCarousel({
      items : 4,
      slideSpeed : 300,
      paginationSpeed : 400,
      autoPlay: 5000,
      singleItem: false
    });

    $("#owl-postres").owlCarousel({
      items : 4,
      slideSpeed : 300,
      paginationSpeed : 400,
      autoPlay: 5000,
      singleItem: false
    });

  $("#owl-catalogo").owlCarousel({
    items : 1,
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: 5000,
    singleItem: true
  });

  $("#owl-testimonials").owlCarousel({
    items : 1,
    slideSpeed : 300,
    paginationSpeed : 400,
    autoPlay: 5000,
    singleItem: true
  });

  /* ---------------------------------------------- /*
   * image popup
  /* ---------------------------------------------- */
 /* PASTELES*/
      $(document).ready(function() {
        $('.image-popup-vertical-fit').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          mainClass:'mfp-fade',
          gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
          verticalFit: true,
          }
        });
      });
/* PASTELES BODA*/
      $(document).ready(function() {
        $('.image-popup').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          mainClass:'mfp-fade',
          gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
          verticalFit: true,
          }
        });
      });
/*postres*/
      $(document).ready(function() {
       $('.image-popup-postres').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass:'mfp-fade',
        gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
         image: {
         verticalFit: true,
       }
      });
     });
 /* Quesos*/
    $(document).ready(function() {
      $('.image-popup-quesos').magnificPopup({
      type: 'image',
       closeOnContentClick: true,
        mainClass:'mfp-fade',
        gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
        verticalFit: true,
         }
        });
       });
/* PASTELES BODA*/
$(document).ready(function() {
  $('.image-popup-temporada').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass:'mfp-fade',
    gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
    verticalFit: true,
    }
  });
});


/*boton .ir-arriba */
$(document).ready(function(){
  $('.ir-arriba').click(function(){
    $('body, html').animate({
      scrollTop: '0'
    }, 300)
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
      $('.ir-arriba').slideDown(100);
    }else{
      $('.ir-arriba').slideUp(100);
    }
  });
});

})(jQuery);