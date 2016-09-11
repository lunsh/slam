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
 
});