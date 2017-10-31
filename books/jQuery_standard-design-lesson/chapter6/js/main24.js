$(function(){

  $(window).scroll(function(){
// pattern1
// animate でごり押し
    // if( $(window).scrollTop() > 300 ){
    //   $("header").stop().animate({
    //     "padding":"10px 20px"
    //   },"300ms");
    //   $("header div").stop().animate({
    //     "font-size":"18px",
    //     "padding":"30px 0"
    //   },"300ms");
    // } else {
    //   $("header").stop().animate({
    //     "padding":"80px 20px"
    //   },"300ms");
    //   $("header div").stop().animate({
    //     "font-size":"50px",
    //     "padding":"0"
    //   },"300ms");
    // }

// pattern2
// transition で addClass/removeClass
    $(window).scroll(function(){
      if( $(window).scrollTop() > 300 ){
        $("header").addClass('small');
      } else {
        $("header").removeClass('small');
      }
    });
  });
});