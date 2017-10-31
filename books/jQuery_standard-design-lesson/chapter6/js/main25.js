$(function(){
  // $("nav").hide();
  var offsetY = $('#nav').offset().top;

  $(window).scroll(function(){
// header > ul の offset().top よりスクロールされたら出現
    // var offsetY = $("header > ul").offset().top;

    // if( $(window).scrollTop() > offsetY ) {
    //   $("nav").show();
    // } else {
    //   $("nav").hide();
    // }

// pattern2 runstant 'https://static.runstant.com/phi/projects/87de429a/full' by phi
    if ( $(window).scrollTop() > offsetY ){
      $('#nav').addClass('fixed');
    } else {
      $('#nav').removeClass('fixed');
    }

  });
});