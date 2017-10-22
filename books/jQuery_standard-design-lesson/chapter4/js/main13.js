$(function(){
  $("ul > li > div").css("opacity",0);
  $("img").hover(function(){
    $(this).siblings("div").stop().animate({
      "opacity": 1
    },300);
  }, function(){
    $(this).siblings("div").stop().animate({
      "opacity": 0
    },300);
  });
});