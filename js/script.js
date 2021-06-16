const swiper = new Swiper('.swiper-container', {
  // Optional parameters

  // direction: 'vertical',縦方向の場合
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

new WOW().init();

jQuery('.drawer-icon').on('click',function(e){
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-contents').toggleClass('is-active');
  jQuery('.drawer-bg').toggleClass('is-active');

  return false;
});

jQuery('a[href^="#"]').on('click',function() {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#') {
    var position = jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
    scrollTop: position
  },  
  300);
});

jQuery(window).on('scroll',function(){
  if ( 100 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show');
  }else{
    jQuery('.to-top').removeClass('is-show');
  }
});

jQuery('.header-nav li a').on('click', function() {
  jQuery('.header-nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});

jQuery('.question').on('click', function(){
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qu-icon').toggleClass('is-open');
});

jQuery('.js-modal-close').on('click',function(e){
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).hide();

  return false;
});

jQuery('.js-open-modal').click(function(e){
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).show();
});