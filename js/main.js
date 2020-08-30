jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});

// Porfolio
$(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
  
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
  
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
          $('.venobox').venobox({
            bgcolor    : '#5dff5e',                                   // default: '#fff'
            titleattr  : 'title',                                     // default: 'title'
            numeratio  : false,                                       // default: false
            infinigall : true,                                        // default: false
            share      : ['facebook', 'twitter', 'download']          // default: []
        });
    });
  });

// Adiciona e remove a imagem/transparencia do menu caso o scroll aconteÃ§a
var navbar = document.getElementById('navbar');
var win = window.addEventListener('scroll', function () {
  if (window.scrollY >= 5) {
    navbar.classList.add('shadow-lg');
  } else {
    navbar.classList.remove('shadow-lg');
  }

});

/***************************************************
# End Form
****************************************************/

!(function ($) {
    // Initi AOS
    AOS.init({
        duration: 800,
        easing: "ease-in-out"
    });

})(jQuery);