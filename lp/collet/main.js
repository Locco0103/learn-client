$(function(){
  $(window).on('scroll', function(){
    $("#nav").toggleClass('scroll-fixed', $(this).scrollTop() > 110 )
  });

});