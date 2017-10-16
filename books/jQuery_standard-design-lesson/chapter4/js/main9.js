$(function(){
  $("#menu div ul").hide();
  $("#menu div").hover(function(){
    $(this).children("ul").stop().slideToggle(500);
  });

  // 本通り
  $("#navi").children("li").hover(function(){
    $(this).children("ul").stop().slideToggle(500);
  });

});