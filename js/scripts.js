$(document).ready(function(){
  
  $('.about-info').find('h1').addClass('fadeInDown');
  $('.about-info').find('p').addClass('fadeInDown');
 
  $(document).scroll(function() {
    if ( $(document).scrollTop() >= 300) {
      $('.header-wrapper').addClass('header-fixed');
    } else {
      $('.header-wrapper').removeClass('header-fixed');
    }
  });
  $('.about').waypoint(function() {
      $('.about').removeClass('fadeOut').addClass('fadeInLeft');
  }, { offset: '50%' });
  $('.artists-section').waypoint(function() {
      $('.artists-section').removeClass('fadeOut').addClass('fadeInRight');
  }, { offset: '50%' });
  
  
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $('.header-wrapper').outerHeight()
        }, 1000);
        return false;
      }
    }
  });
 
});